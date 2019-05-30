import React, { Component } from "react";
import { Input, Form, Button, Message } from "semantic-ui-react";
import Layout from "./layout";
import factory from "../ethereum/factory";
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContribueForm extends Component {
  state = {
    loading: false,
    errorMessage: '',
    contributionValue: ''
  };

  onSubmit = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: "" });
    try {
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.contributionValue,'ether')
      });
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false , contributionValue:''});
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Contribute to this Campaign</label>
          <Input
            label="Ether"
        //    labelPosition="right"
            value={this.state.contributionValue}
            onChange={event =>
              this.setState({ contributionValue: event.target.value })
            }
          />
        </Form.Field>
        <Message
          error
          header="Something Went Wrong"
          content={this.state.errorMessage}
        />
        <Button type="submit" primary loading={this.state.loading}>
          Contribute !
        </Button>
      </Form>
    );
  }
}

export default ContribueForm;
