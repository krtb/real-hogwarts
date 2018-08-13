import React, { Component } from 'react';


class Person extends Component {
    
    handleClick = event => {
        this.props.removePerson(event.target.id)    
    }

    switchRole = event => {
        this.props.flipRole(event.target.id)
    }
    
    render() {
        return (
            <div> 
                <p> Name: {this.props.personProp.name} </p>
                <p> Age: {this.props.personProp.age} </p>
                <p> House: {this.props.personProp.house} </p>
                <p> <img alt='' src={this.props.personProp.image}/> </p>
                <button id={this.props.personProp.name} onClick={this.handleClick}> Delete </button>
                <button id={this.props.personProp.name} onClick={this.switchRole}> Switch Role </button>
                <hr />
            </div>
        );
    }
}

export default Person;