import React from "react";
// import ReactDOM from "react-dom";
import Footer from "../components/Footer";
import { NavItem} from "reactstrap";
import Header from "../components/Header";




const Homepage = () => {
    

    return (
        <div>
            
            <main>
              <NavItem>
                {/* <NavLink href="/SignUp" className="navlink"></NavLink>  */}
              </NavItem>
            </main>
            <header>
              <Header />
            </header>
            <Footer />
        </div>
    )
};

export default Homepage;