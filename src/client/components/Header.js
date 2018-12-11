import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log('My auth status is ', auth)

  const authButton = auth ? (
    <a className="ui pink button" href="/api/logout">Logout</a>
  ) : (
    <a className="ui primary button" href="/api/auth/google">Login</a>
  );

  return (
    <div className="ui mini menu">
      <Link className="active item" to="/">React SSR</Link>        
      <div className="right menu">
        <Link className="ui item dropdown" to="/users">Users</Link>
        <Link className="ui item" to="/admins">Admins</Link>
        <div className="item">
            {authButton}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);