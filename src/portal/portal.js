import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthenticatedRoute as Route } from '../helpers/routes';

import { NotFound } from '../pages/notfound';
import { ComingSoon } from '../pages/comingsoon';

import { MyNavbar } from './navbar';
import { Landing } from './landing';
import { Listings } from './listings';

export class Portal extends React.Component {
  render(){
    const {...props} = this.props;
    return (
      <>
        <MyNavbar {...props} {...this.props} />
        <Switch>
          <Route exact path='/portal/' component={Landing} props={this.props}/>
            <Route exact path='/portal/listings' component={Listings} props={this.props}/>

          <Route component={NotFound} props={this.props}/>
        </Switch>
      </>
    );
  }
}
