"use server"

import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation'
import { Form } from './form'

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

const mainContainerStyle = {
    backgroundColor: 'white',
    minHeight: '100vh',
    textAlign: 'center',
  };
export default async function Questions() {
    const session = await getSession();
    if (session == null) {
        redirect("/")
        return
    }

    return (<>
       
       {/* <div style={mainContainerStyle}> */}
     <main style={{ backgroundColor: '#56a864' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://cdn3.iconfinder.com/data/icons/matcha/3500/matcha_tea_latte-512.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
            <h1 style={titleStyle}>MatchYa!</h1>
        </div>
        {/* <!-- Rest of your content --> */}
    </main>
       <dir style = "maincContainerStyle">
           <dir>
            
           </dir>
            <Form user={session["user"]}/>
       </dir>
       
    </>)
}