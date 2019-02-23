import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Intro = (props) => {
  return (
    <div className="mt-4" >
      <Jumbotron>
        <div className=" text-muted mt-4" >
        <h1 className="display-3">Welcome to PSU WALLET</h1>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Intro;