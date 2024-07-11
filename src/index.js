import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/stylesheets/style.css';

import Cursor from './Cursor';
import Nav from './Nav';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutPage from './about/AboutPage';
import ProjectsPage from './projects/ProjectsPage';
import { useEffect } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/projects',
        element: <ProjectsPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div id="main">
            <Nav />
            <RouterProvider router={router} />
            <Footer />
            <Cursor />
        </div>
    </React.StrictMode>
);