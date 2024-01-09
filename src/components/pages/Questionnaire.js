import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, InputGroup, Container, NavLink } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import ModelStart from '../Three/Three';
import SEO from '../components/SEO';

let questions = [
	{
		questionText: 'What services are you looking for? You can select more than one option.',
		type: "first",
		answerOptions: [
			{ answerText: 'Purchase a property in London', index: "property", image:"arch", explain: "I’m looking to find a property to buy or I have already one in mind but I would like a professional opinion on it (Currently available only in the London area).", 
				name: "/house.gltf"},
			{ answerText: "Architectural, interior design or FFE", index: "design", image: "housesearch", explain:"",
				name: "/arch.gltf"},
			{ answerText: '3D modelling and visualization', index: "render", image:"home01", explain:"",
				name: "/vis.gltf"},
			{ answerText: 'Bespoke furniture and joinery', index: "joinery", image:"bespoke", explain:"",
				name: "/bf.gltf"},
			{ answerText: 'Hire other professional services', index: "mortage", image:"professional", explain:"I’m looking for other professional services (mortgage broker, sollicitor, party wall surveyor, structural engineer, contractor, electrician, plumber, etc).",
				name: "/professional.gltf"},
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


function Questionnaire() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [questionnaire, setQuestions] = useState(questions)
    const [answerToQuestion, setAnswer] = useState([]); 
	const [answers, addAnswers] = useState([]);
	const [initialAnswer, setInitial] = useState([]);
	const [element, setElement] = useState();
	const [buttonStatus, setStatus] = useState("btn btn-dark");
	const [emailMessage, setEmailMessage] = useState("");
	const [message, setMessage] = useState("");
	const [dbmessage, setdbMessage] = useState("");
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
					<div className='answer-section' id='answer-section-first-form' onChange={(e) => {produceInitialAnswer(e)}}>
					{questionnaire[currentQuestion]?.answerOptions?.map((answerOption, i) => (
						<div key={i} className='form-check'>
							<div className='model-questions'>
								<ModelStart url={answerOption?.name} i={i} class={"model-box"} click={null}/>
							</div>
							<input value={answerOption?.index} type="checkbox" className="btn-check" id={i} autoComplete="off"/>
							<label className="btn btn-outline-secondary" htmlFor={i}>{answerOption?.answerText}</label>
						</div>
					))}
					</div>
					<Button variant="dark" style={{display:"flex", margin:"auto"}} onClick={() => {handleFirstQuestion();}}> Next </Button>
				</Form>;

let radio = <Form>
					<div className='answer-section' id='answer-section-radio' onChange={(e) => {produceAnswer(e)}}>
						<h5 className='text' style={{color:"grey", padding:"1rem"}}>You are in question {currentQuestion} of {questionnaire.length - 2}</h5>  
						{questionnaire[currentQuestion]?.answerOptions?.map((answerOption, i) => (
							<div key={i} className='form-check-choice' >
								<input value={answerOption?.index} type="checkbox" className="btn-check" id={i}  autoComplete="off"/>
								<label className="btn btn-outline-secondary" htmlFor={i}>{answerOption?.answerText}</label>
							</div>
						))}
					</div>
						{buttons}
				</Form>;

let choice = <Form>
				<div className='answer-section' id='answer-section-choice' onChange={(e) => {produceAnswer(e)}}>
				<h5 style={{color:"grey", padding:"1rem"}}>You are in question {currentQuestion} of {questionnaire.length - 2}</h5>  
				{questionnaire[currentQuestion]?.answerOptions?.map((answerOption, i) => (
					<div key={i} className='form-check-choice' >
						<input value={answerOption?.answerText} type="radio" className="btn-check" name="options" id={i}  autoComplete="off"/>
						<label className="btn btn-secondary" htmlFor={i}>{answerOption?.answerText}</label>
					</div>
				))}
				{buttons}
			</div>
			</Form>;

let input = <Form>
			<h5 style={{color:"grey", padding:"1rem"}}>You are in question {currentQuestion} of {questionnaire.length - 2}</h5>  
			<div className='answer-section' id='answer-section-input' onKeyUp={(e) => {produceAnswer(e)}}>
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
let submit =<div className='answer-section' id='answer-section-submit'>
			<h5 style={{color:"grey", padding:"1rem"}}>Please submit your answers to a member of our staff and database by introducing your details.</h5>  
			<p>{dbmessage}</p>
			<p>{emailMessage[0]}</p>
			<form className="input-group" ref={form} onSubmit={(e)=>sendEmail(e)}>
				<label className="input-group-text">Name</label>
				<input type="text" name="user_name" aria-label="First name" className="form-control"/>
				<label className="input-group-text">Email</label>
				<input type="email" name="user_email" aria-label="Email" className="form-control"/>
				<textarea style={{display:"none",position:"absolute"}} name='message' defaultValue={message}/>
				<input type="submit" value={sent} className={buttonStatus} />
			</form>
			<p>{emailMessage[1]}</p>
			<div className='buttons'>
			{back}
			</div>
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
	}, [currentQuestion, sent, dbmessage]);
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
			const email = form.current.user_email.value;
			let result = await fetch(
			('/.netlify/functions/post_answers'), {
				method: "post",
				isBase64Encoded: true,
				statusCode: "httpStatusCode",
				body: JSON.stringify({ name, email, answers }),
				headers: {
					'Content-Type': 'application/json'
				}
				
			})
			result = await result.json();
			setdbMessage(result.message);
		}
		postToDatabase();
		emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
		  .then((result) => {
			setEmailMessage(["Click on the logo to return to the site.","Thank you for submitting the information, we will reach out soon!"]);
			setStatus("btn btn-success");
			setSent("Success!")
		  }, (error) => {
			setEmailMessage(["Refresh to start over", "An error has occurred"]);
			setStatus("btn btn-danger");
			setSent("Error")
		  });
	  };
        return (
            <Container className='container-question'>
					<SEO title="Tell us more" description="What services are you looking for? Complete our online questionnaire and someone from our team will reach out." url="tellusmore"/> 
                    <div className='box-question'>
					<NavLink className='qs-logo'><img style={{width:"25rem", height:"auto", margin:"auto", paddingBottom:".5rem"}} alt='m4llogo' src={require('../../img/logo-full.png')} className="question-logo" onClick={()=>(navigate("/"))}></img></NavLink>      
							<div className='question-section'>
                                <h5 style={{textAlign:"center"}} className='question-text'>{questionnaire[currentQuestion]?.questionText}</h5>
                            </div>
							{element}
                </div>
            </Container>
        );
    }

export default Questionnaire;
