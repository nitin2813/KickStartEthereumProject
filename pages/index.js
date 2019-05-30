import React,{Component} from "react";
import {Card, Button, Menu} from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/layout";
import {Link} from '../routes';


class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <Link route = {`/campaigns/${address}`}><a>View Campaign</a></Link>,
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }


  render() {
    return (
      <Layout>
        <div>
          <h2>Open Campaigns</h2>
          <Link route = '/campaigns/new'>
          <a className = 'item'>
          <Button
            content="Create Campaign"
            icon="add circle"
            labelPosition="right"
            primary
            floated = 'right'          />
          </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
