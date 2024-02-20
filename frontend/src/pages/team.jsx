import { Navbar, Page, Block, Card, CardHeader, CardContent, Link, Button, Subnavbar } from 'framework7-react';
import React from 'react'

const Team = () => {
  return (
    <Page>
    <Navbar title="Teams" backLink="Back" />
    <div className='team'>
    <Block>
        <h6>NutriSync</h6>
                <p>
                The NutriSync company extends its sincere gratitude to each and every member of the team for their outstanding efforts and dedication in bringing NutriSync, the ultimate calorie tracking app, to fruition.

          The team's collective expertise, creativity, and tireless commitment have been instrumental in every stage of development, from initial concept discussions to the final execution. The hard work and collaboration have resulted in a remarkable achievement.

          Challenges were met and victories were celebrated together, leading to the creation of NutriSync. This app stands not just as a technological milestone but as a testament to the incredible teamwork, passion, and professionalism that define our team.

          The NutriSync company is proud to have such a talented group of individuals on board. The success of NutriSync is a reflection of the team's skills and dedication.

          As we celebrate the completion of this project, we also look forward to the positive impact NutriSync will have on the lives of its users. The team's contributions have not only elevated our collective capabilities but also have the potential to make a meaningful difference in the world.

          Once again, the NutriSync company extends its gratitude for the hard work, enthusiasm, and collaborative spirit of every team member. The team looks forward to future endeavors together.


                </p>
    </Block>
    <div className="demo-expandable-cards">
    <h3 style={{paddingLeft:'20px'}}>Developer : </h3>
      <Card expandable>
        <CardContent padding={false}>
          <div
            style={{
              background: 'url(../imgs/profile.jpeg) no-repeat center top',
              backgroundSize: 'cover',
              height: '400px',
            }}
          >
            <CardHeader textColor="white" className="display-block">Madhurya Hait
            <br/>
            <small style={{ opacity: 0.7 }}>Web Developer</small>
            </CardHeader>
            <Link
              cardClose
              color="white"
              className="card-opened-fade-in"
              style={{ position: 'absolute', right: '15px', top: '15px' }}
              iconF7="xmark_circle_fill"
            />
          </div>
          <div className="card-content-padding">
          <p>
               Hi I am Madhurya Hait, A Web Developer of 21 years. I made the website. I'm a Student of sikkim Manipal Institute of Technology.
            </p>
            <p>
             <i>Instagram : @madhuryahait</i><br/>
             <i>Github : MADHURYAHAIT</i><br/>
             <i>Linkdin : MADHURYA HAIT</i><br/>
            </p>
            <p>
              <Button fill round large cardClose>
                Close
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
      <h3 style={{paddingLeft:'20px'}}>Our Contribitors : </h3>
      <Card expandable>
        <CardContent padding={false}>
          <div
            style={{
              background: 'url(../imgs/toshith.jpg) no-repeat center top',
              backgroundSize: 'cover',
              height: '400px',
            }}
          >
            <CardHeader textColor="white" className="display-block">Toshith Yadav
            <br/>
            <small style={{ opacity: 0.7 }}>Web Developer</small>
            </CardHeader>
           
           


            <Link
              cardClose
              color="white"
              className="card-opened-fade-in"
              style={{ position: 'absolute', right: '15px', top: '15px' }}
              iconF7="xmark_circle_fill"
            />
          </div>
          <div className="card-content-padding">
           
            <p>
              <Button fill round large cardClose>
                Close
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>


      <Card expandable>
        <CardContent padding={false}>
          <div
            style={{
              background: 'url(../imgs/shivam.jpeg) no-repeat center top',
              backgroundSize: 'cover',
              height: '400px',
            }}
          >
            <CardHeader textColor="black" className="display-block">Shivam Kumar
            <br/>
            <small style={{ opacity: 0.7 }}>ML Engineer</small>
            </CardHeader>
           
           


            <Link
              cardClose
              color="white"
              className="card-opened-fade-in"
              style={{ position: 'absolute', right: '15px', top: '15px' }}
              iconF7="xmark_circle_fill"
            />
          </div>
          <div className="card-content-padding">
            <p>
                Hi I am Shivam
            </p>
            <p>
             
            </p>
            <p>
              <Button fill round large cardClose>
                Close
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>


    </div>
    </div>
  </Page>
  )
}

export default Team




