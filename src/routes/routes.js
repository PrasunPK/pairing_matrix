import Matrix from "../matrix/matrix.container";
import Home from "../home/home.component";
import {Route, Switch} from "react-router-dom";
import React from "react";
import Team from "../team/team.container";

export default () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/matrix' component={Matrix}/>
                <Route exact path='/team' component={Team}/>
            </Switch>
        </main>
    );
}