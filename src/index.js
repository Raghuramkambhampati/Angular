import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route} from 'react-router';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Insert from './Insert';
import Read from './read';
import Update from './update';
import Delete from './delete';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <div>
        <Route path="/home" component={App}/>
        <Route path="/insert" component={Insert}/>
        <Route path="/read" component={Read}/>
        <Route path="/update" component={Update}/>
        <Route path="/delete" component={Delete}/>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
