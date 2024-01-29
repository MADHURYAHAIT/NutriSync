import React from 'react';
import { Page, Navbar, Block, BlockTitle } from 'framework7-react';

const AboutPage = () => (
  <Page>
    <Navbar title="About" backLink="Back" />
    <BlockTitle>About My App</BlockTitle>
    <Block>
      <p>
      Welcome to CalorieSyn, your go-to solution for effortless and effective calorie tracking. We understand that maintaining a healthy lifestyle is a journey, and we're here to support you every step of the way. Whether you're looking to lose weight, gain muscle, or simply stay on top of your nutritional goals, our app is designed to make calorie tracking simple, intuitive, and enjoyable.
      </p>
      <p>
      Key Features
1. <b>Intuitive Interface</b>
Our app boasts a user-friendly interface that makes calorie tracking a breeze. With a clean design and easy navigation, you can log your meals, snacks, and drinks in seconds.<br/>

2. <b>Extensive Food Database</b>
Access a comprehensive food database that covers a wide range of cuisines and dietary preferences. We continuously update and expand our database to ensure accuracy and relevance.<br/>



3. <b>Progress Tracking</b>
Stay motivated by tracking your progress over time. Visualize your achievements, set new milestones, and celebrate your successes on your journey to a healthier you.<br/>

4. <b>Community Support</b>
Connect with like-minded individuals within our community. Share tips, recipes, and encouragement with others who are on a similar path. Together, we can build a supportive environment for everyone's health and wellness journey.<br/>

<b>Get Started Today</b>
Ready to take control of your nutrition? Download NutriSync now and embark on a journey towards a healthier, happier you. Join thousands of users who have already embraced the simplicity and effectiveness of our calorie tracking app.<br/>

Thank you for choosing NutriSync. We're excited to be part of your health and wellness journey!
      </p>
    </Block>
  </Page>
);

export default AboutPage;
