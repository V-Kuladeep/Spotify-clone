import React from 'react'
import UserLeftBLock from './UserLeftBLock'
import UserRightBlock from './UserRightBlock'
import "./userBlock.css"
import { Route,Switch,useRouteMatch,Link} from "react-router-dom";

const UserHome = () => {
    let { path} = useRouteMatch();
    return (
      <section id="UserBlock">
        <article>
          <UserLeftBLock />

                <Switch>
                    <Route exact path={`${path}/:id`}>
                        <UserRightBlock />
                    </Route>
                    
          </Switch>
        </article>
      </section>
    );
}

export default UserHome
