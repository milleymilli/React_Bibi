import React from 'react';
import Home from './bib/pages/Home';
import NewTestament from './bib/pages/NewTestament';
import OldTestament from './bib/pages/OldTestament';
import Settings from './bib/pages/Settings';

const routes = {
    '/': () => <Home />,
    '/OldTestament': () => <OldTestament />,
    '/NewTestament': () => <NewTestament />,
    '/settings': () => <Settings />

};

export default routes;