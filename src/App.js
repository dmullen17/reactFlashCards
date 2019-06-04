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
        this.addTopic = this.addTopic.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.removeTopic = this.removeTopic.bind(this);
        this.reset = this.reset.bind(this);
        this.toggleTopic = this.toggleTopic.bind(this);
        this.showAnswer = this.showAnswer.bind(this);
        /*this.testText = this.testText.bind(this); */
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
    removeTopic(topic) {
        // Filter topics and questions
        const filteredTopics = this.state.selectedTopics.filter(object => object !== topic);
        const filteredQuestionList = this.state.questionsList.filter(object => !(object.categories.includes(topic)));
        this.setState({
            selectedTopics: filteredTopics,
            questionsList: filteredQuestionList
        });
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
    addTopic(topic) {
        const selectedTopics = this.state.selectedTopics
        selectedTopics.push(topic);
        const filteredQuestionList = this.state.questionsList.concat(questionBank.questionsList.filter(object => object.categories.includes(topic)));
        this.setState({
            selectedTopics: selectedTopics,
            questionsList: filteredQuestionList
        });
    }
    toggleTopic(e) {
        const topic = e.target.innerText;
        const selectedTopics = this.state.selectedTopics;
        
        if (selectedTopics.includes(topic)) {
            this.removeTopic(topic);
        } else {
            this.addTopic(topic);
        }
    }
    render() {
        return (
            <Container className='App' fluid={true}>
            <Nav>
            </Nav>
            <Topics className='topics' topics={this.state.topics} selectedTopics={this.state.selectedTopics} toggleTopic={this.toggleTopic}/>
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

{/*const Topics = (props) => {
    const topics = props.topics.map(topic => <Col xs='auto' className='btn-topics' onClick={props.toggleTopic}>{topic}<i className='fa fa-times' id={topic} onClick={props.removeTopic}></i></Col>);
    return(<Row className='row1'>{topics}</Row>
    );
}
*/}

const Topics = (props) => {
    const topics = props.topics.map(topic => <Topic toggleTopic={props.toggleTopic} topicName={topic}/>)
    return(<Row className='row1'>{topics}</Row>)
}

class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }
    render() {
        return (
            <Col xs='auto' className={this.state.active ? 'btn-topics btn-topics-selected' : 'btn-topics'} onClick={(e) => {this.toggleClass(); this.props.toggleTopic(e);}}>
            {this.props.topicName}
            </Col>
        );
    }
}

const FlashCard = (props) => {
    return(<Col xs='auto' style={{'maxWidth': '70vw'}} className='flashCard' onClick={props.nextQuestion}>{props.question}</Col>);
}

export default App;
