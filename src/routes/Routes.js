import Matrix from "../matrix/Matrix";
import {Route, Switch} from "react-router-dom";
import React from "react";

export default () => {
    return (
        <main>
            <Switch>
                <Route exact path='/matrix' component={Matrix}/>
            </Switch>
        </main>
    );
}