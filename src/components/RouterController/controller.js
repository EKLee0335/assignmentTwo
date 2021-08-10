import React from 'react'
import {Switch,Route } from 'react-router-dom'
import Africa from '../Africa/africa'
import Antarctica from '../Antarctica/antarctica'
import Asia from '../Asia/asia'
import Europe from '../Europe/europe'
import NorthA from '../NorthAmerica/northA'
import Ocean from '../Oceania/oceania'
import SouthA from '../SouthAmerica/southA'

function Controller(){
    return(
        <div>
            <Switch>
            <Route exact path='/AF' component={Africa}></Route>
            <Route exact path='/AN' component={Antarctica}></Route>
            <Route exact path='/AS' component={Asia}></Route>
            <Route exact path='/EU' component={Europe}></Route>
            <Route exact path='/NA' component={NorthA}></Route>
            <Route exact path='/OC' component={Ocean}></Route>
            <Route exact path='/SA' component={SouthA}></Route>
        </Switch>
        </div>
       
    )
}
export default Controller
