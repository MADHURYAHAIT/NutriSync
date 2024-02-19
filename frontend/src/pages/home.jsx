import React ,{ useState } from 'react';
import DateTimeComponent from './DateTimeComponent';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  Icon,
  Card,
  CardContent,
  CardHeader,
  BlockHeader,
  Checkbox,
} from 'framework7-react';
import { FaBell } from "react-icons/fa";
import CircularCompletionRing from './CircularCompletionRing';
import '../css/completionRing.css';
import { FaFire } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
const HomePage = () => {
  const [data, setData] = useState([
    { dessert: 'Frozen yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, comments: 'I like frozen yogurt' },
    // Add more data items as needed
  ]);

  const handleAdd = () => {
    const newItem = { dessert: 'New Dessert', calories: 0, fat: 0, carbs: 0, protein: 0, comments: '' };
    setData([...data, newItem]);
  };

  const handleRemove = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  let [intake,setIntake] = useState(1030);
  let [burn,setBurn] = useState(380);



  return(

  <Page  name="home">
    {/* Top Navbar */}
    <Navbar title="NutriSync">
      <NavRight>
        <Link iconIos="f7:bell" iconMd="material:bell" panelOpen="left">
          <FaBell className='bellIcon'/>
        </Link>
      </NavRight>
    </Navbar>
      

    <div className='example'>
    <Block className='Caloriemeter'>
    <div className='div3'>
     
      {/* <h3>Today</h3> */}
      <DateTimeComponent/>
    </div>
      <NavTitleLarge><FaFire id='fire' /><h1>{intake-burn}</h1><h4>Net Calories Today</h4> </NavTitleLarge>
      <CircularCompletionRing radius={179} strokeWidth={7} percentage={86} />
     
      <div className='div1'>
        <NavTitleLarge>  <FaRunning id='icon' /> <h1>{burn}</h1><h4>Calorie Burn</h4></NavTitleLarge>
       
      </div>

      <div className='div2'>
        <NavTitleLarge>  <FaPizzaSlice  id='icon' /> <h1>{intake}</h1><h4>Calorie Intake</h4></NavTitleLarge>
        {/* <CircularCompletionRing radius={70} strokeWidth={5} percentage={46} /> */}
      </div>

      <div className='div4'>
        <h3>Welcome To Your Daily Stats</h3>
        <h6>Your personal fitness assistant : )</h6>
      </div>

     
    </Block>
   


  <div className='activities'>
    <Block>
      <h3>Past activites today</h3>
    </Block>
    <Card className="data-table data-table-init">
      <CardHeader>
         <div className="data-table-links">
          <a className="button" onClick={handleAdd}>Add</a>
          {/* Map over data and render a remove button for each item */}
          {data.map((item, index) => (
            <a className="button" key={index} onClick={() => handleRemove(index)}>Remove</a>
          ))}
        </div>
        <div className="data-table-actions">
          <Link iconIos="f7:line_horizontal_3_decrease" iconMd="material:sort" />
          <Link iconIos="f7:ellipsis_vertical_circle" iconMd="material:more_vert" />
        </div>
      </CardHeader>
      <CardContent padding={true}>
        <table>
          <thead>
            <tr>
              <th className="checkbox-cell">
                <Checkbox />
              </th>
              <th className="label-cell">Dessert (100g serving)</th>
              <th className="numeric-cell">Calories</th>
              <th className="numeric-cell">Fat (g)</th>
              <th className="numeric-cell">Carbs</th>
              <th className="numeric-cell">Protein (g)</th>
              <th className="medium-only">
                <Icon ios="f7:chat_bubble_text_fill" md="material:message" /> Comments
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="checkbox-cell">
                <Checkbox />
              </td>
              <td className="label-cell">Frozen yogurt</td>
              <td className="numeric-cell">159</td>
              <td className="numeric-cell">6.0</td>
              <td className="numeric-cell">24</td>
              <td className="numeric-cell">4.0</td>
              <td className="medium-only">I like frozen yogurt</td>
              <td className="actions-cell">
                <Link iconIos="f7:square_pencil" iconMd="material:edit" />
                <Link iconIos="f7:trash" iconMd="material:delete" />
              </td>
            </tr>
            <tr>
              <td className="checkbox-cell">
                <Checkbox />
              </td>
              <td className="label-cell">Ice cream sandwich</td>
              <td className="numeric-cell">237</td>
              <td className="numeric-cell">9.0</td>
              <td className="numeric-cell">37</td>
              <td className="numeric-cell">4.4</td>
              <td className="medium-only">But like ice cream more</td>
              <td className="actions-cell">
                <Link iconIos="f7:square_pencil" iconMd="material:edit" />
                <Link iconIos="f7:trash" iconMd="material:delete" />
              </td>
            </tr>
            <tr>
              <td className="checkbox-cell">
                <Checkbox />
              </td>
              <td className="label-cell">Eclair</td>
              <td className="numeric-cell">262</td>
              <td className="numeric-cell">16.0</td>
              <td className="numeric-cell">24</td>
              <td className="numeric-cell">6.0</td>
              <td className="medium-only">Super tasty</td>
              <td className="actions-cell">
                <Link iconIos="f7:square_pencil" iconMd="material:edit" />
                <Link iconIos="f7:trash" iconMd="material:delete" />
              </td>
            </tr>
            <tr>
              <td className="checkbox-cell">
                <Checkbox />
              </td>
              <td className="label-cell">Cupcake</td>
              <td className="numeric-cell">305</td>
              <td className="numeric-cell">3.7</td>
              <td className="numeric-cell">67</td>
              <td className="numeric-cell">4.3</td>
              <td className="medium-only">Don't like it</td>
              <td className="actions-cell">
                <Link iconIos="f7:square_pencil" iconMd="material:edit" />
                <Link iconIos="f7:trash" iconMd="material:delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>


 


    </div>


    
     </div>
  </Page>
  );
};
export default HomePage;