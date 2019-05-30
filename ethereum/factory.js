import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const abi = JSON.parse(campaignFactory.interface);
const address = '0x7109Dbb3C0D4d0F994F497d51d9869405cD5661A';

const instanceOfFactory = new web3.eth.Contract(abi,address);

export default instanceOfFactory;
