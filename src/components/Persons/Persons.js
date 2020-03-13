import React,{ Component } from 'react';
import Person from './Person/Person';


/**
 *  Now We Are Seperating all the logic of creating the persons in a seperate component. 
 */

 class Persons extends Component {
   render(){
    return this.props.persons.map( (person,index) => {
      return <Person
       click = { () => this.props.clicked(index)}
       name= {person.name}
       age={person.age}
       key={person.id}
       change={(event) => this.props.changed(event,person.id)}
      />
    })
   }
 } 

export default Persons;