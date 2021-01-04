import React from 'react';
import { useRoutes } from 'hookrouter';
// import '../../bibi.json';

var json = require('../../bibi.json');

const NewTestament = () => {
    // const routes = useRoutes(Routes);
    console.log(json);
    return (
        <div className="new-testament__container">
            <h1>New Testament</h1>
            <button>New-1</button>
            <button>New-2</button>
            <button>New-3</button>
            <section className="toggle-chapter__list"></section>
        </div>
    );
};

export default NewTestament;
