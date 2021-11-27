import * as React from 'react';
import { Route, Switch } from 'react-router' 
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'

export default () => (
    <Layout>
        <p> TypeScipt React + NET 6 </p>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
       </Switch>

    </Layout>
);
