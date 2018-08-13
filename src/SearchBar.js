import React, { Component } from 'react';

class SearchBar extends Component {


    handleChange = (event) => {
        this.props.searchFilter(event.target.value)
    }


    render() {
        return (
            
            <form >
                Search People: <input value={this.props.search} onChange={this.handleChange} type="search" name="q"/>
                <br/>
            </form>
                    );
                }
            }
        
export default SearchBar;
