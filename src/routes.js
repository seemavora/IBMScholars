import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/homepage/home'
import ABCLesson from './pages/ABCLesson/ABCLesson';
import Reward from './pages/RewardPage/rewards';
import Form from './pages/forms/forms';
import Autism from './pages/Disabilities/Autism/autism';
import ADHD from './pages/Disabilities/ADHD/adhd';

export default function Routes(props) {

    //Add new routes in this array
    const routes = [
        {
            path: '/',
            component: Home
        },
        {
            path: '/lesson',
            component: ABCLesson
        },
        {
            path: '/reward',
            component: Reward
        },
        {
            path: '/form',
            component: Form
        },
        {
            path: '/autism',
            component: Autism
        },
        {
            path: '/adhd',
            component: ADHD
        }
    ]

    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return <Route exact key={index}
                        path={route.path} component={route.component} />
                })}
            </Switch>
        </Router>
    )
}