import React, { Component } from 'react';
import Person from './Person.js'


class List extends Component {
    
    mapPerson = () => {
        return this.props.people.map( personObj => {
            return <Person key={personObj.name} personProp={personObj} removePerson={this.props.removePerson} flipRole={this.props.flipRole}/>
        })
    }
    
    render() {
        return (
            <div className={this.props.className}>
                <h2> {this.props.listTitle} </h2>
                    {this.mapPerson()}
            </div>
        );
    }
}

export default List;