import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

const NotFoundPage = () => (
  <Page>
    <Navbar title="Not found" backLink="Back" />
    <div className='notFound'>
    <Block strong inset>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </Block>
    </div>
  </Page>
);

export default NotFoundPage;
