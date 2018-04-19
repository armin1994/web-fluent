import React from 'react';
import {Tab, Segment, Divider} from "semantic-ui-react";

export default class WakeTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <Tab.Pane attached={false}>
        <div>
          <Segment inverted>
            <Divider horizontal inverted>Logs</Divider>
          </Segment>
        </div>
      </Tab.Pane>
    );
  }
}
