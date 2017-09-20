
require("./styles/app.scss")



import RootComponent from './scripts/components/RootComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'


// {/* <IndexRedirect to="/main"/> */}
ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            
            {/* <IndexRoute component={WaiMaiComponent}/>
            <Route path="/waimai" component={WaiMaiComponent}></Route>
            <Route path="/finder" component={FinderComponent}></Route>
            <Route path="/order" component={OrderComponent}></Route>
            <Route path="/mine" component={MineComponent}></Route>
            <Route path="/position" component={PositionComponent}></Route>
         //   <Route path="*" component={WaiMaiComponent}></Route> */}

        </Route>
    </Router>
    
    ,document.getElementById("app"))