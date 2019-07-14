import React from 'react';
import { Switch } from 'react-router-dom';
import { Auth } from "aws-amplify";
import { AppliedRoute, AuthenticatedRoute } from './helpers/routes';
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

	async handleLogout(event) {
	  await Auth.signOut();
	  this.userHasAuthenticated(false);
	  this.props.history.push("/");
	}
  render(){
    const childProps = {
  		isAuthenticated: this.state.isAuthenticated,
  		userHasAuthenticated: this.userHasAuthenticated,
      logOut: this.handleLogout
	  };
    return (
      <div className="App">
        <Switch>
          <AuthenticatedRoute path="/portal" component={Portal} props={childProps} />
          <AppliedRoute component={MyMain} props={childProps} />
        </Switch>
      </div>
    );
  }
}

export default App;
