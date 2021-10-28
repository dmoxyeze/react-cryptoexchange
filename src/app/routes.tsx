import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/home/Home';
import MainLayout  from './views/layouts/main-layout';
import { LinearProgress } from '@mui/material';

const Routes = () => {
    return (
        <Suspense fallback={<LinearProgress sx={{ margin: '10rem' }} />}>
            <Switch>
                <Route
                    path={''}
                    render={({ match: { path } }) => (
                        <MainLayout>
                            <Switch>
                                <Route exact path={ path + '/'}
                                    component={Home}
                                />
                            </Switch>
                        </MainLayout>
                    )}>
                </Route>
            </Switch>
        </Suspense>
    )
}

export default Routes;
