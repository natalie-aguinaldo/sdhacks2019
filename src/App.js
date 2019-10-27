import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component';
import './App.css';
import log from './knowtes.png';
import background from './background.jpg';


class App extends React.Component {

	
  state = {
	  selectedFile: null
  }
  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  
  }

	render() {
	  return (
	  
	  <div className='background-image' style ={ { backgroundImage: "url("+background+")" } }>
	  
	  
	  
	  
	  
		<div className="App">
		<br></br>
	    <br></br>
		<br></br>
	    <br></br>
	    <br></br>
		<br></br>
		  
		  <img src={log} className="bg" />
		  
		  <br></br>
	      <br></br>
		  <h2><font size="7"> Learn more in less time.</font></h2>
		  <h3><font size="5">Convert your handwritten notes to flashcards.</font></h3>
		  <h4><font size="4">Reinforce your knowledge in 3 minutes or less.</font></h4>
		   <br></br>
		  <button onClick={() => scrollToComponent(this.First)}>Learn More</button>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		  <body>
			  <div class='first'>
				<h2><font size="7"> How to Use</font></h2>
				<font size="5">
				<li> upload a picture of your <b>handwritten</b> notes.</li>
				<li> <b>magic</b> converts your handwritten notes into <b>flashcards</b>. </li>
				<li> practice your understanding with your generated flashcards. </li>
				<li> <b>solidify your knowledge</b> with 3 minute mini games </li>
				</font>
			  </div> 
			  <section className='first' ref={(section) => { this.First = section; }}></section>
		  </body>
		  
		  <br></br>
		  
		  <div class = "begin">
			<button onClick={() => scrollToComponent(this.Third)}>Get Started</button>
			<br></br>
		  </div>
		  
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   
		  <div class = "upload">
			<br></br>
		  <h2><font size = "7"> Upload</font></h2>
		  <p><font size="5">a picture of your handwritten notes.</font></p>
			<input type="file"/>
			<br></br>
			<br></br>
			<br></br>
			<button onClick={this.fileUploadHandler}>Upload</button>
			
			<a href= "http://google.com"> 
			<Button>Submit</Button>
			</a>
		  </div>
		  <section className='third' ref={(section) => { this.Third = section; }}></section>
		  
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   <br></br>
		   
		</div>
		
		
		
		</div>
	  );
	}
}

export default App;
