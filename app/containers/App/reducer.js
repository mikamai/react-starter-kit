/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the mapping in the handleActions parameter
 *
 * Example:
 * ...
 * [yourAction]: (state, action) => state.set('yourStateVariable', action.someParameter),
 * ...
 */

import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions-helpers';

import {
  loadRepos,
  reposLoaded,
  repoLoadingError,
} from './actions';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
});

export default handleActions({
  [loadRepos]: state => (
    state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'repositories'], false)
  ),
  [reposLoaded]: (state, { repos, username }) => (
    state
      .setIn(['userData', 'repositories'], repos)
      .set('loading', false)
      .set('currentUser', username)
  ),
  [repoLoadingError]: (state, { error }) => (
    state
      .set('error', error)
      .set('loading', false)
  ),
}, { initialState });
