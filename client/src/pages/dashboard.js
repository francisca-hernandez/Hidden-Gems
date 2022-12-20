import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import Gems from '../components/Gems';
import Gemsform from './Gemsform';
// needs a logout function just on the dashboard
import { useQuery, } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

// linking the saveGems
// jsx - same as the other pages
// declaring variable and inputing stuff that needs to be imported
const Dashboard = () => {
    const { data } = useQuery(QUERY_ME);
    console.log(data?.me?.savedGems);
    const gems = data?.me?.savedGems;
    console.log(gems);

    // To make sure user is logged in
    const loggedIn = Auth.loggedIn();
    
    return (
            <main>
                <Navbar />

                <section>
                    <Gemsform />
                </section>
                {/* <div className="container-fluid"></div>
              <div className="flex-row justify-space-between">
                {loggedIn && (
                  <div className="col-12 mb-3">
                    <Gemsform />
                  </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <Gems 
                      gems={gems}
                      title="Found Treasures"
                    />
                  )}
                </div>
                {loggedIn && Gems? (
                  <div className="col-12 col-lg-3 mb-3">
                    <Gems/>
                  </div>
                ) : null}
              </div> */}
              <Footer />
            </main>
          );
        };

export default Dashboard;
// data.me.savedGems is the query call - may need a keyword
// data.me.savedGems will need to be a map function OR we can use another type of loop
// we can add a conditional statement to do something else while the queries are loading
// - (ex: is in the gems form and login page at the bottom)
// Just need them to show up on the page as cards or whatever but
// for now just words (try to look at project 1)

