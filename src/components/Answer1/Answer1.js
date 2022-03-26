import React from 'react';
import './Answer1.css';

const Answer1 = () => {
    return (
        <div className='answer-1'>
            <h2>Question: How React works?</h2>
            <p>Answer: React is a library that helps you build user interfaces. It is declarative, which means that you describe the UI as a declarative list of components. React components are reusable, which means that you can write code once and use it on many different pages. When an update is needed in the UI, 
            only the component that is tasked for that specific update needs to be called.React makes it painless to create interactive UIs. 
            </p>
        </div>
    );
};

export default Answer1;