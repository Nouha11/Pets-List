import React from "react";

function Navbar () {
    const Items=["home", "About us", "Contact US"]
    return (
        <div className="Box">
        <div className="Navbar">
            <nav>
                {
                    Items.map(e => <li>{e}</li>)
                }
            </nav>
            </div>
        </div>
    )
}

export default Navbar;
