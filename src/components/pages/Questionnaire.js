import React, { useState, useEffect } from 'react';
import { FormCheck, FormControl, Form, Button } from 'react-bootstrap';

function Questionnaire() {
	let questions = [
		{
			questionText: 'What are you looking for? You can select more than one option.',
			type: "radio",
			answerOptions: [
				{ answerText: 'I’m looking to find a property to buy or I have already one in mind but I would like a professional opinion on it.(Currently available only in the London area)', index: "property" },
				{ answerText: "I’m looking for architectural, interior design or simple furnishing purchase", index: "design"},
				{ answerText: 'I’m looking for 3D modelling and visualization services.', index: "render"},
				{ answerText: 'I’m looking for bespoke furniture and joinery services.', index: "joinery" },
				{ answerText: 'I’m looking for other professional services (mortgage broker, sollicitor, party wall surveyor, structural engineer, contractor, electrician, plumber, etc).', index: "mortage" },
			],
		},
	];

	const property = [
		{
			questionText: 'Tell us more regarding the property you are looking to buy. Where would you like to buy your dream property? Please list all desired locations.',
			type: "input",
			answerOptions: [
				{ answerText: 'Ready to move in'},
				{ answerText: "Renovation"},
			],
			},
		{
			questionText: 'Are you looking to purchase a property ready to move-in or also in need of renovation? You can select both.',
			type: "button",
			answerOptions: [
				{ answerText: 'Ready to move in'},
				{ answerText: "Renovation"},
			],
		},
		{
			questionText: 'Please outline your price range',
			type: "choice",
			answerOptions: [
				{ answerText: 'Ready to move in'},
				{ answerText: "Renovation"},
			],
		},
		{
			questionText: 'How many bedrooms minimum would you like the property to have?',
			type: "choice",
			answerOptions: [
				{ answerText: 'Studio'},
				{ answerText: '1 bedroom'},
				{ answerText: '2 bedroom'},
				{ answerText: '3 bedroom'},
				{ answerText: '4 bedroom'},
				{ answerText: '+4 bedroom'},
				{ answerText: 'Developer'}
			],
		},
		{
			questionText: 'Which of the below features interest you for your new home? Basement/Attic/Patio or Garden/Parking/Open plan',
			type: "radio",
			answerOptions: [
				{ answerText: 'Potential for extension (garden, basement. attic, patio)'},
				{ answerText: 'Garden (private or shared)'},
				{ answerText: 'Parking (space or garage)'}
			],
		},
		{
			questionText: 'Is there anything you’d like to add (e.g: special requirements)?',
			type: "input",
			},
		
	]
	const [questionnaire, setQuestions] = useState(questions)
    const [answers, setAnswer] = useState(" ");
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [initialAnswer, setInitial] = useState([])
	const [element, setElement] = useState("")

	// Radio element
const radio = <div className='answer-section' onChange={(e) => {setInitialAnswer(e)}}>
				{questionnaire[currentQuestion]?.answerOptions.map((answerOption, i) => (
						<FormCheck key={i} 
						type={"checkbox"}
						id={"default-checkbox"}
						label={answerOption?.answerText}
						value={answerOption?.index}>
					</FormCheck>
				))}
				</div>

let choice;
let input = <div className='answer-section'>
				<input></input>
			</div>

	useEffect(() => {
		setQuestions(questions)
		switch (questionnaire[currentQuestion].type) {
			case "radio":
				setElement(radio)
				break;
			case "choice":
				setElement(choice)
				break;		
			case "input":
				setElement(input)
				break;
			default:
				break;
		}
	}, []);

    const handleAnswer = (data) => {
		let array = questionnaire;
		if (initialAnswer.includes("property")) {
			for (let i = 0; i < property.length; i++) {
				array.push(property[i])
			}
		setQuestions(array);
		}
		const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionnaire.length) {
			setCurrentQuestion(nextQuestion);
		} 
        setAnswer(data);
		switch (questionnaire[currentQuestion].type) {
			case "radio":
				setElement(radio)
				break;
			case "choice":
				setElement(choice)
				break;		
			case "input":
				setElement(input)
				break;
			default:
				break;
		}
		
    }

	const setInitialAnswer= (event) => {
		const arr = initialAnswer;
		const arrayText = answers;
		const text = event.target.nextElementSibling.textContent;
		const str = event.target.value;
		let result;	
		const b = arr.includes(str);
			if (b === false) {
			arr.push(str);
			result = arrayText.concat(" ", text)
			} else {
			let index = arr.indexOf(str);
			arr.splice(index, 1);
			result = arrayText.replace(text,"")
			}
		setInitial(arr)
		setAnswer(result)
	}
	console.log(questionnaire)
        return (
            <div className='container-question'>
                <h1>Welcome</h1>
                <h5>What are you looking for?</h5>
                    <div className='app'>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questionnaire?.length}
                                </div>
                                <div className='question-text'>{questionnaire[currentQuestion]?.questionText}</div>
                            </div>
							<Form>
							{element}
							<Button onClick={() => {handleAnswer()}}> Submit </Button>
							</Form>
                </div>
            </div>
        );
    }

export default Questionnaire;
