import React from 'react';
import {Tab, Segment, Divider} from "semantic-ui-react";

export default class WakeTab extends React.Component {
  constructor(props) {
    super(props);

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
