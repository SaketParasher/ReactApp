
import React,{ Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
    render(){
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.change} />
            </div>
        )
    }
} 

export default Person;