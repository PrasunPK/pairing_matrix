import Matrix from "../matrix/Matrix";
import {Route, Switch} from "react-router-dom";
import React from "react";
import Team from "../team/team.container";

export default () => {
    return (
        <main>
            <Switch>
                <Route exact path='/matrix' component={Matrix}/>
                <Route exact path='/team' component={Team}/>
                <Route path='/team/:id' component={Team}/>
            </Switch>
        </main>
    );
}