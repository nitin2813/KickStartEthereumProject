pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] deployedContracts;

    function createCampaighn(uint minMum) public{
        address newCampaign = new Campaign(minMum, msg.sender);
        deployedContracts.push(newCampaign);
    }
    function  getDeployedCampaigns() public view returns (address[]){
        return deployedContracts;
    }
}


contract Campaign{

    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    Request[] public requests;
    uint public approverCount;
    address public manager;
    mapping (address => bool) public  approvers;
    uint public minContribution;


    modifier restictedToManager() {
       require(msg.sender == manager);
       _;
    }
    function Campaign(uint minMum, address creator) public{
        minContribution = minMum;
        manager = creator;
    }
    function contribute() public payable{
        require(msg.value > minContribution);
        approvers[msg.sender] = true;
        approverCount++;
    }
    function createRequest(string desc,uint val, address recipient) public restictedToManager{
        Request memory newRequest = Request({
            description : desc,
            value: val,
            recipient: recipient,
            complete : false,
            approvalCount:0
        });
        requests.push(newRequest);
    }

    function approveRequest(uint index) public{
        Request storage currentRequest = requests[index];
        require(approvers[msg.sender]);
        require(!currentRequest.approvals[msg.sender]);
        currentRequest.approvals[msg.sender] = true;
        currentRequest.approvalCount++;
    }


    function finalizeRequest(uint index) public restictedToManager{
       Request storage currentRequest = requests[index];
       require(!currentRequest.complete);
       require(currentRequest.approvalCount > (approverCount/2));
       currentRequest.recipient.transfer(currentRequest.value);
       currentRequest.complete = true;
    }

    function getSummary() public view returns(uint,uint,uint,uint,address) {
      return(
        minContribution,
        this.balance,
        requests.length,
        approverCount,
        manager
      );
    }

    function getRequestCount() public view returns(uint){
      return requests.length;
    }


}
