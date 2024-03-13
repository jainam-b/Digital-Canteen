import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import "./FeedbackCrousel.css"

export default function FeedbackCrousel() { 
return ( 
	<div style={{ display: 'block', width: 700, padding: 30 }}> 
	<h4>React-Bootstrap Carousel Component</h4> 
	<Carousel> 
		<Carousel.Item interval={5000} className='CrouselP1'> 
	 <div className='profile'>
	<img src="profile.png" alt='profile'></img>
	<p className='designation'>
		<span>Willians Jhone</span>
		<br></br>
		<span>CEO & Co-Founder</span>
	</p>
	 </div>
	 <div>
	 “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. 
	 Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”
	 </div>
		</Carousel.Item> 

	
		<Carousel.Item interval={5000} className='CrouselP2'> 
		<div className='profile'>
	<img src="profile.png" alt='profile'></img>
	<p className='designation'>
		<span>Willians Jhone2</span>
		<br></br>
		<span>CEO & Co-Founder</span>
	</p>
	 </div>
	 <div>
	 “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. 
	 Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”
	 </div>
		{/* <img 
			className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
			alt="Image Two"
		/> 
		<Carousel.Caption> 
			<h3>Label for second slide</h3> 
			<p>Sample Text for Image Two</p> 
		</Carousel.Caption>  */}
		</Carousel.Item> 



		<Carousel.Item interval={5000} className='CrouselP3'> 
		<div className='profile'>
	<img src="profile.png" alt='profile'></img>
	<p className='designation'>
		<span>Willians Jhone3</span>
		<br></br>
		<span>CEO & Co-Founder</span>
	</p>
	 </div>
	 <div>
	 “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. 
	 Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”
	 </div>
		{/* <img 
			className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
			alt="Image Two"
		/> 
		<Carousel.Caption> 
			<h3>Label for second slide</h3> 
			<p>Sample Text for Image Two</p> 
		</Carousel.Caption>  */}
		</Carousel.Item> 



	
	</Carousel> 
	</div> 
); 

}

