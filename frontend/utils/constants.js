import contractStuff from "../contracts/contract.json";
import erc20abi from "../contracts/mockToken.json";

export const contractAbi = contractStuff.abi;
export const ercTokenAbi = erc20abi.abi;

export const mockTokenAddress = erc20abi.address;
export const ERC721MockAddress = '0x9AfFDF8A6b23f42d25EEFF5d79d2b3DEf5092D0E';
export const ERC1155MockAddress = '0xAB45D1cDDf5e32781071c94127c519510819B422';


export const contractAddress = contractStuff.address;


export const contractConfig = {
  address: contractAddress,
  abi: contractAbi,
  watch: true,
  chainId: 4002,
};

export const contractRecklessWriteConfig = {
    address: contractAddress,
    abi: contractAbi,
    mode: "recklesslyUnprepared",
}

export const contractWriteConfig = {
    address: contractAddress,
    abi: contractAbi,
}

export const NFTABI =
    [
        {
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
    ]
