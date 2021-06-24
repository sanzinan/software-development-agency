import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import { useHistory, useRouteMatch } from 'react-router-dom';
import MainContent from './MainContent/MainContent';

const Dashboard = () => {
    const match = useRouteMatch();
    const activePath = useHistory().location.pathname.split('/')[2] || 'profile';
    const [active, setActive] = useState(activePath);

    useEffect(() => {
        setActive(activePath);
        window.scrollTo(0, 0);
    }, [activePath]);
    return (
        <section className="admin">
           <Sidebar active={active} match={match}/>
           <MainContent match={match}/>
        </section>
    );
};

export default Dashboard;