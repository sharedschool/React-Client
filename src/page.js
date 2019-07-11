import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';

import { Platform } from './pages/platform';

import { Faq } from './pages/faq';

import { About } from './pages/about';
import { Contact } from './pages/contact';

import { NotFound } from './pages/notfound';
import { ComingSoon } from './pages/comingsoon';

export function MyMain(){
  return (
    <Switch>
      <Route exact path='/' component={Home}/>

      <Route exact path='/platform' component={Platform}/>
      <Route exact path='/uses' component={ComingSoon}/>

      <Route exact path='/blog' component={ComingSoon}/>
      <Route exact path='/faq' component={Faq}/>

      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>

      <Route component={NotFound}/>
    </Switch>
  );
}
