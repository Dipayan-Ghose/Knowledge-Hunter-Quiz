import React from 'react';

const Blog = () => {
    return (
        <div className='w-75 m-auto mt-5'>
            <h3>
                What is the purpose of react router?
            </h3>
            <p>
            React Router is a standard library for routing in React. 
It enables the navigation among views of various components in a React Application,
 allows changing the browser URL, and keeps the UI in sync with the URL. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
            </p>
            <h3>
            How does context API work?
            </h3>
            <p>
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it 
            </p>
            <h3>
            What is the usage of useHref hook?
            </h3>
            <p>
            The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. useRef returns a mutable ref object whose .current property is initialized to the passed argument. The returned object will persist for the full lifetime of the component.
            </p>
        </div>
    );
};

export default Blog;