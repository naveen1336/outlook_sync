import React from 'react';



class Nav extends React.Component
{


  render() {


return (
<nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Outlook</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav authed-nav">
          <li id='home-nav'><a href="/">Home</a></li>
          <li id='inbox-nav'><a href="/mail/index">Inbox</a></li>
          <li id='calendar-nav'><a href="/calendar/index">Calendar</a></li>
          <li id='contacts-nav'><a href="/contacts/index">Contacts</a></li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

}

export default Nav;