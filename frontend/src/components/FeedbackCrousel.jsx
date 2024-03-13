import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import "./Feedback.css"


export default function FeedbackCrousel() { 
return ( 
	<div style={{ display: 'block', width: 700, padding: 30 }}> 
	<h4>React-Bootstrap Carousel Component</h4> 
	<Carousel> 
		<Carousel.Item interval={500}> 
	<div  style={{ width : 500}}>
		<img 
		
			className="d-block w-100"
            src="Group 30.png"
			alt="Image One"
	
		/> 

</div>
		<Carousel.Caption> 
			<h3>Label for first slide</h3> 
			<p id='text'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”</p> 
		</Carousel.Caption> 
		</Carousel.Item> 
		<Carousel.Item interval={500}> 
		<img 
			className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
			alt="Image Two"
		/> 
		<Carousel.Caption> 
			<h3>Label for second slide</h3> 
			<p>Sample Text for Image Twojjjj</p> 
		</Carousel.Caption> 
		</Carousel.Item> 
	</Carousel> 
	</div> 
); 
}