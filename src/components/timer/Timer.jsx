'use client'

import styles from './styles.module.css'
import React, { useState, useEffect } from 'react';


const Timer = () => {

  const [timeLeft, setTimeLeft] = useState({});

  const startTimer = () => {
        // Set the target date to March 27th
  const targetDate = new Date('March 27, ' + new Date().getFullYear() + ' 12:00:00').getTime();

  // Update the countdown every second
  const countdownInterval = setInterval(() => {
      // Get the current time
      const currentTime = new Date().getTime();
      
      // Calculate the time remaining
      const timeRemaining = targetDate - currentTime;
      
      // Check if the countdown has finished
      if (timeRemaining <= 0) {
          clearInterval(countdownInterval);
          console.log("Countdown finished!");
      } else {
          let _timeLeft = {};
          // Calculate days, hours, minutes, and seconds from milliseconds
          _timeLeft.hours = Math.floor(timeRemaining / (1000 * 60 * 60));
          _timeLeft.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          _timeLeft.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

          setTimeLeft(_timeLeft)
      }
  }, 1000); // Update every second
  }

  useEffect(startTimer,[])

    
    
  return (
    <section className={styles.countdown}>
    <h2>Try our app in</h2>
    <div className={`${styles.timerContainer} flex items-center justify-center`}>
        <h3 suppressHydrationWarning  className='text-white sm:font-bold text-2xl sm:text-4xl' >{timeLeft.hours}</h3>
        <h3 suppressHydrationWarning  className='text-white sm:font-bold text-2xl sm:text-4xl' >:</h3>
        <h3 suppressHydrationWarning  className='text-white sm:font-bold text-2xl sm:text-4xl' >{timeLeft.minutes}</h3>
        <h3 suppressHydrationWarning  className='text-white sm:font-bold text-2xl sm:text-4xl' >:</h3>
        <h3 suppressHydrationWarning  className='text-white sm:font-bold text-2xl sm:text-4xl' >{timeLeft.seconds}</h3>
    </div>
  </section>
  )
}

export default Timer