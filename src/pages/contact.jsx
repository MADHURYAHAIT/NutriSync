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
        We are here to help you. For any queries, feel free to reach out to us. We will get back to you as soon as possible.
        </p>
        <div className='c'>
        <Block strong inset>
            <p>Our email : <i> haitmadhurya@gmail.com</i> </p>
        </Block>
        <Block strong inset>
        <p>Our contact number : <i> +91-1234567890</i> </p>
        </Block>
        <Block strong inset>
        <p>Our address : <i> Sikkim Manipal Institue of Technology, Majitar, Sikkim - 737136</i></p>
        </Block>
        </div>
     </Block>
    </div>
    </Page>
  )
}

export default Contact