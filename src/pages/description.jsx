import { Page,Navbar,BlockTitle,Block } from 'framework7-react'
import React from 'react'
 
const Description = () => {
  return (
    <Page>
         <Navbar title="Description" backLink="Back" />

    <div className='description'>

    <BlockTitle><h2>Key Features</h2></BlockTitle>

   <Block bold inset >
       1. <b>Intuitive Interface</b><br/>
       <p> Our app boasts a user-friendly interface that makes calorie tracking a breeze. With a clean design and easy navigation, you can log your meals, snacks, and drinks in seconds. </p>

       2. <b>Extensive Food Database</b><br/>
        <p>Access a comprehensive food database that covers a wide range of cuisines and dietary preferences. We continuously update and expand our database to ensure accuracy and relevance.</p>

       3. <b>Progress Tracking</b><br/>
        <p>Stay motivated by tracking your progress over time. Visualize your achievements, set new milestones, and celebrate your successes on your journey to a healthier you.</p>

       4. <b>Community Support</b><br/>
        <p>Connect with like-minded individuals within our community. Share tips, recipes, and encouragement with others who are on a similar path. Together, we can build a supportive environment for everyone's health and wellness journey.</p>

        5. <b>Integrated Google Ai</b><br/>
        <p>Harness the power of Google Gemini which is integated in this app that helps recoginze the food and show calories right at your finger tips, You just need to click a photograph.</p>
      
     </Block>
    </div>
    </Page>
  )
}

export default Description