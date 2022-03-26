import React from 'react';
import './Answer3.css';

const Answer3 = () => {
    return (
        <div className='answer-3'>
            <h2>Question: How useState works?</h2>
            <h5>Answer of this question</h5>
            <p>The useState() is a Hook that allows you to have state variables in functional components. useEffect runs after every render (by default), and can optionally clean up for itself before it runs again. To create a functional component and throw some React hook at it that tracks state, can also update it, and it just works. That was a lot to process and this is just a very simplistic approach to useState. 
            </p>
        </div>
    );
};

export default Answer3;