import React from 'react';

const Blogs = () => {
    return (
        <section className='container max-auto'>
            <div>
                <h2>1.Tell us the differences between uncontrolled and controlled components.?</h2>
                <p>Answer:In a controlled component, the state of the component is managed entirely by the parent component. The parent component passes down the current state and any necessary event handlers to the child component as props. When the user interacts with the child component (e.g. by typing into a form field), it notifies the parent component of the change via the event handler, which in turn updates its state and passes the new value down to the child compone</p>
                <h2>2.How to validate React props using PropTypes?</h2>
                <p>Answer:PropTypes allows you to specify the type and shape of the props that your component is expecting, and it will generate warnings in the console if the props don't match the expected types or shapes. Here's how to use PropTypes to validate your React props:</p>
                <h2>3.Tell us the difference between nodejs and express js.?</h2>
                <p>Answer:Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser, while Express.js is a web framework that provides a set of tools and utilities for building web applications and APIs using Node.js.</p>
                <h2> 4. What is a custom hook, and why will you create a custom hook?</h2>
                <p>Answer:</p>
            </div>
        </section>
    );
};

export default Blogs;