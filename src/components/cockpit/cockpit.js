import React from 'react';
import classes from './cockpit.module.css';

const cockpit = props => {

    let className = [];
    let btnClasses = [classes.button];
    
    if(props.persons.length <=2){
      className.push(classes.red);
    }
    if(props.persons.length < 2){
      className.push(classes.bold);
    }

    if(props.showPerson){
        btnClasses.push(classes.Red);
    }

    return (
        <div>
          <div className={className.join(' ')}>{props.title}</div>
          <button className={btnClasses.join(' ')} onClick={props.toggle}>Toggle Person</button>
        </div>
    )
}

export default cockpit;