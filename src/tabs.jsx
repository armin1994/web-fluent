import React from 'react';
import { Tab } from 'semantic-ui-react';
import IntentTab from './components/intentTab';
import WakeTab from './components/wakeTab';
import 'normalize.css';
import "styles/base/_main.sass"  // Global styles
import "styles/base/styles.css"

const panes = [
  { menuItem: 'INTENT RECOGNITION', render: () => (<IntentTab/>) },
  { menuItem: 'WAKEWORD', render: () => (<WakeTab/>) }
]

const Tabs = () => (
  <Tab  menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default Tabs;
