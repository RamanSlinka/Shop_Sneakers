import React from 'react';

const About = () => {
    return (
        <div className="content p-40">
            <h1>REACT Sneakers</h1>
            <span>ver.1.0.42</span>
            <h2>This application is made using technologies such as:</h2>
            <ul>
                <li>Hooks: useState, useEffect, useContext. Custom hook</li>
                <li>React router. Page navigation. BrowserRouter, Route.</li>
                <li>Search. Filtration.</li>
                <li>Working with the server. Axios. Indication of loading data from the server.</li>
                <li>Using "Mock API" as BackEnd</li>
                <li>Loader component.React Skeleton.</li>
                <li>SCSS. CSS Animations.Library React icons.</li>
                <li>React Bootstrap. Slider.</li>
            </ul>
        </div>
    );
};

export default About;