import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { withI18next } from '@root/lib/withI18next';
import Layout from '@root/components/layout';
import CharacterInfo from '@root/components/characterInfo';
import { connect } from 'react-redux';
import { rootEpic } from '@root/redux/epics';
import * as actions from '@root/redux/actions';
import { of } from 'rxjs/observable/of';

export class ReduxExample extends Component {
  static async getInitialProps({ store, isServer }) {
    const resultAction = await rootEpic(
      of(actions.fetchCharacters(isServer)),
      store
    ).toPromise(); // we need to convert Observable to Promise
    store.dispatch(resultAction);

    return { isServer };
  }

  componentDidMount() {
    this.props.startFetchingCharacters();
  }

  componentWillUnmount() {
    this.props.stopFetchingCharacters();
  }

  render() {
    return (
      <Layout title="Redux Example" className="redux-page">
        <div className="container pt-4 pb-4">
          <h1 className="title text-center pb-3">Star Wars Characters!</h1>
          <section className="row">
            {this.props.characters.map((character, key) => (
              <article key={key} className="col-12 col-md-6 col-lg-3 mb-3">
                <CharacterInfo character={character} />
              </article>
            ))}
          </section>
        </div>
      </Layout>
    );
  }
}

ReduxExample.propTypes = {
  characters: array,
  startFetchingCharacters: func,
  stopFetchingCharacters: func,
};

export default connect(
  state => ({
    characters: state.characters,
  }),
  {
    startFetchingCharacters: actions.startFetchingCharacters,
    stopFetchingCharacters: actions.stopFetchingCharacters,
  }
)(withI18next(['common'])(ReduxExample));
