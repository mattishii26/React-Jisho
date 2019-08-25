import React, { Component } from 'react';
import { Card, Badge } from 'react-bootstrap';
import DefinitionComponent from './definitionComponent';

class WordComponent extends Component {

  constructor(props) {
    super();
  }

  parseReading = (data) => {
    if(data){
      return " (" + data + ")"
    }
    return "";
  }

  render(props) {
    let success = this.props.common? "success": "danger";
    let successMsg = this.props.common? "Common":"Uncommon";
    return (
      
      <div className="m-3">
        <Card bg="light" border={success}>
          <Card.Header as="h5">
            <div className="d-flex">
            {this.props.title}{this.parseReading(this.props.japanese[0].reading)}
            <div className="ml-auto">
                <div>
                {this.props.jlpt.map(j =>(
                    <Badge variant="info" className="mx-1">{j}</Badge> 
                ))
                }
                
            <Badge variant={success} className="mx-1">{successMsg}</Badge>
            </div>
          </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>
                {this.props.senses.map(j => (
                  <DefinitionComponent
                    word = {this.props.title}
                    antonyms={j.antonyms}
                    englishDef = {j.english_definitions}
                    info = {j.info}
                    links = {j.links}
                    part_of_speech = {j.parts_of_speech}
                    restrictions = {j.restrictions}
                    see_also = {j.see_also}
                    source = {j.source}
                    tags = {j.tags}
                  ></DefinitionComponent>
                ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

    );
  }
}

export default WordComponent;