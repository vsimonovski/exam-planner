import React from 'react';
import {render} from 'react-dom';

import './css/style.css';
// Compontents
import App from './components/App.js';

const Root = () => {
    return (
        <div className="app-wrap">
            <App/>
        </div>
    )
}

render(<Root/>, document.querySelector("#main"));