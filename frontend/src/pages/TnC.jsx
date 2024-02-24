
import { Page, Navbar, BlockTitle, Block } from 'framework7-react';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <Page>
      <Navbar title="Terms and Conditions" backLink="Back" />

      <div className='terms-and-conditions'>

        <BlockTitle><h2>Terms and Conditions</h2></BlockTitle>

        <Block bold inset>
          <p>Please read these terms and conditions carefully before using our application. By accessing or using the app, you agree to be bound by these terms.</p>

          <h4>1. Acceptance of Terms</h4>
          <p>By accessing or using the NutriSync application (the "App"), you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use the App.</p>

          <h4>2. User Conduct</h4>
          <p>You agree to use the App for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the App. Prohibited behavior includes but is not limited to:</p>
          <ul>
            <li>Violating any applicable laws or regulations.</li>
            <li>Interfering with or disrupting the App or servers.</li>
            <li>Attempting to gain unauthorized access to the App or its related systems or networks.</li>
            <li>Using the App for any purpose that is unlawful or prohibited by these terms.</li>
          </ul>

          <h4>3. Privacy Policy</h4>
          <p>Your use of the App is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and disclose your information.</p>

          <h4>4. Modification of Terms</h4>
          <p>We reserve the right to modify or replace these terms at any time. Any changes will be effective immediately upon posting. Continued use of the App after any such changes constitutes your acceptance of the new terms.</p>

          <h4>5. Termination</h4>
          <p>We may terminate or suspend access to our App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these terms.</p>

          <h4>6. Intellectual Property</h4>
          <p>The App and its original content, features, and functionality are owned by NutriSync and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

          {/* Add more sections as needed based on your application's terms and conditions */}
        </Block>
      </div>
    </Page>
  );
}

export default TermsAndConditions;
