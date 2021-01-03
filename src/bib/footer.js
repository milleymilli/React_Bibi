import React from 'react';
import { A } from 'hookrouter';

const footer = () => {
    return (
        <div>
            <button>Night-Mode</button>
            <button>Auto-Scroll</button>
            <button><A exact href="/">Home</A></button>
            <button><A exact href="/settings">Setting</A></button>

        </div>
    );
};

export default footer;