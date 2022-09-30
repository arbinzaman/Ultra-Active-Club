import React from 'react';
import '../Excercises/Excercises.css'
const Questions = () => {
    return (
        <div>
            <h1>Frequently Ask Qustions</h1>
                <h3>How does react work?</h3>
                <p>Answer : React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>

                <h3>what are the difference between Props and State ?</h3>
                <p>Answer : Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component</p>

                <h3>Usage of useEffect</h3>
                <p>Answer : useEffect after render: We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.</p>

      
        </div>
    );
};

export default Questions;