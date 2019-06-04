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
            question: 'Welcome to my flashcards application!  Select some topics to get started.  Happy learning 🙃',
            answer: 'No answer this time!',
            topics: topics, 
            selectedTopics: [],
            questionsList: [],
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.removeTopic = this.removeTopic.bind(this);
        this.reset = this.reset.bind(this);
        this.addTopic = this.addTopic.bind(this);
        this.showAnswer = this.showAnswer.bind(this);
        /*this.testText = this.testText.bind(this); */
    }
    addTopic(e) {
        const topic = e.target.innerText;
        const selectedTopics = this.state.selectedTopics
        selectedTopics.push(topic);        
        const filteredQuestionList = questionBank.questionsList.filter(object => object.categories.includes(topic));
        this.setState({
            selectedTopics: selectedTopics,
            questionsList: filteredQuestionList
        });
        
        // Apply CSS styling 
    }
    nextQuestion() {        
        // Restart app is no topics are selected 
        if (this.state.questionsList.length === 0) {
            this.setState({
                question: 'No questions remaining.  Please hit reset or select another topic 😎'
            });
            return;
        }
        const index = Math.floor(Math.random() * this.state.questionsList.length);
        this.setState({
            question: this.state.questionsList[index].question,
            answer: this.state.questionsList[index].answer
        });
        
        // Remove selected question from questionsList 
        let questionsListCopy = Array.from(this.state.questionsList);
        questionsListCopy.splice(index, 1);
        this.setState({
            questionsList: questionsListCopy
        });
    }
    showAnswer(e) {
        // Show the answer - just set it to the question - not the best practice.  
        this.setState({
            question: this.state.answer
        });
        // Stop event propogation so nextQuestion isn't triggered
        e.stopPropagation();
    }
    removeTopic(e) {
        // Get topic text from clicked topic
        const topic = e.target.id;
        // Filter topics and questions
        const filteredTopics = this.state.selectedTopics.filter(object => object !== topic);
        const filteredQuestionList = this.state.questionsList.filter(object => !(object.categories.includes(topic)));
        this.setState({
            selectedTopics: filteredTopics,
            questionsList: filteredQuestionList
        });
        e.stopPropagation(); // event will bubble up and trigger addTopic
    }
    /*    testText() {
        this.setState({
            question: 'TEST TEXT TEST TEXT TEST TEXT  TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT vTEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT TEST TEXT'
        });
    }*/
    reset() {
        this.setState({
            question: 'Welcome to my flashcards application!  Select some topics to get started.  Happy learning 🙃',
            answer: 'No answer this time!',
            selectedTopics: [],
            questionsList: []
        });
    }
    render() {
        return (
            <Container className='App' fluid={true}>
            <Nav>
            </Nav>
            <Topics className='topics' topics={this.state.topics} selectedTopics={this.state.selectedTopics} removeTopic={this.removeTopic} addTopic={this.addTopic}/>
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
                {/* <Col xs='auto' className='button-lg' style={{'paddingLeft': '25px', 'paddingRight': '25px'}} onClick={this.testText}>Test</Col> */}
            </Row>
            </Container>
    );
    }
}

const Topics = (props) => {
    const topics = props.topics.map(topic => <Col xs='auto' className='btn-topics' onClick={props.addTopic}>{topic}<i className='fa fa-times' id={topic} onClick={props.removeTopic}></i></Col>);
    return(<Row className='row1'>{topics}</Row>
    );
}

const FlashCard = (props) => {
    return(<Col xs='auto' style={{'maxWidth': '70vw'}} className='flashCard' onClick={props.nextQuestion}>{props.question}</Col>);
}

export default App;
