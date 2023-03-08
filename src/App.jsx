import { useState, useEffect } from 'react';
import { QuestionBox, Result } from './components';

// Mocked backend service
import quizService from './quizService';

const App = () => {
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
			<div className="title">Personality Test Application</div>
			{questionBank.length > 0 &&
				responses < 5 &&
				questionBank.map(({ question, answers, correct, questionId }) => (
					<QuestionBox
						question={question}
						options={answers}
						key={questionId}
						selected={(answer) => computeAnswer(answer, correct)}
					/>
				))}
			{responses === 5 ? <Result score={score} playAgain={playAgain} /> : null}
		</div>
	);
};

export default App;
