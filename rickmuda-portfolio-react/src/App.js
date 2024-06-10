import React from 'react';
import './assets/styles/index.css';
import './assets/styles/main.css';
import Logo from './components/logo';
import Continue from './components/continue';
import Copyright from './components/copyright';

function App() {
    return (
        <div className='App'>
            <Logo />
            <Continue />
            <Copyright />
        </div>
    );
}

export default App;
