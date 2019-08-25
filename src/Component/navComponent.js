import React, { Component } from 'react';
import { Nav, Navbar, Button, Modal } from 'react-bootstrap';

class NavComponent extends Component{
  constructor(props){
    super();
    this.state = {
      show: false,
    }
    this.aboutHandler = this.aboutHandler.bind(this)
  }

  aboutHandler(){
    // console.log("test")
    this.setState({ show: !this.state.show}) ;
  }

    render(props){
        return(
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link onClick={this.aboutHandler}>About</Nav.Link>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search Word" className="mr-sm-2" />
              <Button variant="outline-light" onClick={this.handleSearchTerm}>Search</Button>
            </Form> */}
            
            </Nav>
            
            <Modal show={this.state.show}>
        <Modal.Header>
          <Modal.Title>About React Jisho</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p><b>What is React Jisho?</b><br/>
              React Jisho a web applcation build with React JS, based on <a href="https://jisho.org/">Jisho.org</a>, using their API. This application was used to learn how a simple React JS application can be made.
            </p>
            <p>
              <b>What is Jisho?</b><br/>
              Jisho is a powerful Japanese-English dictionary. It lets you find words, kanji, example sentences and more quickly and easily.<br/>
              Enter any Japanese text or English word in the search box and Jisho will search a myriad of data for you.
            </p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.aboutHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

          </Navbar>
        );
    }
}

export default NavComponent;