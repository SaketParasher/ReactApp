import React, {Component} from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';


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
    usernames:[
      {name:'Abhishek'},
      {name:'Himanshu'}
    ],
    showPersons:false,
    inputValue:''

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

  onInputChange = event =>{
    this.setState({
      inputValue:event.target.value
    })
  }


  render(){

    let btnClasses = [classes.button];
    let person = null;

    if(this.state.showPersons){
      person = (
        <div className={classes.Toggleperson}>
          {this.state.persons.map( (person,index) => {
            return <Person
             click = { () => this.deletePersonHandler(index)}
             name= {person.name}
             age={person.age}
             key={person.id}
             change={(event) => this.changeNameHandler(event,person.id)}
            />
          })}
              
        </div>
      )
      btnClasses.push(classes.Red);

    } 
 
    let className = [];
    if(this.state.persons.length <=2){
      className.push(classes.red);
    }
    if(this.state.persons.length < 2){
      className.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <header className={classes.Appheader}>
          <div className={className.join(' ')}>I am the Header</div>
          <button className={btnClasses.join(' ')} onClick={this.togglePerson}>Toggle Person</button>
          {person}
          <input type="text" onChange={this.onInputChange} value={this.state.inputValue}/>
          
        </header>
      </div>
    );

  }

}

export default App;


