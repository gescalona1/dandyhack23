import { Space_Grotesk } from 'next/font/google';
import React from 'react';

export default function Home() {
  const titleStyle = {
    textAlign: 'center',
    fontSize: '10vh',
    color: 'black',
    backgroundColor: '#56a864',
    // fontFamily: 'sans-serif',
    margin: 0, /* Remove body margin */
    padding: 0, /* Remove body padding */
    height: '13vh', /* Set the title height to fill the viewport */
};
const titleStyle2 = {
  textAlign: 'center',
  fontSize: '10vh',
  color: 'black',
  // backgroundColor: 'lightgreen',
  // fontFamily: 'sans-serif',
  margin: 0, /* Remove body margin */
  padding: 0, /* Remove body padding */
  height: '13vh', /* Set the title height to fill the viewport */
};

  const loginSignupStyle = {
  
    color: 'black',
    // fontFamily: 'sans-serif, serif',
  };

  const subTitleStyle = {
  
    textAlign: 'center',
    // fontFamily: 'sans-serif, serif',
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
    // fontFamily: 'sans-serif, serif',
    height: '60px', // Adjust the height as needed
    backgroundColor: '#e1f5e4',
    textAlign: 'center',
    color: 'black',

    // width: '80vh',
    // fontFamily: 'sans-serif, serif',
    // height: '100px', // Adjust the height as needed
    // backgroundColor: '#e1f5e4',
    borderRadius: '20px', // Adjust the border-radius to control roundness
    margin: '0 auto',
    // display: 'flex',
    // justifyContent: 'center',
    color: 'black',
    alignItems: 'center',
    
  };
  const footer = {
    width: '100%', // Set the width to 100% to span the entire width
    height: '100vh', // Set the height to 100vh to span the entire height of the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const imageStyle = {
    width: '100%', // Make the image take up the entire width of the footer
    height: 'auto', // Maintain aspect ratio
    display: 'block',
  };
  const contentStyle = {
    minHeight: '50vh', // Adjust the height as needed to take up half of the container
    backgroundColor: '#56a864',
    padding: '40',
  };


  const CollabTable = {
    width: '30vh',
    // fontFamily: 'sans-serif, serif',
    height: '60px', // Adjust the height as needed
    backgroundColor: '#e1f5e4',
    textAlign: 'center',
    color: 'black',
    
  };

  const tableContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    minHeight: '100vh', // Ensure the container takes the full height of the viewport
  };
  
  const tableStyle = {
    // borderCollapse: 'separate', // Use separate border model
    borderSpacing: '30px', // Adjust the spacing between cells as needed
  };

  const CollabStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    minHeight: '80vh', // Ensure the e
  };

  const smallContainerStyle = {
    width: '80vh',
    // fontFamily: 'sans-serif, serif',
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
 <main style={{ backgroundColor: '#56a864' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://cdn3.iconfinder.com/data/icons/matcha/3500/matcha_tea_latte-512.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
        <h1 style={titleStyle}>MatchYa!</h1>
    </div>
    {/* <!-- Rest of your content --> */}
</main>


      <div>
        {/* <a style={mainContainerStyle}>

        </a> */}
        <div style={spacerStyle}>

        </div>
      {/* <p style={subTitleStyle}>Results:</p> */}
        <div >
            {/* <p style = {spacerStyle}></p> */}
            <p style={smallContainerStyle}>
                <br /> {/* Line break here */}
                <h1> Quiz Results </h1>
            </p>
         
        </div>
      </div>
      <div style={tableContainerStyle}>
    <table className="table-auto" style={tableStyle}>
      <thead>
        <tr>
        <th style={tableCellStyle}>
    <a style={subTitleStyle}> <br />MBTI TYPES</a> <br /><br />
    Expert (Title) <br /><br />
    Experts are known for being really smart but also really dumb. They have a tendency to do...<br /><br /><br /><br />
</th>

<th style={tableCellStyle}>
    <a style={subTitleStyle}> <br />DOMAIN RESULTS</a> <br /><br /><br />
    AUDIO 30% <br />
    VISUAL 10% <br />
    COMMUNICATION 60%<br /><br /><br /><br />
</th>

        </tr>
      </thead>
    </table>
    
  </div>

  <div style={contentStyle}>
    <div style={spacerStyle}></div>
  {/* <h1 style={subTitleStyle}> COMPATIBLE CONTENT CREATORS</h1> */}
  <h1 style={titleStyle2}>What Do My Test Results Mean?</h1>
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
    <h1 style={titleStyle2}>What Do My Test Results Mean?</h1>
 <div style={mainContainerStyle}>
     <div style={tableContainerStyle}>
    <table className="table-auto" style={tableStyle}>
      <thead>
        <tr>
          <th style={tableCellStyle}> <a>   <div style={smallContainerStyle}>
                <h3>MYERS-BRIGGS PERSONALITY TEST</h3>
            </div></a> <br /> {/* Line break here */}
           Expert (Name)
          <br /> {/* Line break here */}<br /> {/* Line break here */}
          Experts are known for being really smart but also really dumb (Descripton)
          <br /> {/* Line break here */} <br /> {/* Line break here */} <br /> {/* Line break here */}
          <br /> {/* Line break here */}</th> 
          <th style={tableCellStyle}> <h3>CONTENT CREATOR RESULTS</h3> <br /> {/* Line break here */}
          <br /> {/* Line break here */} list of things here...
          <br /> {/* Line break here */} bullet points...?
          <br /> {/* Line break here */} 
          <br /> {/* Line break here */} <br /> {/* Line break here */} <br /> {/* Line break here */}
          <br /> {/* Line break here */}</th> 
        </tr>
      </thead>
    </table>
    
  </div>
  <img
        src="https://www.scholastic.com/content/site/Weston_Woods_Plus/_jcr_content/root/responsivegrid_1358021677/responsivegrid_copy__307451961/image.coreimg.100.1285.png/1617066993085/mobile-hilly-background-%282%29.png"
        alt="Logo"
        style={imageStyle}/>
 </div>
 {/* <div style={spacerStyle}></div> */}

    </div>
  );
}