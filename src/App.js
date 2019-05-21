import React from 'react';
import './App.css';
const questionBank = require('./questions.json');

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

function App() {
  return (
    <div className='App'>
      <FlashCard />
    </div>
  );
}

export default App;
