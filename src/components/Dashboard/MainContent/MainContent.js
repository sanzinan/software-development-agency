import React from 'react';
import { Route, Switch} from 'react-router-dom';
import MakeAdmin from './MakeAdmin';
import ManageOrder from './ManageOrder';
import ManageService from './ManageService';
import Order from './Order';
import ProductAdd from './ProductAdd';
import Profile from './Profile';
import Review from './Review';

const MainContent = ({match}) => {
    return (
        <div className="admin__content" style={{height:'100vh', overflowY:'scroll'}}>
                <Switch>
                    <Route exact path={`${match.path}/`}>
                        <Profile />
                    </Route>
                    <Route path={`${match.path}/profile`}>
                        <Profile />
                    </Route>
                    <Route path={`${match.path}/orders`}>
                        <Order />
                    </Route>
                    <Route path={`${match.path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${match.path}/orderList`}>
                        <ManageOrder />
                    </Route>
                    <Route path={`${match.path}/addService`}>
                        <ProductAdd />
                    </Route>
                    <Route path={`${match.path}/addAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${match.path}/manageService`}>
                        <ManageService />
                    </Route>
                </Switch>
            </div>
    );
};

export default MainContent;