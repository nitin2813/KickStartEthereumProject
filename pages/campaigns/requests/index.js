import React, { Component } from "react";
import { Form, Button, Card,Table } from "semantic-ui-react";
import Layout from "../../../components/layout";
import Campaign from "../../../ethereum/campaign";
import { Link } from "../../../routes";
import RequestRow from "../../../components/requestRow";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestCount().call();
    const requests = await Promise.all(Array(requestCount).fill().map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );
    const approverCount = await campaign.methods.approverCount().call();
    return{address,requests,approverCount};
  }

  renderRow() {
    return this.props.requests.map((request,index) =>{
      return (<RequestRow
        key = {index}
        id = {index}
        request = {request}
        address = {this.props.address}
        approverCount = {this.props.approverCount}
      />
    );
    });
  }

  render() {
    const {Header,Row,Body,HeaderCell,Cell} = Table;
    return (
      <Layout>
      <div>
      <Link route = {`/campaigns/${this.props.address}/`}>
      <a className = 'item'>Back</a>
      </Link>
      </div>


          <Link route={`/campaigns/${this.props.address}/requests/new`}>
            <a className="item">
              <Button primary> Create Request</Button>
            </a>
          </Link>
          <Table>
            <Header>
              <Row>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Description</HeaderCell>
                <HeaderCell>Amount</HeaderCell>
                <HeaderCell>Recepient</HeaderCell>
                <HeaderCell>Approval Count</HeaderCell>
                <HeaderCell>Approve</HeaderCell>
                <HeaderCell>Finalized</HeaderCell>
              </Row>
            </Header>
            <Body>
              {this.renderRow()}
              </Body>

          </Table>

      </Layout>
    );
  }
}
export default RequestIndex;
