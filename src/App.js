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
    render() {
        return (
            <Container className='App' fluid={true}>
            <Nav>
            </Nav>
            <Topics className='topics' selectedTopics={this.state.selectedTopics} removeTopic={this.removeTopic}/>
            <Row className='row2'>
                <FlashCard className='flashCard' question={this.state.question} nextQuestion={this.nextQuestion} showAnswer={this.showAnswer}/>
            </Row>
            </Container>
    );
    }
}

const Topics = (props) => {
    const selectedTopics = props.selectedTopics.map(topic => <Col xs={2} className='btn-topics'>{topic}<i className='fa fa-times' id={topic} onClick={props.removeTopic}></i></Col>);
    return(<Row className='row1'>{selectedTopics}</Row>
    );
}

const FlashCard = (props) => {
    return(<div className='flashCard' onClick={props.nextQuestion}>{props.question}<i className='fa fa-arrow-circle-right' onClick={props.showAnswer}></i></div>);
}

export default App;
