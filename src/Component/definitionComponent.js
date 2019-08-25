import React, {Component} from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import CardDefinitionComponent from './cardDefinitionComponent';

class DefinitonComponent extends Component{
    
    createPartsOfSpeech = (data, size) =>{
        if (size === 0){
            return "";
        }
        let result = "(";

        for(let i = 0; i < size; i++){
            if(size === 0){
                result += data[i];
            }else if(i === size-1){
                result += data[i] + ")";
            }else{
                result += data[i] + ', ';
            }
        }
        return result;
    }

    render(){
        let showAntonyms = this.props.antonyms.length !== 0? true : false;
        let showEnglishDef = this.props.englishDef.length !== 0? true: false;
        let showInfo = this.props.info.length !== 0? true: false;
        let showRestrictions = this.props.restrictions.length !== 0? true : false;
        let showAlso = this.props.see_also.length !== 0? true: false;
        let showTag = this.props.tags.length !== 0? true: false;
        return(
            <div>


<Card>
  <Card.Body>
  <Card.Title>
    {
        this.props.word
    }&nbsp;
    {
        this.createPartsOfSpeech(this.props.part_of_speech, this.props.part_of_speech.length)
    }
  </Card.Title>
    <CardDeck>

        {/* Begin Deck */}

    <CardDefinitionComponent title="Antonyms" data ={this.props.antonyms} hidden={showAntonyms}></CardDefinitionComponent>
    <CardDefinitionComponent title="English Definition" data={this.props.englishDef} hidden={showEnglishDef}></CardDefinitionComponent>
    <CardDefinitionComponent title="Information" data={this.props.info} hidden={showInfo}></CardDefinitionComponent>
    <CardDefinitionComponent title="Restrictions" data={this.props.restrictions} hidden={showRestrictions}></CardDefinitionComponent>
    <CardDefinitionComponent title="See Also" data={this.props.see_also} hidden={showAlso}></CardDefinitionComponent>
    <CardDefinitionComponent title="Tags" data={this.props.tags} hidden={showTag}></CardDefinitionComponent>

{/* End Deck */}
    </CardDeck>
  </Card.Body>
</Card>

            </div>
        );
    }
}
export default DefinitonComponent;