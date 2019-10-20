import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ContainerOrder from './components/order/ContainerOrder'

export default  function Routes(){
    return(
      <BrowserRouter>
            <Switch>
                <Route path="/" component={ContainerOrder}/>
            </Switch>
      </BrowserRouter>
    ) 
}