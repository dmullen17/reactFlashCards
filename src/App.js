import React from 'react';
import './App.css';
let questionBank = require('./questions.json');
questionBank.questionsList = questionBank.questionsList.filter(obj => (obj.question !== '' && obj.question !== 'PLACEHOLDER'));

class FlashCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'Welcome to my flashcards application!  Happy learning 🙃'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const index = Math.floor(Math.random() * questionBank.questionsList.length);
        this.setState({
            question: questionBank.questionsList[index].question
        });
    }
    render() {
        return (
            <div className='flashCard' onClick={this.handleClick}>{this.state.question}
            </div>
        );
    }
}

class Topics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTopics: ['JavaScript', 'React', 'CSS']
        };
    }
    render() {
        const selectedTopics = this.state.selectedTopics.map(topic => <div className='btn btn-success'>{topic}</div>);
        return(
            <div>Topics:{selectedTopics}</div>
        );
    }
}

function App() {
  return (
    <div className='App'>
      <div class='row' style={{margin:'0px'}}>
        <Topics />
      </div>
      <div class='row' style={{margin:'0px'}}>
        <FlashCard />
      </div>
    </div>
  );
}

export default App;
