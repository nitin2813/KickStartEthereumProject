import React, { Component } from "react";
import Layout from "../../../components/layout";
import { Form, Button, Input } from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign";
import { Router } from "../../../routes";
import web3 from "../../../ethereum/web3";

class NewRequest extends Component {
  state = {
    description: '',
    value: '',
    recipient:''
  };
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address }; //Same
  }
  onSubmit = async event => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;
    const accounts = await web3.eth.getAccounts();
    console.log(web3);
    try {
      console.log(accounts);
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0]
        });
    } catch (err) {
        this.setState({ errorMessage: err.message });
    }
    Router.pushRoute(`/campaigns/${this.props.address}/requests`);
  };

  render() {
    return (
      <Layout>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Value</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>recipient</label>
            <Input
              value={this.state.recipient}
              onChange={event =>
                this.setState({ recipient: event.target.value })
              }
            />
          </Form.Field>
          <Button primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default NewRequest;
