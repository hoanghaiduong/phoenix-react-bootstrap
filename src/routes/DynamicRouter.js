import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

const DynamicRouter = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact
                        render={(props) => {
                            const Component = require(`./${route.component}`).default;
                            return <Component {...props} />;
                        }}
                    />
                ))}
            </Switch>
        </Router>
    );
};

export default DynamicRouter;
