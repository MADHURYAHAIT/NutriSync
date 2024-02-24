import React, { useState, useEffect } from 'react';
import DateTimeComponent from './DateTimeComponent';
import TRow from './tableRow';
import {
  Page,
  Navbar,
  NavTitleLarge,
  NavRight,
  Link,
  Block,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
} from 'framework7-react';
import { FaBell } from "react-icons/fa";
import CircularCompletionRing from './CircularCompletionRing';
import '../css/completionRing.css';
import { FaFire } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";

const HomePage = () => {
  const [intake, setIntake] = useState(0);
  const [burn, setBurn] = useState(480);
  const [calorieObj, setCalorieObj] = useState(null);
  const [foodObj, setFoodObj] = useState(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const user1 = localStorage.getItem('currentUser');

      try {
        const response = await fetch(`http://192.168.133.239:8000/fetchCalories?user1=${encodeURIComponent(user1)}`);

        if (!response.ok) {
          console.log('Network response was not ok');
          return;
        }

        const responseData = await response.json();
        localStorage.setItem('calorieData', JSON.stringify(responseData.calories));
        localStorage.setItem('foodData', JSON.stringify(responseData.food));

        setCalorieObj(responseData.calories);
        setFoodObj(responseData.food);
        setLength(Object.keys(responseData.food).length);
        setIntake(Object.values(responseData.calories).reduce((acc, currentValue) => acc + Number(currentValue), 0));
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Page name="home">
        {/* Top Navbar */}
        <Navbar title="NutriSync">
          <NavRight>
            <Link iconIos="f7:bell" iconMd="material:bell" panelOpen="left">
              <FaBell className='bellIcon'><span className="badge color-red">3</span></FaBell>
              <span className="badge color-red">3</span>
            </Link>
          </NavRight>
        </Navbar>

        <div className='example'>
          <Block className='Caloriemeter'>
            <div className='maindial'>
              <div className='dial'>
                <div className='dialtext'>
                  <FaFire id='fire' />
                  <h1>{intake - burn}</h1>
                </div>
                <h4>Net Calories Today</h4>
                <DateTimeComponent />
              </div>
              <CircularCompletionRing radius={159} strokeWidth={7} percentage={(intake - burn) * 100 / 1000} />
            </div>
            <div className='div1'>
              <NavTitleLarge> <FaRunning id='icon' /> <h1>{burn}</h1><h4>Calorie Burn</h4></NavTitleLarge>
            </div>
            <div className='div2'>
              <NavTitleLarge> <FaPizzaSlice id='icon' /> <h1>{intake}</h1><h4>Calorie Intake</h4></NavTitleLarge>
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
                  <Link className="button" >Add</Link>
                  <Link className="button" >Remove</Link>
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
                      <th className="numeric-cell">Calories(Cal)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {length > 0 ? (
                      Object.keys(calorieObj).map((key) => (
                        <TRow
                          key={key}
                          title={foodObj[key]}
                          text={calorieObj[key]}
                        />
                      ))
                    ) : (
                      <tr>
                      <td className="checkbox-cell"></td>
                      <td className="label-cell">No Data Available</td>
                      <td className="numeric-cell">Nil</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </Page>
  </>
);
};

export default HomePage;

