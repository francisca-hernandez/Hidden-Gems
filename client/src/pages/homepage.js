import React from "react";
// import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavItem, NavLink } from "reactstrap";

const Homepage = () => {
    

    return (
        <div>
            <Navbar />
            <main>
              <NavItem>
                {/* <NavLink href="/SignUp" className="navlink"></NavLink>  */}
              </NavItem>
            </main>
            <Footer />
        </div>
    )
};

export default Homepage;