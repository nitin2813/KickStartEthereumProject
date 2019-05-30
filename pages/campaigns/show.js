import React, { Component } from "react";
import {
  Input,
  Form,
  Button,
  Message,
  Card,
  Grid,
  Row
} from "semantic-ui-react";
import Layout from "../../components/layout";
import factory from "../../ethereum/factory";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributionForm from "../../components/contributionForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requests: summary[2],
      approverCount: summary[3],
      manager: summary[4]
    };
  }

  renderSummary() {
    const {
      minimumContribution,
      balance,
      requests,
      approverCount,
      manager
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Manager",
        description: "Managed By the above address",
        style: { overflowWrap: "break-word" }
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Balance in Ether",
        description: "Total Campaign Balance"
      },
      {
        header: web3.utils.fromWei(minimumContribution, "ether"),
        meta: "Minimum Contribution in Ether",
        description: "Minimum Contribution to Join in Ether"
      },
      {
        header: approverCount,
        meta: "Total Approvers",
        description: "Total Approver Count"
      },
      {
        header: requests,
        meta: "Total Requests",
        description: "Total Requests Made"
      }
    ];
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <h3>Campaign Show</h3>
              {this.renderSummary()}
            </Grid.Column>

            <Grid.Column width={6}>
              <ContributionForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a className="item">
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
