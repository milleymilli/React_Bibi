import React from 'react';
import { A } from 'hookrouter';
import './Header.css';


function Header() {
    return (
        <div className="header">
            <button>
                <a href="#Old">Old-Testament</a>
            </button>
            <button>
                <a href="#New">New-Testament</a>
            </button>
        </div>
    );
}

export default Header;
