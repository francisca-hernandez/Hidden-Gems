import React from 'react';

const Footer = () => {
    return (
        <footer className="w-100 mt-auto bg-secondary p-4 fixed-bottom ">
            <div className="container">
                &copy;{new Date().getFullYear()} Breakout rm 16
                &nbsp; 
                
                <a href="" target="_blank">View on Github</a> | If you know, you know

            </div>
        </footer>



    );
};

export default Footer;