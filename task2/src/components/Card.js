import React from 'react';
import classes from './Card.module.css'

const Card = ({ name, email, id, lname}) => {

    return (
      <div className={classes.cardbox}>
        <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} />
        <div>
		  <br />
          <h6>{name} {lname}</h6>
		  <br />
          <h6>{email}</h6>
        </div>
      </div>
    );
  }

export default Card;
