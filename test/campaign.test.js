const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("Web3");
const web3 = new Web3(ganache.provider());
const compiledFactory = require("../build/CampaignFactory.json");
const compiledCampaign = require("../build/Campaign.json");

let accounts;
let factory;
let campaign;
let campaignAddress;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods
    .createCampaighn("100")
    .send({ from: accounts[0], gas: 1000000 });
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe("Campaign", async () => {
  it("Deploys a Factory", async () => {
    assert.ok(factory.options.address);
  });

  it("Deploys a Contract", async () => {
    assert.ok(campaign.options.address);
  });

  it("Is manager Test", async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(manager, accounts[0]);
  });

  it("Can contribute", async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: "200"
    });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it("test insufficient value of contribution", async () => {
    try {
      await campaign.methods.contribute().send({
        from: accounts[1],
        value: "10"
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("Can create request", async () => {
    const newRequest = await campaign.methods
      .createRequest("desc", "10", accounts[1])
      .send({
        from: accounts[0],
        gas: "1000000"
      });
    const request = await campaign.methods.requests(0).call();
    assert("desc", request.description);
  });

  it("process request", async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: web3.utils.toWei('10','ether')
    });

    await campaign.methods.createRequest("desc", web3.utils.toWei('5','ether'), accounts[2]).send({
      from: accounts[0],
      gas: "1000000"
    });

    await campaign.methods.approveRequest(0).send({
      from: accounts[1]
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0]
    });

    const request = await campaign.methods.requests(0).call();
    assert(request.complete);
  });
});
