import React from 'react';

import NewTestament from './bib/pages/NewTestament';
import OldTestament from './bib/pages/OldTestament';
import Settings from './bib/pages/Settings';

const routes = {
    '/': () => <OldTestament />,
    '/NewTestament': () => <NewTestament />,
    '/settings': () => <Settings />

};

export default routes;