import { ethers } from "ethers";
import rinkebyZoraAddresses from "@zoralabs/v3/dist/addresses/4.json"; // Mainnet addresses, 4.json would be Rinkeby Testnet 
import { AsksV11__factory } from "@zoralabs/v3/dist/typechain/factories/AsksV11__factory";

// This should be an ethers.js signer instance: 
// You can get the signer from a wallet using web3modal/rainbowkit/blocknative wallet etc.
// See: https://docs.ethers.io/v5/api/signer/
const provider = new ethers.providers.Web3Provider(web3.currentProvider, 1);
const signer = await provider.getSigner();

// Initialize Asks v1.1 Module Contract
const askModuleContract = AsksV11__factory.connect(rinkebyZoraAddresses.AsksV1_1, signer);

const blitmapAddress = "0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63"; // Blitmap NFT Contract
const askPrice = ethers.utils.parseEther("100") // 100 ETH Sale Price
const ownerAddress = "0xF296178d553C8Ec21A2fBD2c5dDa8CA9ac905A00"; // Owner of the assets
const findersFeeBps = "200"; // 2% Finders Fee (in BPS)

// Calling Create Ask
// Notice: Since this interaction submits a transaction to the blockchain it requires a signer.
// A signer interfaces with a wallet. You can use walletconnect or injected web3.
