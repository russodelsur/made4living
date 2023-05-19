import React, { useState, useEffect } from 'react';
import { FormCheck, FormControl, Form, Button, InputGroup, Container, Dropdown } from 'react-bootstrap';

function Questionnaire() {
	let questions = [
		{
			questionText: 'What are you looking for? You can select more than one option.',
			type: "first",
			answerOptions: [
				{ answerText: 'I’m looking to find a property to buy or I have already one in mind but I would like a professional opinion on it.(Currently available only in the London area)', index: "property" },
				{ answerText: "I’m looking for architectural, interior design or simple furnishing purchase", index: "design"},
				{ answerText: 'I’m looking for 3D modelling and visualization services.', index: "render"},
				{ answerText: 'I’m looking for bespoke furniture and joinery services.', index: "joinery" },
				{ answerText: 'I’m looking for other professional services (mortgage broker, sollicitor, party wall surveyor, structural engineer, contractor, electrician, plumber, etc).', index: "mortage" },
			],
		},
	];
	
	let lastQuestions = [
	{
		questionText: 'What is your timeline for the project?',
		type: "input",
	},
	{
		questionText: 'Is there anything you’d like to add (e.g: special requirements)?',
		type: "input",
	},
	{
		type: "summary",
	},
	]
	
	const property = [
		{
			questionText: 'Prorperty Tell us more regarding the property you are looking to buy. Where would you like to buy your dream property? Please list all desired locations.',
			type: "input",
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
			type: "dropdown",
			answerOptions: [
				{ answerText: '£0 - £250.000'},
				{ answerText: '£250.000 - £500.000'},
				{ answerText: '£500.000 - £1.000.000'},
				{ answerText: '£1.000.000 - £2.000.000'},
				{ answerText: '+2.000.000'},
			],
		},
		{
			questionText: 'How many bedrooms minimum would you like the property to have?',
			type: "dropdown",
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
	const design = [
		{
			questionText: 'Design Tell us more regarding your project. What type of service are you looking to get?',
			type: "choice",
			answerOptions: [
				{ answerText: 'I am looking for architectural services.'},
				{ answerText: "I'm looking for interior design and furnishing services."},
			],
			},
		{
			questionText: 'What type of project is it? (Residential, Commercial, Offices, Mixed Use, etc.)',
			type: "dropdown",
			answerOptions: [
				{ answerText: 'Residential'},
				{ answerText: 'Commercial'},
				{ answerText: 'Offices'},
				{ answerText: 'Mixed use'},
				{ answerText: 'Hospitality'},
				{ answerText: 'Food and beverages'},
			],
		},
		{
			questionText: 'What is your timeline for the project?',
			type: "input",
		},
	]
	const render = [
		{
			questionText: 'Render Tell us more regarding the project. What are you looking for? You can select more than one option.',
			type: "choice",
			answerOptions: [
				{ answerText: 'I am looking for an interiors 3D modelling or visualization.'},
				{ answerText: "I am looking for an exteriors 3D modelling or visualization."},
				{ answerText: "I am looking for a full property marketing service."},
				{ answerText: "I am looking furniture pieces renderings."},
			],
			},
		{
			questionText: 'Please outline your budget and how many visuals you would like (if none, just write "3D modelling")',
			type: "input",
		},
		{
			questionText: 'What is your timeline for the project?',
			type: "input",
		},
	]
	const joinery = [
		{
			questionText: 'Joinery - Tell us more regarding the project. What are you looking for? You can select more than one option.',
			type: "choice",
			answerOptions: [
				{ answerText: "I'm looking to buy furniture."},
				{ answerText: "I'm looking to design and purchase bespoke Joineries (kitchenette, wardrobes, etc.)"},
			],
			},
		{
			questionText: 'Please outline your budget.',
			type: "input",
		},
		{
			questionText: 'What is your timeline for the project?',
			type: "input",
		},
	]
	const mortage = [
		{
			questionText: 'Tell us more regarding the services you need, please list all the ones you are looking for.',
			type: "input",
			},
		{
			questionText: 'Please outline your budget.',
			type: "input",
		},
		{
			questionText: 'What is your timeline for the project?',
			type: "input",
		},
	]

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [questionnaire, setQuestions] = useState(questions)
    const [answers, setAnswer] = useState(" "); 
	const [initialAnswer, setInitial] = useState([])
	const [element, setElement] = useState()

	// Radio element
const next = <Button onClick={() => {handleAnswer()}}> Next </Button>;
const back = <Button onClick={() => {goBack()}}> Back </Button>;
let firstQuestion = <Form>
					<div className='answer-section' onChange={(e) => {setInitialAnswer(e)}}>
					{questionnaire[currentQuestion]?.answerOptions?.map((answerOption, i) => (
							<FormCheck key={i} 
							type={"checkbox"}
							id={"default-checkbox"}
							label={answerOption?.answerText}
							value={answerOption?.index}>
						</FormCheck>
					))}
					</div>;
					<Button onClick={() => {handleFirstQuestion()}}> Next </Button>
				</Form>;

let radio = <Form>
				<div className='answer-section' onChange={(e) => {setInitialAnswer(e)}}>
				{questionnaire[currentQuestion]?.answerOptions?.map((answerOption, i) => (
						<FormCheck key={i} 
						type={"checkbox"}
						id={"default-checkbox"}
						label={answerOption?.answerText}
						value={answerOption?.index}>
					</FormCheck>
				))}
				</div>;
					{back}
					{next}
				</Form>;

let choice = <Form>
				<div className='answer-section'>
				{questionnaire[currentQuestion]?.answerOptions?.map((answerOption, i) => (
					<Button key={i} onClick={() => {handleAnswer(answerOption.answerText)}}>{answerOption.answerText}</Button>
				))}
			</div>
			{back}
			</Form>;

let input = <Form>
			<div className='answer-section'>
				<InputGroup>
					<Form.Control as="textarea" aria-label="With textarea" />
				</InputGroup>
			</div>
			{back}
			{next}
			</Form>;
			
let dropdown = <div className='answer-section'>
					<Dropdown.Menu show>
						{/* <Dropdown.Header>Dropdown header</Dropdown.Header> */}
						{questionnaire[currentQuestion]?.answerOptions?.map((answerOption, i) => (
						<Dropdown.Item eventKey="i" onClick={() => {handleAnswer(answerOption.answerText)}}>{answerOption.answerText}</Dropdown.Item>
						))}
					</Dropdown.Menu>
					{back}
				</div>;

let summary = <div className='answer-section'>
					{answers}
			</div>;	

	useEffect(() => {
		switch (questionnaire[currentQuestion]?.type) {
			case "first":
				setElement(firstQuestion)
				break;
			case "radio":
				setElement(radio)
				break;
			case "choice":
				setElement(choice)
				break;		
			case "input":
				setElement(input)
				break;
			case "dropdown":
				setElement(dropdown)
				break;
			case "summary":
				setElement(summary)
				break;
			default:
				break;
		}
	}, [currentQuestion]);

	function handleFirstQuestion(data){
		let array = questionnaire;
		if (initialAnswer.includes("property")) {
			for (let i = 0; i < property.length; i++) {
				array.push(property[i])
			}
		}
		if (initialAnswer.includes("design")) {
			for (let i = 0; i < design.length; i++) {
				array.push(design[i])
			}
		}
		if (initialAnswer.includes("render")) {
			for (let i = 0; i < render.length; i++) {
				array.push(render[i])
			}
		}
		if (initialAnswer.includes("joinery")) {
			for (let i = 0; i < joinery.length; i++) {
				array.push(joinery[i])
			}
		}
		if (initialAnswer.includes("mortage")) {
			for (let i = 0; i < mortage.length; i++) {
				array.push(mortage[i])
			}
		}
		setCurrentQuestion((currentQuestion)  => currentQuestion+ 1)
		setQuestions(array);
		setAnswer(data);
	}

	function handleAnswer(data){
		setCurrentQuestion((currentQuestion)  => currentQuestion+ 1)
		setAnswer(data);
	}

	function goBack(){
		setCurrentQuestion((currentQuestion)  => currentQuestion- 1)
	}
	let result= [];
	const setInitialAnswer= (event) => {
		const arr = initialAnswer;
		const text = event.target.nextElementSibling.textContent;
		const str = event.target.value;
		const b = arr.includes(str);
			if (b === false) {
				arr.push(str);
				result.push(text)
			} else {
				let index = arr.indexOf(str);
				arr.splice(index, 1);
				result.splice(index,1)
			}
		console.log(result)
		setInitial(arr)
		setAnswer(result)
	}
        return (
            <Container className='container-question'>
                <h1>Welcome</h1>
                <h5>What are you looking for?</h5>
                    <div className='app'>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questionnaire?.length}
                                </div>
                                <div className='question-text'>{questionnaire[currentQuestion]?.questionText}</div>
                            </div>
							{element}
                </div>
            </Container>
        );
    }

export default Questionnaire;
