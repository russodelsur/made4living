import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';


function Questionnaire() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
    const [answers, setAnswer] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswer = (data) => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} 
        setAnswer(data);
    }

    const

        return (
            <div className='container-question'>
                <h1>Welcome</h1>
                <h5>What are you looking for?</h5>
                <FormControl>
                    <div className='app'>
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button onClick={() => handleAnswer(answerOption)}>{answerOption}</button>
                                ))}
                            </div>
                        </>
                </div>
                </FormControl>
            </div>
        );
    }

export default Questionnaire;
