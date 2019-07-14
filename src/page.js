import React from 'react';
import { Switch } from 'react-router-dom';
import { AppliedRoute } from './helpers/routes';
import {MyNavBar} from './helpers/navbar';
import {MyFooter} from './helpers/footer';

import { Home } from './pages/home';
import { Platform } from './pages/platform';
import { Faq } from './pages/faq';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { NotFound } from './pages/notfound';
import { ComingSoon } from './pages/comingsoon';

export class MyMain extends React.Component{
  render(){
    const {...props} = this.props;
    return (
      <>
        <MyNavBar {...props} {...this.props} />
        <Switch>
          <AppliedRoute exact path='/' component={Home} props={this.props}/>

          <AppliedRoute path='/platform' component={Platform} props={this.props}/>
          <AppliedRoute path='/uses' component={ComingSoon} props={this.props}/>

          <AppliedRoute path='/blog' component={ComingSoon} props={this.props}/>
          <AppliedRoute path='/faq' component={Faq} props={this.props}/>

          <AppliedRoute path='/about' component={About} props={this.props}/>
          <AppliedRoute path='/contact' component={Contact} props={this.props}/>

          <AppliedRoute component={NotFound}/>
        </Switch>
        <MyFooter props={this.props}/>
      </>
    );
  }
}
