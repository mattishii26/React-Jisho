import React, { Component } from 'react';
import WordComponent from './wordComponent';
import TotalComponent from './totalComponent';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class SearchComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            searchTerm: props.searchTerm,
            usedTerm: "",
            items: []
        };
        this.searchHandler = this.searchHandler.bind(this);
        this.onSearchTermHandleChange = this.onSearchTermHandleChange.bind(this);
    }
    searchHandler() {
        this.setState({
            usedTerm: this.state.searchTerm
        })
        // console.log(this.state.searchTerm);
        var proxyURL = 'https://cors-anywhere.herokuapp.com/',
        targetURL = "https://jisho.org/api/v1/search/words?keyword=" + this.state.searchTerm;
        fetch(proxyURL + targetURL)
      .then(res => res.json())
      .then((result) => {
          console.log(result);
          this.setState({
            items: result.data
          });
        },
        (error) => {
          console.log(error)
        }
      )
    }
    componentDidMount(){
        this.setState({searchTerm:"Welcome"}, this.searchHandler);
    }
    onSearchTermHandleChange(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }
    render() {
        return (
            <div className="container mt-4">
                <div className="Row">
                    <InputGroup className="mb-3" value={this.state.searchTerm} onKeyUp={(event) => this.onSearchTermHandleChange(event)}>
                        <FormControl
                            placeholder="Search for a word in English or Japanese"
                            aria-label="Search for a word in English or Japanese"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="primary" onClick={this.searchHandler}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>

                <TotalComponent 
                total={this.state.items.length}
                searchTerm = {this.state.usedTerm}
                ></TotalComponent>

                {
                    this.state.items.map(item => (
                        <WordComponent
                            title={item.slug}
                            common={item.is_common}
                            japanese={item.japanese}
                            jlpt={item.jlpt}
                            senses={item.senses}
                            tags={item.tags}
                        ></WordComponent>
                    ))
                }
            </div>
        );
    }
}

export default SearchComponent;