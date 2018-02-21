/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format: 'yourproject/YourContainer/YOUR_ACTION_CONSTANT'
 *
 * To add a new Action
 * 1) Import createAction from redux-actions-helpers module
 * 2) Add a function like this:
 *    export const yourAction = createAction('APP/YOUR_CONTAINER/YOUR_ACTION', var => ({ var }))
 */

import { createAction } from 'redux-actions-helpers';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export const loadRepos = createAction('boilerplate/App/LOAD_REPOS');

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export const reposLoaded = createAction('boilerplate/App/LOAD_REPOS_SUCCESS', (repos, username) => ({ repos, username }));

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export const repoLoadingError = createAction('boilerplate/App/LOAD_REPOS_ERROR', error => ({ error }));
