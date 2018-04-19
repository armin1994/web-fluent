import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Tabs from './tabs'

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp(Tabs);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./tabs', () => {
    renderApp(require('./tabs').default);
  })
}
