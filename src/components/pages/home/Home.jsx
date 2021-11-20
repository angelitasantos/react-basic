import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Home</h1>
        <Link className="btn" to='/about'>About</Link>
    </div>
);

export default Home;