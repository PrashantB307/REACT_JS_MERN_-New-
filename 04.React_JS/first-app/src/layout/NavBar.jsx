import React from "react";

const NavBar = (props) => {
    return (
        <>
        <nav className="navbar navbar-dark bg-success navbar-expand-sm">
            <div className="container">
                <a href="abc" className="navbar-brand">{props.value}</a>
            </div>
        </nav>
        </>
    )
}

export default NavBar;