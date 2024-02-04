

// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
    
contract Payable { 

    address payable public owner;
    address public ETH_to_USD; 

    AggregatorV3Interface internal priceFeed;

    constructor() { 
        owner = payable (msg.sender);
        ETH_to_USD =  0x694AA1769357215DE4FAC081bf1f309aDC325306;
        priceFeed = AggregatorV3Interface(ETH_to_USD);
    }

    function getConversionRate() public view returns (uint256) { }

    function getLatestPrice() public view returns (uint256) {
        ( ,int256 price,,,) = priceFeed.latestRoundData();
        return uint256(price * 1e10);
    }

    function sendViaCall(address payable _to) public payable {
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, ) = _to.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }

    function getOwnerBalance() public view returns (uint256) {
        return owner.balance;
    }  

    function getContractBalance() public  view returns (uint256) { 
        return address(this).balance;
    }

    receive() external payable { }
}


/*
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
    
contract Payable { 

    address payable public owner;
    address public ETH_to_USD; 

    AggregatorV3Interface internal priceFeed;

    constructor(address priceFeedAddress) { 
        owner = payable (msg.sender);
        ETH_to_USD =  priceFeedAddress;
        priceFeed = AggregatorV3Interface(ETH_to_USD);
    }

    function getConversionRate() public view returns (uint256) { }

    function getLatestPrice() public view returns (uint256) {
        ( ,int256 price,,,) = priceFeed.latestRoundData();
        return uint256(price * 1e10);
    }

    function sendViaCall(address payable _to) public payable {
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, ) = _to.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }

    function getOwnerBalance() public view returns (uint256) {
        return owner.balance;
    }  

    function getContractBalance() public  view returns (uint256) { 
        return address(this).balance;
    }

    receive() external payable { }
}
*/