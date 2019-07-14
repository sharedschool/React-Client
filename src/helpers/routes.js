import React from "react";
import { Route, Redirect } from "react-router-dom";

// Unauthenticated routes
function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function UnauthenticatedRoute({ component: C, props: cProps, ...rest }) {
  const redirect = querystring("redirect");
  return (
    <Route
      {...rest}
      render={props =>
        !cProps.isAuthenticated
          ? <C {...props} {...cProps} />
          : <Redirect
              to={redirect === "" || redirect === null ? "/" : redirect}
            />}
    />
  );
}

// Authenticated routes
export function AuthenticatedRoute({ component: C, props: cProps, ...rest }){
  return (
    <Route
      {...rest}
      render={props =>
        cProps.isAuthenticated
          ? <C {...props} {...cProps} />
          : <Redirect
              to={`/?login=1&redirect=${props.location.pathname}${props.location
                .search}`}
            />}
    />
  );
}

// Applied routes
export function AppliedRoute({ component: C, props: cProps, ...rest }){
  return (
    <Route {...rest} render={props => <C {...props} {...cProps} />} />
  );
}
