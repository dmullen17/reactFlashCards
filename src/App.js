import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let questionBank = require('./questions.json');
questionBank.questionsList = questionBank.questionsList.filter(obj => (obj.question !== '' && obj.question !== 'PLACEHOLDER'));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'Welcome to my flashcards application!  Happy learning 🙃',
            answer: 'No answer this time!',
            selectedTopics: ['JavaScript', 'React', 'CSS']
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.removeTopic = this.removeTopic.bind(this);
        this.showAnswer = this.showAnswer.bind(this);
    }
    nextQuestion() {
        const index = Math.floor(Math.random() * questionBank.questionsList.length);
        this.setState({
            question: questionBank.questionsList[index].question,
            answer: questionBank.questionsList[index].answer
        });
    }
    showAnswer(e) {
        // Card should flip over 
        
        // Show the answer - just set it to the question - not the best practice.  
        this.setState({
            question: this.state.answer
        });
        console.log('hi');
        e.stopPropagation();
    }
    removeTopic(e) {
        // Get text from clicked topic
        const topic = e.target.id;
        const filteredTopics = this.state.selectedTopics.filter(object => object !== topic);
        this.setState({
            selectedTopics: filteredTopics
        });
    }
    render() {
        return (
            <Container className='App' fluid={true}>
            <div className='container-fluid'>
                <Topics className='topics' selectedTopics={this.state.selectedTopics} removeTopic={this.removeTopic}/>
            <Row className='row2'>
                <FlashCard className='flashCard' question={this.state.question} nextQuestion={this.nextQuestion} showAnswer={this.showAnswer}/>
            </Row>
            </div>
            </Container>
    );
    }
}

const Topics = (props) => {
    const selectedTopics = props.selectedTopics.map(topic => <Col xs={2} className='btn-topics'>{topic}<i className='fa fa-times' id={topic} onClick={props.removeTopic}></i></Col>);
    return(<Row className='row1'>Topics:{selectedTopics}</Row>
    );
}

const FlashCard = (props) => {
    return(<div className='flashCard' onClick={props.nextQuestion}>{props.question}<i className='fa fa-arrow-circle-right' onClick={props.showAnswer}></i></div>);
}

export default App;
