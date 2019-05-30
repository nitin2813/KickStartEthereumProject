import React, { Component } from "react";
import { Table, Button, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from "../ethereum/campaign";
class RequestRow extends Component {

state = {
 loadingApprove : false,
 loadingFinalize :false,
 errorMessage:''
};

approveRequest =async() => {
  this.setState({loadingApprove:true,errorMessage:''});
  try{
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({ from:accounts[0]});
    }catch(err){
    this.setState({errorMessage:err.message});
    this.setState({loadingApprove:false});
  }
  Router.replaceRoute('/');
  this.setState({loadingApprove:false});
}

finalizeRequest = async() =>{
  this.setState({loadingFinalize:true,errorMessage:''});
  try{
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({from:accounts[0]});
  }catch(err){
    this.setState({errorMessage:err.message});
    this.setState({loadingFinalize:false});
  }
    this.setState({loadingFinalize:false});
}
  render() {
    const { Row, Cell } = Table;
    const {request,id,approverCount} = this.props;
    return (
      <Row>
        <Cell>{id}< /Cell>
        <Cell>{request.description}< /Cell>
        <Cell>{web3.utils.fromWei(request.value,'ether')} ether< /Cell>
        <Cell>{request.recipient}< /Cell>
        <Cell>{request.approvalCount} / {approverCount}< /Cell>

        <Cell>

          <Button inverted color = 'green' loading = {this.state.loadingApprove}  onClick = {this.approveRequest}> Approve </Button>
        < /Cell>
        <Cell><Button inverted  color = 'orange' loading = {this.state.loadingFinalize} onClick = {this.finalizeRequest}> Finalize </Button>< /Cell>

      </Row>
    );
  }
}

export default RequestRow;
