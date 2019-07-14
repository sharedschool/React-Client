import React from 'react';
import { Switch } from 'react-router-dom';
import { Auth } from "aws-amplify";
import { AppliedRoute, AuthenticatedRoute, UnauthenticatedRoute } from './helpers/routes';
import './Theme.css';
import './App.css';
import { MyMain } from './page';
import { Portal } from './portal/portal';

export class App extends React.Component {
  constructor(props) {
	  super(props);

    this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

	  this.state = {
  		isAuthenticated: false,
  		isAuthenticating: true
	  };
	}
  async componentDidMount() {
	  try {
  		await Auth.currentSession();
  		this.userHasAuthenticated(true);
	  }
	  catch(e) {
  		if (e !== 'No current user') {
  		  alert(e);
  		}
	  }
	  this.setState({ isAuthenticating: false });
	}

	userHasAuthenticated(authenticated) {
	  this.setState({ isAuthenticated: authenticated });
	}

	async handleLogout(props) {
	  await Auth.signOut();
	  this.setState({ isAuthenticating: true });
	  props.history.push('/');
	  this.userHasAuthenticated(false);
	  this.setState({ isAuthenticating: false });
	}
	
  render(){
    const childProps = {
  		isAuthenticated: this.state.isAuthenticated,
  		userHasAuthenticated: this.userHasAuthenticated,
		logOut: this.handleLogout
	  };
    return ( 
	  !this.state.isAuthenticating &&
      <div className="App">
        <Switch>
          <AuthenticatedRoute path="/portal" component={Portal} props={childProps} />
          <UnauthenticatedRoute component={MyMain} props={childProps} />
        </Switch>
      </div>
    );
  }
}

export default App;
