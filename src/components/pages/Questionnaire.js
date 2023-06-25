import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, InputGroup, Container, NavLink } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

function Questionnaire() {
	let questions = [
		{
			questionText: 'What are you looking for? You can select more than one option.',
			type: "first",
			answerOptions: [
				{ answerText: 'I’m looking to find a property to buy or I have already one in mind but I would like a professional opinion on it (Currently available only in the London area).', index: "property" },
				{ answerText: "I’m looking for architectural, interior design or simple furnishing purchase.", index: "design"},
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
		questionText: 'Please outline your budget.',
		type: "input",
	},
	{
		questionText: 'Is there anything you’d like to add (e.g: special requirements)?',
		type: "input",
	},
	{
		type: "summary",
	},
	{
		type: "submit",
	},
	]
	
	const property = [
		{
			questionText: 'Tell us more regarding the property you are looking to buy. Where would you like to buy your dream property? Please list all desired locations.',
			type: "input",
			},
		{
			questionText: 'Are you looking to purchase a property ready to move-in or also in need of renovation? You can select both.',
			type: "choice",
			answerOptions: [
				{ answerText: 'Ready to move in'},
				{ answerText: "Renovation"},
			],
		},
		{
			questionText: 'Please outline your price range',
			type: "choice",
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
	]
	const design = [
		{
			questionText: 'Tell us more regarding your project. What type of service are you looking to get?',
			type: "choice",
			answerOptions: [
				{ answerText: 'I am looking for architectural services.'},
				{ answerText: "I'm looking for interior design and furnishing services."},
			],
			},
		{
			questionText: 'What type of project is it? (Residential, Commercial, Offices, Mixed Use, etc.)',
			type: "choice",
			answerOptions: [
				{ answerText: 'Residential'},
				{ answerText: 'Commercial'},
				{ answerText: 'Offices'},
				{ answerText: 'Mixed use'},
				{ answerText: 'Hospitality'},
				{ answerText: 'Food and beverages'},
			],
		},
	]
	const render = [
		{
			questionText: 'Tell us more regarding the project. What are you looking for? You can select more than one option.',
			type: "choice",
			answerOptions: [
				{ answerText: 'I am looking for an interiors 3D modelling or visualization.'},
				{ answerText: "I am looking for an exteriors 3D modelling or visualization."},
				{ answerText: "I am looking for a full property marketing service."},
				{ answerText: "I am looking furniture pieces renderings."},
			],
			},
	]
	const joinery = [
		{
			questionText: 'Tell us more regarding the project. What are you looking for? You can select more than one option.',
			type: "choice",
			answerOptions: [
				{ answerText: "I'm looking to buy furniture."},
				{ answerText: "I'm looking to design and purchase bespoke Joineries (kitchenette, wardrobes, etc.)"},
			],
			},
	]
	const mortage = [
		{
			questionText: 'Tell us more regarding the services you need, please list all the ones you are looking for.',
			type: "input",
			},
	]

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [questionnaire, setQuestions] = useState(questions)
    const [answerToQuestion, setAnswer] = useState([]); 
	const [answers, addAnswers] = useState([]);
	const [initialAnswer, setInitial] = useState([]);
	const [element, setElement] = useState();
	const [buttonStatus, setStatus] = useState("btn btn-dark");
	const [emailMessage, setEmailMessage] = useState("");
	const [message, setMessage] = useState("");
	const [sent, setSent] = useState("Send")
	const stateRef = useRef();
	stateRef.current = answerToQuestion;

	const navigate = useNavigate();
	const form = useRef();

	// Radio element

const next = <Button variant="dark" className='button-questions' onClick={() => {nextQuestion()}}> Next </Button>;
const back = <Button variant="dark" className='button-questions' onClick={() => {goBack()}}> Back </Button>;
const buttons = <div className='buttons'>{back}{next}</div>;
let firstQuestion = <Form>
					<div className='answer-section' onChange={(e) => {produceInitialAnswer(e)}}>
					{questionnaire[currentQuestion]?.answerOptions?.map((answerOption, i) => (
						<div key={i} className='form-check' >
							<input value={answerOption?.index} type="checkbox" className="btn-check" id={i}  autoComplete="off"/>
							<label className="btn btn-outline-secondary" htmlFor={i}>{answerOption?.answerText}</label>
						</div>
					))}
					</div>
					<Button variant="dark" style={{display:"flex", margin:"auto"}} onClick={() => {handleFirstQuestion();}}> Next </Button>
				</Form>;

let radio = <Form>
				<div className='answer-section' onChange={(e) => {produceAnswer(e)}}>
				<h5 style={{color:"grey", padding:"1rem"}}>You are in question {currentQuestion} of {questionnaire.length - 2}</h5>  
				{questionnaire[currentQuestion]?.answerOptions?.map((answerOption, i) => (
					<div key={i} className='form-check' >
						<input value={answerOption?.index} type="checkbox" className="btn-check" id={i}  autoComplete="off"/>
						<label className="btn btn-outline-secondary" htmlFor={i}>{answerOption?.answerText}</label>
					</div>
				))}
				</div>
					{buttons}
				</Form>;

let choice = <Form>
				<div className='answer-section' onChange={(e) => {produceAnswer(e)}}>
				<h5 style={{color:"grey", padding:"1rem"}}>You are in question {currentQuestion} of {questionnaire.length - 2}</h5>  
				{questionnaire[currentQuestion]?.answerOptions?.map((answerOption, i) => (
					<div key={i} className='form-check' >
						<input value={answerOption?.answerText} type="radio" className="btn-check" name="options" id={i}  autoComplete="off"/>
						<label className="btn btn-secondary" htmlFor={i}>{answerOption?.answerText}</label>
					</div>
				))}
				{buttons}
			</div>
			</Form>;

let input = <Form>
			<h5 style={{color:"grey", padding:"1rem"}}>{currentQuestion} of {questionnaire.length - 2}</h5>  
			<div className='answer-section' onKeyUp={(e) => {produceAnswer(e)}}>
				<InputGroup>
					<Form.Control id='inputBox' as="textarea" aria-label="With textarea" />
				</InputGroup>
			</div>
			{buttons}
			</Form>;

let summary = <div className='answer-section'>
					<h2 style={{margin: "2rem", textAlign:"center"}}>Summary</h2>
					{answers.map((question, i) => (
					<div key={i} className='questions-summary' >
						<h5>{question.question}</h5>
							{question.answer.map((ans, i) => (
							<p style={{color:"grey"}} key={i}>{ans}</p>
							))}	
					</div>
					))}<div className='buttons'>
					{back}
					<Button variant="dark" className='button-questions' onClick={() => {setCurrentQuestion((currentQuestion)  => currentQuestion+ 1); generateAnswer()}}> Submit </Button>;
					</div>
			</div>;	
let submit =<div>
			<p>{emailMessage[0]}</p>
			<form className="input-group" ref={form} onSubmit={(e)=>sendEmail(e)}>
				<label className="input-group-text">Name</label>
				<input type="text" name="user_name" aria-label="First name" className="form-control"/>
				<label className="input-group-text">Email</label>
				<input type="email" name="user_email" aria-label="Email" className="form-control"/>
				<textarea style={{display:"none",position:"absolute"}} name='message' value={message}/>
				<input type="submit" value={sent} className={buttonStatus} />
			</form>
			<p>{emailMessage[1]}</p>
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
			case "summary":
				setElement(summary)
				break;
			case "submit":
				setElement(submit)
				break;
			default:
				break;
		}
		setAnswer("NA");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentQuestion, sent]);
	// removing text from input box when switching boxes
	function removeText(){
		if(questionnaire[currentQuestion].type === "input"){
			document.getElementById("inputBox").value="";
		}
	}

	function nextQuestion(){
		let question = questionnaire[currentQuestion].questionText;
		let array = answers;
		let arr = stateRef.current;
		//pushing answer to array in an ordely fashion
		let arrs = [];
			if (arr.type === Array) {
						for (let i = 0; i < arr.length; i++) {
							arrs.push(arr[i]);
						}
			} else {
				arrs.push(arr)
			}
		array.push({currentQuestion, "question": question, "answer": arrs})
		setCurrentQuestion((currentQuestion)  => currentQuestion+ 1)
		addAnswers(array);
		removeText();

	}

	function goBack(){
		let array = answers;
		array.pop();
		addAnswers(array)
		setCurrentQuestion((currentQuestion)  => currentQuestion- 1)
		//removing initial answer if going back
		setInitial([])
		removeText()
		// removing the questions if going back to the first question
		if (currentQuestion === 1) {
			setQuestions(questions)
			}
	}

	const produceAnswer = (event) =>{
		const array = [];
		let text;
		//producing answer if text is in input box or in selection click
		if (event.target.tagName.toLowerCase() === "textarea") {
			text = event.target.value;
		} else {
			text = event.target.nextElementSibling.textContent;
		}
		array.push(text)
		setAnswer(array)
	}

	function generateAnswer(){
		let strings = [];
		//generating message for email answer
		for (let i = 0; i < answers.length; i++) {
			let sentance;
			if (answers[i].answer.length !== 1) {
				sentance = `${answers[i].question}\n${answers[i].answer}`;
			} else {
				sentance = `${answers[i].question}\n${answers[i].answer.join(`\n`)}`;
			}
			strings.push(sentance);
		}
		setMessage(strings.join(`\n`));
	}

	function handleFirstQuestion(){
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
		for (let i = 0; i < lastQuestions.length; i++) {
			array.push(lastQuestions[i])
		}
		let question = questionnaire[currentQuestion].questionText;
		let arrayAnswers = answers;
		let arr = stateRef.current;
		let arrs = [];
		for (let i = 0; i < arr.length; i++) {
			arrs.push(arr[i]);
		}
		arrayAnswers.push({currentQuestion, "question": question, "answer": arrs})
		addAnswers(arrayAnswers);
		setCurrentQuestion((currentQuestion)  => currentQuestion+ 1)
		setQuestions(array);
	}

	//function producing initial answer from clicks
	let result= [];
	const produceInitialAnswer= (event) => {
		const array = initialAnswer;
		const text = event.target.nextElementSibling.textContent;
		const keyWord = event.target.value;
		const boolean = array.includes(keyWord);
			if (boolean === false) {
				array.push(keyWord);
				result.push(text)
			} else {
				let index = array.indexOf(keyWord);
				array.splice(index, 1);
				result.splice(index,1)
			}
		setInitial(array)
		setAnswer(result)
	}

	const sendEmail = (e) => {
		e.preventDefault();
		const postToDatabase = async (e) => {
			const name = form.current.user_name.value;
			const email = form.current.user_email.value
			let result = await fetch(
			('/.netlify/functions/post_answers'), {
				method: "post",
				body: JSON.stringify({ name, email, answers }),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			result = await result.json();
			console.warn(result);
			if (result) {
				alert("Data saved succesfully");
			}
		}
		postToDatabase();
		
		emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
		  .then((result) => {
			setEmailMessage(["Click on the logo to return to the site.","Thank you for submitting the information, we will reach out soon!"]);
			setStatus("btn btn-success");
			setSent("Success")
		  }, (error) => {
			setEmailMessage(error.text);
			setStatus("btn btn-danger");
		  });
	  };
        return (
            <Container className='container-question'>
                    <div className='box-question'>
					<NavLink><img style={{width:"25rem", height:"auto", margin:"auto", paddingBottom:"4rem"}} alt='m4llogo' src={require('../../img/logo-full.png')} className="question-logo" onClick={()=>(navigate("/"))}></img></NavLink>      
							<div className='question-section'>
                                <h5 style={{textAlign:"center"}} className='question-text'>{questionnaire[currentQuestion]?.questionText}</h5>
                            </div>
							{element}
                </div>
            </Container>
        );
    }

export default Questionnaire;
