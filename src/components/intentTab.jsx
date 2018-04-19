import React from 'react';
import {Tab, Form, Card, Segment, Divider} from "semantic-ui-react";
import data from '../_helpers/fake-backend.json';

const getOptions = (data) => data.map(d => {
  return {key: d.id, text: d.name, value: d.id}
})
export default class IntentTab extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    const dataSet = getOptions(data);
    const languages = getOptions(data[0].languages);
    const commands = data[0].languages[0].commands;
    this.setState({
      dataSet: dataSet,
      languages: languages,
      selectDataSet: dataSet[0].value,
      selectLanguage: languages[0].value,
      commands: commands
    });
  }


  handleLanguageChange = (e, {value}) => {
    const indexDataSet = data.map(d => d.id).indexOf(this.state.selectDataSet);
    const indexLanguage = data[indexDataSet].languages.map(d => d.id).indexOf(value);
    const languages = getOptions(data[indexDataSet].languages);
    const commands = data[indexDataSet].languages[indexLanguage].commands;
    this.setState({languages: languages, selectLanguage: value, commands: commands});
  }

  handleDataSetChange = (e, {value}) => {
    const index = data.map(d => d.id).indexOf(value);
    const languages = getOptions(data[index].languages);
    this.setState({
      languages: languages,
      selectDataSet: value,
      selectLanguage: languages[0].value,
      commands: data[index].languages[0].commands
    });
  }

  render() {
    const {dataSet, languages, selectDataSet, selectLanguage, commands} = this.state;
    return (
      <Tab.Pane attached={false}>
        <div>
          <Form>
            <Form.Group widths='equal'>
              <Form.Select name="selectDataSet" fluid label='DataSet' options={dataSet} value={selectDataSet}
                           onChange={this.handleDataSetChange} placeholder='DataSet'/>
              <Form.Select name="selectLanguage" fluid label='Language' options={languages} value={selectLanguage}
                           onChange={this.handleLanguageChange} placeholder='Language'/>
            </Form.Group>
          </Form>
          <Segment inverted>
            <Divider horizontal inverted>Commands</Divider>
          </Segment>
          <Card.Group itemsPerRow={8}>
            {commands.map((c, index) => {
              return <Card key={index} raised href="#" description={c}/>
            })}
          </Card.Group>
        </div>
      </Tab.Pane>
    );
  }
}
