import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="home">
            <div className="home__page-container">
                <Link to="/redux" className="home__link">Redux</Link>
                <Link to="/context-api" className="home__link">Context Api</Link>
            </div>
        </div>
    );
}
