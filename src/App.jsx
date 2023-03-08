import { useState, useEffect } from 'react';
import { QuestionBox, Result } from './components';

// Mocked backend service
import quizService from './quizService';

function App() {
	const [score, setScore] = useState(0);
	const [responses, setResponses] = useState(0);
	const [questionBank, setQuestionBank] = useState([]);

	const getQuestions = () => {
		quizService().then((question) => {
			setQuestionBank(question);
		});
	};

	useEffect(() => {
		// Call questions on load
		getQuestions();
	}, []);
	console.log(questionBank);

	const computeAnswer = (answer, correctAnswer) => {
		if (answer === correctAnswer) {
			setScore((prevScore) => prevScore + 1);
		}

		setResponses((response) => (response < 5 ? response + 1 : 5));
	};

	const playAgain = () => {
		getQuestions();

		// Reset responses & score
		setScore(0);
		setResponses(0);
	};

	return (
		<div className="container">
			<div className="title">QuizBee</div>
			{/* {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}
        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null} */}
		</div>
	);
}

export default App;
