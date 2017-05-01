import React from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component{
  render()
  {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Admin</h1>
        <p>React, Redux and React Router</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}
