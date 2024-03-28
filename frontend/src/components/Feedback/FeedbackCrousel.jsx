import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import "./FeedbackCrousel.css"

export default function FeedbackCrousel() { 
return ( 
	<div className='crouseldiv' > 
	
	<Carousel> 
		<Carousel.Item interval={5000} className='CrouselP1'> 
	 <div className='profile'>
	<img src="profile.png" alt='profile'></img>
	<p className='designation'>
		<span>Priya Singh</span>
		<br></br>
		<span>Office Administrator</span>
	</p>
	 </div>
	 <div className='texxtt'>
	 “Managing the office cafeteria used to be a daunting task until we adopted this management system. It's user-friendly interface and comprehensive features have simplified everything from ordering to billing. Our employees appreciate the convenience, and I'm thrilled with how it has streamlined our processes. It's truly a game-changer”
	 </div>
		</Carousel.Item> 

	
		<Carousel.Item interval={5000} className='CrouselP2'> 
		<div className='profile'>
	<img src="profile.png" alt='profile'></img>
	<p className='designation'>
		<span>Samantha Rodriguez</span>
		<br></br>
		<span>Cafeteria Supervisor</span>
	</p>
	 </div>
	 <div className='texxt'>
	 “I run a bustling cafeteria in a corporate building, and this management system has been a game-changer for us. From managing orders during peak hours to tracking inventory levels, it's incredibly reliable. The support team behind the system is also top-notch, always ready to assist whenever we have questions or need assistance. Thank you for making our operations smoother than ever!”
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
		<span>Rohan Mehta</span>
		<br></br>
		<span>University Dining Services Director</span>
	</p>
	 </div>
	 <div className='texxt'>
	 “Our university's canteen struggled with long queues and inventory management issues until we discovered this management system. Now, students can order ahead, customize their meals, and pay seamlessly using the integrated payment options. It's revolutionized the way we operate, and the feedback from students has been overwhelmingly positive. Kudos to the team behind this fantastic solution!”
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

