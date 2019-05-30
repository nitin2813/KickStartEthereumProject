const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("Web3");

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

const provider = new HDWalletProvider(
  "size rib trumpet park pet hybrid series response where dismiss thought voyage",
  "https://rinkeby.infura.io/v3/018e52aa2c604b84b6622d0bbaadc591"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Deploying from Account", accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ from: accounts[0] });
  console.log(compiledFactory.interface);
  console.log("Contract deployed to", result.options.address);
};

deploy();
