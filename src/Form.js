import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: "",
        house: "",
        age: "",
        image: "",
        role: "",
    }

    handleChange = event => {this.setState({[event.target.name]: event.target.value})}

    handleSubmit = event => {
        event.preventDefault();
        this.props.createNewPerson(this.state);
        console.log('new person created')
        this.setState({
            name: "",
            house: "",
            age: "",
            image: "",
            role: "",
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" name="house" placeholder="House" value={this.state.house} onChange={this.handleChange} />
                <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
                <input type="text" name="image" placeholder="Image URL" value={this.state.image} onChange={this.handleChange} />
                <select name="role" onChange={this.handleChange}>
                    <option value="" disabled selected>Select Role</option>
                    <option value="professor">professor</option>
                    <option value="student">student </option>
                </select>
                <button type="submit"> Submit </button>
            </form>
        );
    }
}

export default Form;