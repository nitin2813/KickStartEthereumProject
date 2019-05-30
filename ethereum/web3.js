import Web3 from 'web3';


let web3;
if( typeof window != 'undefined' && typeof window.web3 != 'undefined'){
  // We are on browser
  const getProvider = async () => {
  await window.web3.currentProvider.enable(); // request authentication
};
getProvider();
  web3 = new Web3(window.web3.currentProvider);
}
else{
  // We are on server
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/018e52aa2c604b84b6622d0bbaadc591'
  );
  web3 = new Web3(provider);
}

export default web3;
