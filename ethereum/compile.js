const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);
const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'UTF-8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in output){
let name = contract.replace(':','');
  fs.outputJsonSync(
    path.resolve(buildPath,name+'.json'),
    output[contract]
  );
}
