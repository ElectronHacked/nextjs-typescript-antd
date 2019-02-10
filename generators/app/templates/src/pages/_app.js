// pages/_app.js
import React from 'react';
import App, {Container} from 'next/app';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore} from '../redux/createStore';

const {store, persistor} = configureStore ();

export default class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps (ctx)
      : {};
    return {pageProps};
  }

  render () {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}
