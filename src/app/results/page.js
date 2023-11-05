import { Space_Grotesk } from 'next/font/google';
import React from 'react';

export default function Home() {
  const titleStyle = {
    textAlign: 'center',
    fontSize: '10vh',
    color: 'black',
    fontFamily: 'sans-serif',
  };
  const loginSignupStyle = {
  
    color: 'black',
    fontFamily: 'sans-serif, serif',
  };

  const subTitleStyle = {
  
    textAlign: 'center',
    fontFamily: 'sans-serif, serif',
    fontSize: '4vh',
    color: 'black',
  };
  const mainContainerStyle = {
    backgroundColor: 'white',
    minHeight: '100vh',
  };

  const spacerStyle = {
    height: '100px',
  };

  const tableCellStyle = {
    // padding: 'px 70px', // Add padding to create spacing
    width: '70vh',
    fontFamily: 'sans-serif, serif',
    height: '60px', // Adjust the height as needed
    backgroundColor: '#e1f5e4',
    textAlign: 'center',
    color: 'black',
    
  };

  const contentStyle = {
    minHeight: '50vh', // Adjust the height as needed to take up half of the container
    backgroundColor: 'lightgreen',
    padding: '40',
  };


  const CollabTable = {
    width: '30vh',
    fontFamily: 'sans-serif, serif',
    height: '60px', // Adjust the height as needed
    backgroundColor: '#e1f5e4',
    textAlign: 'center',
    color: 'black',
    
  };

  const tableContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    minHeight: '10vh', // Ensure the container takes the full height of the viewport
  };
  
  const tableStyle = {
    borderCollapse: 'separate', // Use separate border model
    borderSpacing: '200px', // Adjust the spacing between cells as needed
  };

  const CollabStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    minHeight: '80vh', // Ensure the e
  };

  const imageStyle = {
    width: '50%', // Adjust the image size as needed
    height: 'auto', // Maintain aspect ratio
    display: 'block', // Remove any default inline spacing
    margin: '0 auto', // Center horizontally
  };

  const smallContainerStyle = {
    width: '80vh',
    fontFamily: 'sans-serif, serif',
    height: '100px', // Adjust the height as needed
    backgroundColor: '#e1f5e4',
    borderRadius: '20px', // Adjust the border-radius to control roundness
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
    alignItems: 'center',
    // boxShadow: '4px 4px 4px 2px lightgrey', 
  };

  return (
    <div style={mainContainerStyle}>
      <main style={{ backgroundColor: 'lightgreen' }}>
        <h1 style={titleStyle}>MatchYa!</h1>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <a style={loginSignupStyle}>
            <button>Login/Sign Up</button>
          </a>
        </div>
      </main>

      <div>
        <a style={mainContainerStyle}>

        </a>
        <div style={spacerStyle}>

        </div>
      {/* <p style={subTitleStyle}>Results:</p> */}
        <div >
            {/* <p style = {spacerStyle}></p> */}
            <p style={smallContainerStyle}>
            <br /> {/* Line break here */}
 
                <a style = {subTitleStyle}> Quiz Results </a>

            </p>

            {/* <img src="src/app/Duolingo-owl-1024x823.webp"alt="Your Image" style={imageStyle}/> */}
  
         
        </div>
      </div>
      <div style={tableContainerStyle}>
    <table className="table-auto" style={tableStyle}>
      <thead>
        <tr>
          <th style={tableCellStyle}> <a style={subTitleStyle}> MBTI TYPES</a> <br /> {/* Line break here */}
          <br /> {/* Line break here */} Expert
          <br /> {/* Line break here */}
          Experts are known for being really smart but also really dumb
          <br /> {/* Line break here */} <br /> {/* Line break here */} <br /> {/* Line break here */}
          <br /> {/* Line break here */}</th> 
          <th style={tableCellStyle}> <a style={subTitleStyle}> DOMAIN TYPE</a> <br /> {/* Line break here */}
          <br /> {/* Line break here */} AUDIO 30%
          <br /> {/* Line break here */} VISUAL 10%
          <br /> {/* Line break here */} COMMUNICATION 60%
          <br /> {/* Line break here */} 
          <br /> {/* Line break here */} <br /> {/* Line break here */} <br /> {/* Line break here */}
          <br /> {/* Line break here */}</th> 
        </tr>
      </thead>
    </table>
  </div>

  <div style={contentStyle}>
    <div style={spacerStyle}></div>
  <h1 style={subTitleStyle}> Most compatible collaboraters</h1>
  <div style={CollabStyle}>

  <table className="table-auto">
        <thead>
          <tr>
            <th style={CollabTable}>NAME</th>
            <th style={CollabTable}>DOMAIN TYPE</th>
            <th style={CollabTable}>MBTI</th>
            <th style={CollabTable}>CONTENT CREATOR TYPE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={CollabTable}>John</td>
            <td style={CollabTable}>Audio</td>
            <td style={CollabTable}>ENFP</td>
            <td style={CollabTable}>Cooking Channel</td>
          </tr>
          <tr>
            <td style={CollabTable}>Alice</td>
            <td style={CollabTable}>Video</td>
            <td style={CollabTable}>INTJ</td>
            <td style={CollabTable}>Gaming Channel</td>
          </tr>
        
        </tbody>
      </table>
  </div>
  </div>
 <div style={spacerStyle}></div>
    <h1 style={subTitleStyle}>What do my test results mean?</h1>
 <div style={mainContainerStyle}>
     <div style={tableContainerStyle}>
    <table className="table-auto" style={tableStyle}>
      <thead>
        <tr>
          <th style={tableCellStyle}> <a>   <div style={smallContainerStyle}>
                <h3>MYERS-BRIGGS PERSONALITY TEST</h3>
            </div></a> <br /> {/* Line break here */}
          <br /> {/* Line break here */} Expert
          <br /> {/* Line break here */}
          Experts are known for being really smart but also really dumb
          <br /> {/* Line break here */} <br /> {/* Line break here */} <br /> {/* Line break here */}
          <br /> {/* Line break here */}</th> 
          <th style={tableCellStyle}> <a style={subTitleStyle}> DOMAIN TYPE</a> <br /> {/* Line break here */}
          <br /> {/* Line break here */} AUDIO 30%
          <br /> {/* Line break here */} VISUAL 10%
          <br /> {/* Line break here */} COMMUNICATION 60%
          <br /> {/* Line break here */} 
          <br /> {/* Line break here */} <br /> {/* Line break here */} <br /> {/* Line break here */}
          <br /> {/* Line break here */}</th> 
        </tr>
      </thead>
    </table>
  </div>
 </div>
 <div style={spacerStyle}></div>
    </div>
  );
}
