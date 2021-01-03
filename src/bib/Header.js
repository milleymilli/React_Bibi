import React from 'react';
import { A } from 'hookrouter';


function Header() {
    return (
        <div>
            <button> <A href="/">Old-Testament</A></button>
            <button><A href="/NewTestament">New-Testament</A></button>
        </div>
    );
}

export default Header;
