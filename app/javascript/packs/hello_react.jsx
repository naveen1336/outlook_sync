import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Dashboard from './components/dashboard';
import Contacts from './components/contacts';
import Home from './components/home';


import ReactLoginMS from "react-ms-login";

class App extends React.Component
{

render(){
    return (
   <BrowserRouter>
            <div>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/dashboard"  component={Dashboard} />
        <Route path="/contacts"  component={Contacts} />
        </Switch>
        </div>
        </BrowserRouter>);
}

}


class ButtonContent extends React.Component {
    render(){
        return (
            
         <span> Login With Microsoft </span>

       
        );
    }
}


document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(<App />, document.body.appendChild(document.createElement('div')));

ReactDOM.render(<ReactLoginMS
    clientId="f88d2777-da59-4120-b478-3d4f7697df5b" 
    redirectUri="https://localhost:3000/dashboard" 
    scopes={["user.read"]} 
    responseType="token"
    cssClass="some-css-class" 
    btnContent={ButtonContent} 
    handleLogin={(data) => console.log(data)}
/>, document.body.appendChild(document.createElement('div')));
})