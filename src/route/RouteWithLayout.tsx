import React, { ReactNode, Suspense, LazyExoticComponent, ComponentType } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LandingRoutes } from './RouteEnum';

interface Props {
  Layout: React.ComponentType<any>;
  Component: React.FC<any> | LazyExoticComponent<ComponentType<any>>;
  path: string;
  exact?: boolean;
  fallback: NonNullable<ReactNode> | null;
  redirect?: string;
  isAuthRequired: boolean;
  requiredRoles?: string[];
  requiredDuties?: string[];
}

const RouteWithLayout = ({
  Layout,
  Component,
  path,
  exact,
  fallback,
  redirect,
  isAuthRequired,
  requiredRoles,
  requiredDuties,
  ...props
}: Props): JSX.Element => {
  // const { isAuth } = useContext(AuthContext);
  // const { userRoles }: useContext(UserContext);
  // const { userDuties }: useContext(UserContext);
  // const userHasRequiredRole = requiredRoles.includes();
  // const userHasRequiredDuty = requiredRoles.includes();

  const isAuth = true;

  return (
    <Suspense fallback={fallback}>
      <Route
        path={path}
        render={(props: any) =>
          redirect ? (
            <Redirect to={redirect} />
          ) : isAuthRequired ? (
            isAuth ? (
              <Layout>
                <Component {...props} />
              </Layout>
            ) : (
              <Redirect to={LandingRoutes.base} />
            )
          ) : (
            <Layout>
              <Component />
            </Layout>
          )
        }
      />
    </Suspense>
  );
};

export { RouteWithLayout };
