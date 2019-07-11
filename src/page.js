import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';

import { Platform } from './pages/platform';

import { Faq } from './pages/faq';

import { About } from './pages/about';
import { Contact } from './pages/contact';

function Uses(){
  return <div>Uses page</div>;
}

function Blog(){
  return <div>Blog page</div>;
}

export function MyMain(){
  return (
    <Switch>
      <Route exact path='/' component={Home}/>

      <Route exact path='/platform' component={Platform}/>
      <Route exact path='/uses' component={Uses}/>

      <Route exact path='/blog' component={Blog}/>
      <Route exact path='/faq' component={Faq}/>

      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
    </Switch>
  );
}
