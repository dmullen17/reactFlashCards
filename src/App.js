import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const flatten = function(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

let questionBank = require('./questions.json');
questionBank.questionsList = questionBank.questionsList.filter(obj => (obj.question !== '' && obj.question !== 'PLACEHOLDER'));
let topics = [...new Set(flatten(questionBank.questionsList.map(obj => obj.categories)))];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'Welcome to my flashcards application!  Happy learning 🙃',
            answer: 'No answer this time!',
            selectedTopics: topics,
            questionsList: questionBank.questionsList,
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.removeTopic = this.removeTopic.bind(this);
        this.reset = this.reset.bind(this);
        this.showAnswer = this.showAnswer.bind(this);
    }
    nextQuestion() {
        const index = Math.floor(Math.random() * this.state.questionsList.length);
        this.setState({
            question: this.state.questionsList[index].question,
            answer: this.state.questionsList[index].answer
        });
    }
    showAnswer(e) {
        // Card should flip over 
        
        // Show the answer - just set it to the question - not the best practice.  
        this.setState({
            question: this.state.answer
        });
        // Stop event propogation so nextQuestion isn't triggered
        e.stopPropagation();
        
        //Remove button from flashcard 
    }
    removeTopic(e) {
        // Get text from clicked topic
        const topic = e.target.id;
        // Filter topics and questions
        const filteredTopics = this.state.selectedTopics.filter(object => object !== topic);
        const filteredQuestionList = this.state.questionsList.filter(object => !(object.categories.includes(topic)));
        this.setState({
            selectedTopics: filteredTopics,
            questionsList: filteredQuestionList
        });
    }
    reset() {
        this.setState({
            selectedTopics: topics,
            questionsList: questionBank.questionsList
        });
        console.log(this.state.se)
    }
    render() {
        return (
            <Container className='App' fluid={true}>
            <Nav>
            </Nav>
            <Topics className='topics' selectedTopics={this.state.selectedTopics} removeTopic={this.removeTopic}/>
            <Row className='row2'>
                <FlashCard className='flashCard' question={this.state.question} nextQuestion={this.nextQuestion}/>
            </Row>
            <Row className='row3'>
                <Col xs='auto' className='button-sml'>Choose topics</Col>
                <Col xs='auto' className='button-sml' onClick={this.nextQuestion}>Next question</Col>
                <Col xs='auto' className='button-sml' onClick={this.showAnswer}>Show answer</Col>   
            </Row>
            <Row className='row4'>
                <Col xs='auto' className='button-lg' style={{'paddingLeft': '25px', 'paddingRight': '25px'}} onClick={this.reset}>Reset</Col>
            </Row>
            </Container>
    );
    }
}

const Topics = (props) => {
    const selectedTopics = props.selectedTopics.map(topic => <Col xs='auto' className='btn-topics'>{topic}<i className='fa fa-times' id={topic} onClick={props.removeTopic}></i></Col>);
    return(<Row className='row1'>{selectedTopics}</Row>
    );
}

const FlashCard = (props) => {
    return(<div className='flashCard' onClick={props.nextQuestion}>{props.question}</div>);
}

export default App;
