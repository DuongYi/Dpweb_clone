import React, { Suspense, lazy } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import LoadingScreen from 'src/components/LoadingScreen';
import NotiDialog from 'src/components/NotiDialog';

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {/* <Route
          exact
          path="/login"
          component={lazy(() => import('./views/auth/Login'))}
        /> */}
        {/* <Route
          exact
          path="/register"
          component={lazy(() => import('./views/auth/Register'))}
        /> */}
        <Route
          exact
          path="/404"
          component={lazy(() => import('src/views/pages/Error404View'))}
        />
        <Route
          path="*"
          render={() => (
            <Header>
              <NotiDialog />
              <Switch>
                <Route
                  exact
                  path="/tools/:tid"
                  component={lazy(() => import('src/views/ProductsView/ToolView'))}
                />
                <Route
                  exact
                  path="/tools"
                  component={lazy(() => import('src/views/AllProductsView/AllToolView'))}
                />
                <Route
                  exact
                  path="/Blog/4"
                  component={lazy(() => import('src/views/Blog/Blog4'))}
                />
                <Route
                  exact
                  path="/Blog/3"
                  component={lazy(() => import('src/views/Blog/Blog3'))}
                />
                <Route
                  exact
                  path="/Blog/2"
                  component={lazy(() => import('src/views/Blog/Blog2'))}
                />
                <Route
                  exact
                  path="/Blog/1"
                  component={lazy(() => import('src/views/Blog/Blog1'))}
                />
                <Route
                  exact
                  path="/blogs"
                  component={lazy(() => import('src/views/AllProductsView/AllBlogView'))}
                />
                <Route
                  exact
                  path="/"
                  component={lazy(() => import('src/views/Home'))}
                />
                <Redirect to="/404" />
              </Switch>
            </Header>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
