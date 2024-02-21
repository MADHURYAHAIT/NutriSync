import React, { useState, useEffect } from 'react';
import moment from 'moment';

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(null);

  useEffect(() => {
    const updateDateTime = () => {
      const formattedDateTime = moment().format(' D MMM, h:mm a');
      setCurrentDateTime(formattedDateTime);
    };

    // Update every second
    const intervalId = setInterval(updateDateTime, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='dt'>
      {currentDateTime ? (
        <p>{currentDateTime}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DateTimeComponent;
