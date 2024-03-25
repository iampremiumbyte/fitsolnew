import Image from 'next/image'
import React from 'react';
import styles from './styles.module.css'
import Timer from '@/components/timer/Timer';

const page = () => {
  return (
    <>
    <div className='mt-10'></div>
      <div className={`${styles.container} bg1 mb-5 py-0 sm:mb-20 sm:py-6`}>
        <div className='container'>
          <h1 className="text-2xl sm:text-5xl font-bold text-center text-white ">Staying <span className="special-text">Physically Fit</span> in a <span className="special-text">Digital World</span></h1>
          <img alt='mockup' src={"/SolFit base mockup dark.png"} width={300} height={200} className={styles.heroIMG} />
        </div>
        <div className="flex w-full items-center gap-10 justify-center" style={{backgroundColor: "transparent !important"}}>
        <img alt='mockup' src={"/chainlink logo white hq.png"} width={100} height={100} className={styles.brandImg}/>  
        <img alt='mockup' src={"/IPFS logo white hq.png"} width={100} height={100} className={styles.brandImg}/>  
        <img alt='mockup' src={"/phantom logo white hq.png"} width={100} height={100} className={styles.brandImg}/>  
        <img alt='mockup' src={"/solflare logo white hq.png"} width={100} height={100} className={styles.brandImg}/>  
      </div>
      </div>

      <div 
      className={`${styles.container} bg2 pt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between flex w-full flex-col sm:flex-row">
        <img alt='mockup' src="/SolFit Dark 1.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white w-full sm:w-1/2'>
          <span className="special-text">SolFit</span> is a <span className="special-text">Revolutionary Application</span> that allows users to stake their <span className="special-text">$SOLFIT</span> and gain rewards for being fit
        </h2>
        </div>
      </div>

      <div className={`${styles.container} bg3 pt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between flex w-full flex-col sm:flex-row-reverse">
        <img alt='mockup' src="/SolFit Dark 2.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white items-start w-full sm:w-1/2'>
         <span className="special-text"> Clear overview</span> of your <span className="special-text">activiity</span> and <span className="special-text">rewards</span>
        </h2>
        </div>
      </div>

      <div className={`${styles.container} bg4 pt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between flex w-full flex-col sm:flex-row">
        <img alt='mockup' src="/SolFit Dark 3.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white w-full sm:w-1/2'>
          Go into <span className="special-text">detail</span> in your SolFit <span className="special-text">application</span>
        </h2>
        </div>
      </div>

      <div className={`${styles.container} bg5 pt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between  flex w-full flex-col sm:flex-row-reverse">
        <img alt='mockup' src="/SolFit Dark 5.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white items-start w-full sm:w-1/2'>
          Easy-to-access
          <span className="special-text">staking platform</span>
        </h2>
        </div>
      </div>

      <div className={`${styles.container} bg6 pt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between flex w-full flex-col sm:flex-row">
        <img alt='mockup' src="/SolFit Dark 3.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white w-full sm:w-1/2'>
         Redeem your points
         for <span className="special-text">$SOLFIT</span>
        </h2>
        </div>
      </div>

      <div className={`${styles.container} bg7 pt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between  flex w-full flex-col sm:flex-row-reverse">
        <img alt='mockup' src="/SolFit Dark 5.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white items-start w-full sm:w-1/2'>
          Stay up-to-date with
          the <span className="special-text">latest news</span>
        </h2>
        </div>
      </div>

      {/* road map */}
        <div className={`${styles.container}`} id='roadmap'>
          <div className="container bg8">
          <h3 className='text-white text-xl font-bold text-center sm:text-3xl pt-20 pb-10'>Roadmap</h3>
          <img width={100} height={100} src='/SolFit Roadmap website no bg.png' className={`${styles.roadmap} mx-auto py-10`}/>
          </div>
        </div>

      <div className={`${styles.container}`} id='application'>
        <div className="container bg9">
          <h3 className='flex justify-center items-center gap-7 text-white text-xl font-bold text-center sm:text-3xl pt-20 mb-10'>
            Try <img width={100} height={100} src='/logo.png' className={styles.smalllogo}/>
          </h3>
          <Timer/>
          <div className="container flex justify-center items-center">
          <img width={400} height={200} className={styles.stores} src="/App stores.png" alt="" />
        </div>
        </div>
      </div>
      
    </>
  )
}

export default page
