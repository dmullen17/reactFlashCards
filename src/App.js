import React from 'react';
import './App.css';
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
        
        // Show the answer 
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
            <div className='App'>
            <div className='container-fluid'>
                <Topics className='topics row' selectedTopics={this.state.selectedTopics} removeTopic={this.removeTopic}/>
                <div className='row'>
                    <FlashCard className='flashCard col-md' question={this.state.question} nextQuestion={this.nextQuestion} showAnswer={this.showAnswer}/>
                </div>
            </div>
            </div>
    );
    }
}

const Topics = (props) => {
    const selectedTopics = props.selectedTopics.map(topic => <div className='btn-topics col-md'>{topic}<i className='fa fa-times' id={topic} onClick={props.removeTopic}></i>
</div>);
    return(<div>Topics:{selectedTopics}</div>
    );
}

const FlashCard = (props) => {
    return(<div className='flashCard' onClick={props.nextQuestion}>{props.question}<i className='fa fa-arrow-circle-right' onClick={props.showAnswer}></i></div>);
}

export default App;
