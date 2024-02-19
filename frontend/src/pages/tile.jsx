import React from 'react'

const Tile= ({MyData}) => {
   
    // console.log(studData);
  return (
    <>

    {MyData.map((curElem)=>{
        console.log(curElem);
        return(
        <>
            <div className='card-container2' key={curElem}>
             
               <div>
                Name : {curElem.Name}
                Calories : {curElem.Calories}
               </div>
          </div>
        </>
      )
    })}
  </>

  )
}

export default Tile