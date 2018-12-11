import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li className="item" key={user.id}>{user.name}</li>
    });
  }

  render() {
    return (
      <div className="ui container">
        <Helmet>
          <title>Oh Dany</title>
          <meta property="og:title" content="Oh Dany" />
        </Helmet>
        Here´s a big list of users:
        <ul className="ui list">{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users }; 
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, {fetchUsers}) (UsersList)
};