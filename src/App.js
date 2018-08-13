import React, { Component } from 'react';
import './App.css';
import data from './data/api.js';
import List from './List.js';
import Form from './Form.js';
import SearchBar from './SearchBar'

class App extends Component {
  
  state = {
      people: [],
      search: ''
    }
  

  removePerson = name => {
    
    const findPerson = this.state.people.filter( person => person.name !== name)
    
    this.setState({people: findPerson})
  }

  searchFilteredData = () => {
    return this.state.people.filter( person => {
        return person.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
  }

  filterProfessors = () => {
    return this.searchFilteredData().filter( person => {
      return person.role === 'professor'     
    })
  }

  filterStudents = () => {
    return this.searchFilteredData().filter(person => {
      return person.role === 'student'
    })
  }

  createNewPerson = personData => {
    console.log(personData);
    this.setState({people: [...this.state.people, personData]})
  }

  flipRole = name => {
 
    const newPersonArray = this.state.people.map( person => {
      if (person.name === name) {

        const personRole = person.role;

        let newRole; 

        if (personRole === 'professor') {
          newRole = 'student';
        } else {
          newRole = 'professor';
        }

        const newPersonObj = {...person, role: newRole}
        return newPersonObj;
      } else {
        return person
      }
    })

    this.setState({people: newPersonArray})
  }

  searchFilter = (value) => {
    this.setState({
      search: value
    })
    
  }

  render() {
    return (
      <React.Fragment>
        <br/>
        <SearchBar searchFilter={this.searchFilter} search={this.state.search}/>
        <br/>
        <div><Form createNewPerson={this.createNewPerson}/> </div>
        <div><List className="professor-list" listTitle='professors' people={this.filterProfessors()} flipRole={this.flipRole} removePerson={this.removePerson}/> </div>
        <div><List className="student-list" listTitle='students' people={this.filterStudents()} flipRole={this.flipRole} removePerson={this.removePerson}/> </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.setState({
      people: data
    })

  }

}

export default App;
