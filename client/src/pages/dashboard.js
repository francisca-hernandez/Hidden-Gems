import React from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// needs a logout function just on the dashboard 
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

// linking the saveGems
// jsx - same as the other pages
// declaring variable and inputing stuff that needs to be imported

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_ME)
    console.log(data); 

    const savedGems = data?.savedGems || [];


    const loggedIn = Auth.loggedIn();

    return (
        <main>
            <div>
                <h1>GEMS</h1>
            </div>
        </main>
    );
};


export default Dashboard; 
