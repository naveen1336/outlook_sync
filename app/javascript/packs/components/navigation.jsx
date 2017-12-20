import React from 'react';
import { Link } from 'react-router-dom'



class Nav extends React.Component
{


  render() {


return (
<nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Outlook</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav authed-nav">
          <li id='home-nav'><a href="/">Home</a></li>
          <li id='inbox-nav'><a href="/mail/index">Inbox</a></li>
          <li id='calendar-nav'><a href="/calendar/index">Calendar</a></li>
          <li id='contacts-nav'><Link to="/dashboard/contacts">Contacts</Link></li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

}

export default Nav;