'use client'

import styles from './styles.module.css'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const Timer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("Tue Mar 26 2024") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
    
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