
const networkConfig = {
    // sepolia 
    11155111 : { 
        name : "sepolia", 
        // USD / ETH
        priceFeedAddress : "0x694AA1769357215DE4FAC081bf1f309aDC325306"
    }
};

const deploymentChains = ["hardhat","localhost","sepolia"]

export default {
    networkConfig,
    deploymentChains
};