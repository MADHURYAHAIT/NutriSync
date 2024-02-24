import { Page,Navbar,BlockTitle,Block,List } from 'framework7-react'
import React from 'react'
 
const Contact = () => {
  return (
    <Page>
         <Navbar title="Contact" backLink="Back" />
    <div className='contact'>
    <BlockTitle><h2>Reach Us</h2></BlockTitle>

   <Block bold inset >
        <p>
        We appreciate your interest in contacting us. Whether you have questions, feedback, or just want to say hello, we're here to assist you.
        </p>
        <div className='c'>
        <Block strong inset>
            <h4>Email:</h4>
              <p>Send us an email at <i>haitmadhurya@gmail.com</i></p>
        </Block>
        <Block strong inset>
           
              <h4>Contact Number:</h4>
              <p>Reach out to us at <i>+91-9931111589</i></p>

        </Block>
        <Block strong inset>
            <h4>Visit Us:</h4>
              <p>Drop by and talk to us straight at<br/>
                <i>Sikkim Manipal Institute of Technology,<br />
                Majitar, Sikkim - 737136</i>
              </p>
        </Block>

        <Block strong inset>
             <h4>Business Hours:</h4>
              <p>Monday to Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
        </Block>
       
        </div>
     </Block>
    </div>
    </Page>
  )
}

export default Contact


  
