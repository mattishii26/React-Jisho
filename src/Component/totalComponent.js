import React, { Component } from 'react';

class TotalComponent extends Component{
    render(){
        return(
            <div>
                {
                    this.props.total === 0?(
                        <h2>Search for a word in English or Japanese</h2>
                    ):(
                        <h2>{this.props.total} words found for "{this.props.searchTerm}" </h2>
                    )
                }
                
            </div>
            
        );
    }
}

export default TotalComponent;