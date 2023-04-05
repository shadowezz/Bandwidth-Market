// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract LinkContractV2 is ERC20, ReentrancyGuard {

    uint256 private _fixedValidSupply;

    uint256 public linkCapacity;
    uint256 public currentTimestamp;
    uint256 public timeInterval;
    uint256 public previousTotalBid;
    uint256 public currentTotalBid;
    
    address[] private users;
    address[] private pastUsers;

    mapping(address => uint) private userToBidMap;

    mapping(address => uint) private _balance;


    event TotalBidChanged(uint originalValue, uint newValue);


    event TokensReallocated(address[] users, uint[] amounts);

    constructor(uint256 initialTokenSupply, uint256 _linkCapacity, uint256 _timeInterval, string memory tokenName, string memory tokenSymbol) ERC20(tokenName, tokenSymbol) {
        currentTimestamp = block.timestamp;
        linkCapacity = _linkCapacity;
        timeInterval = _timeInterval;
        _mint(address(this), initialTokenSupply);
    }

    function hasUserBidded() public view returns (bool) {
        return userToBidMap[msg.sender] != 0;
    }

    function getUserCurrentBid() public view returns (uint) {
        return userToBidMap[msg.sender];
    }

    function acceptNewBid(uint256 bid) external payable {
        address user = msg.sender;
        uint amountPaid = msg.value;
        require(userToBidMap[user] == 0, "User has already bidded");
        require(bid != 0, "Bid must be positive");
        require(bid == amountPaid, "Incorrect amount sent");
        users.push(user);
        userToBidMap[user] = bid;
        uint _currentTotalBid = currentTotalBid;
        uint newTotalBid = _currentTotalBid + bid;
        currentTotalBid = newTotalBid;
        emit TotalBidChanged(_currentTotalBid, newTotalBid);
    }

    function updateBid(uint changeAmt, bool isIncrease) external payable nonReentrant {
        address user = msg.sender;
        uint originalBid = userToBidMap[user];
        require(originalBid != 0, "Invalid sender");
        uint newBid;
        if (changeAmt == 0) {
            return;
        } else if (isIncrease) {
            require(msg.value == changeAmt, "Incorrect amount sent");
            newBid = originalBid + changeAmt;
            userToBidMap[user] = newBid;
            currentTotalBid += changeAmt;
        } else {
            // refund
            require(originalBid > changeAmt, "Not enough existing bid");
            address payable receiver = payable(user);
            unchecked {
                newBid = originalBid - changeAmt;
                userToBidMap[user] = newBid;
                currentTotalBid -= changeAmt;
            }
            receiver.transfer(changeAmt);
            
        }
        emit TotalBidChanged(originalBid, newBid);
    }

    function allocateBandwidth() external {
        uint newTimestamp = block.timestamp;
        require(newTimestamp >= currentTimestamp + timeInterval, "Current round has not ended");
        uint userCount = users.length;
        uint[] memory tokensAllocatedPerUser = new uint[](userCount);
        for (uint i = 0; i < pastUsers.length; i++) {
            _balance[pastUsers[i]] = 0;
        }
        for (uint i = 0; i < userCount; i++) {
            address user = users[i];
            uint finalBid = userToBidMap[user];

            uint tokensAllocated = finalBid * _fixedValidSupply / currentTotalBid;
            _balance[user] = tokensAllocated;
            tokensAllocatedPerUser[i] = tokensAllocated;
            // reset map value
            userToBidMap[user] = 0;
            emit Transfer(address(0), user, tokensAllocated);
        }
        emit TokensReallocated(users, tokensAllocatedPerUser);
        // cleanup
        pastUsers = users; // array copied
        currentTimestamp = newTimestamp;
        previousTotalBid = currentTotalBid;
        currentTotalBid = 0;
        delete users;
    }


    function totalSupply() public view virtual override returns (uint256) {
        return _fixedValidSupply;
    }

    function decimals() public view virtual override returns (uint8) {
        return 0;
    }

    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balance[account];
    }

    function _mint(address account, uint256 amount) internal virtual override {
        require(account != address(0), "BandwidthToken: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _fixedValidSupply += amount;
        unchecked {
            // Overflow not possible: balance + amount is at most totalSupply + amount, which is checked above.
            _balance[account] += amount;
        }
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        if (_balance[to] == 0 && amount != 0) {
            pastUsers.push(to);
        }
        _transfer(owner, to, amount);
        return true;
    }
}