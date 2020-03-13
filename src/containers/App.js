import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';

/**
 * CLASS - BASED - APPROACH
 */

class App extends Component {
  state = {
    persons:[
      {id:'qr1',name:'Max',age:'29'},
      {id:'qr2',name:'Manu',age:'28'},
      {id:'qr3',name:'Staphenie',age:'25'}
    ],
    showPersons:false
  }

  switchNamehandler = (newName) => {
    this.setState({
      ...this.state,
      persons:[
        {name:newName,age:'29'},
        {name:'Manu',age:'28'},
        {name:'Staphenie',age:'26'}
      ] 
    })
  }

  /**
   * Change name Handler from input of Person Component
   */
  changeNameHandler = (event,id) => {

    const persons = [...this.state.persons];
    const personToupdateIndex = persons.findIndex( person => {
      return person.id === id;
    });
    const personToUpdate = {...persons[personToupdateIndex]}
    personToUpdate.name = event.target.value;
    persons[personToupdateIndex] = personToUpdate;

    this.setState({
      persons:persons
    })
  }

  togglePerson = () => {
    this.setState({
      showPersons : !this.state.showPersons
    })
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons:persons
    })
  }

  render(){
    
    let person = null;
    if(this.state.showPersons){
      person = (
        <div className={classes.Toggleperson}>
          <Persons persons={ this.state.persons} clicked={this.deletePersonHandler} changed={this.changeNameHandler}/>
        </div>
      )
    } 
 
    return (
      <div className={classes.App}>
        <header className={classes.Appheader}>
          <Cockpit 
            persons={this.state.persons}
            showPerson={this.state.showPersons}
            toggle={this.togglePerson}
            title={this.props.appTitle}/>
          {person}
        </header>
      </div>
    );

  }

}

export default App;


