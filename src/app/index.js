import React from 'react';

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Learn, Grow, and Succeed with <span className="text-primary">Online Tutoring</span></h1>
      <p className="lead">
        Experience personalised learning that empowers you to excel in every subject, 
        with expert tutors available at your convenience.
      </p>
      <div>
        <button className="btn btn-primary m-2">Login</button>
        <button className="btn btn-secondary m-2">Sign Up</button>
      </div>
    </div>
  );
}
