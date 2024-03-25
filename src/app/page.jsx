import Image from 'next/image'
import React from 'react';
import styles from './styles.module.css'
import Timer from '../components/timer/Timer';

const page = () => {
  return (
    <>
    <div className='mt-10'></div>
      <div className={`${styles.container} mb-5 py-0 sm:mb-20 sm:py-6`}>
        <div className='container'>
          <h1 className="text-2xl sm:text-5xl font-bold text-center text-white ">Staying <span className="special-text">Physically Fit</span> in a <span className="special-text">Digital World</span></h1>
          <Image alt='mockup' src={"/SolFit base mockup dark.png"} width={300} height={200} className={styles.heroIMG} />
        </div>
        <div className="flex w-full items-center gap-10 justify-center" style={{backgroundColor: "transparent !important"}}>
        <Image alt='mockup' src={"/chainlink logo white hq.png"} width={100} height={100} className={styles.brandImg}/>  
        <Image alt='mockup' src={"/IPFS logo white hq.png"} width={100} height={100} className={styles.brandImg}/>  
        <Image alt='mockup' src={"/phantom logo white hq.png"} width={100} height={100} className={styles.brandImg}/>  
        <Image alt='mockup' src={"/solflare logo white hq.png"} width={100} height={100} className={styles.brandImg}/>  
      </div>
      </div>

      <div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}

      className={`${styles.container} mt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between flex w-full flex-col sm:flex-row">
        <Image alt='mockup' src="/SolFit Dark 1.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white w-full sm:w-1/2'>
          <span className="special-text">SolFit</span> is a <span className="special-text">Revolutionary Application</span> that allows users to stake their <span className="special-text">$SOLFIT</span> and gain rewards for being fit
        </h2>
        </div>
      </div>

      <div className={`${styles.container} mt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between flex w-full flex-col sm:flex-row-reverse">
        <Image alt='mockup' src="/SolFit Dark 2.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white items-start w-full sm:w-1/2'>
         <span className="special-text"> Clear overview</span> of your <span className="special-text">activiity</span> and <span className="special-text">rewards</span>
        </h2>
        </div>
      </div>

      <div className={`${styles.container} mt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between flex w-full flex-col sm:flex-row">
        <Image alt='mockup' src="/SolFit Dark 3.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white w-full sm:w-1/2'>
          Go into <span className="special-text">detail</span> in your SolFit <span className="special-text">application</span>
        </h2>
        </div>
      </div>

      <div className={`${styles.container} mt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between  flex w-full flex-col sm:flex-row-reverse">
        <Image alt='mockup' src="/SolFit Dark 5.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white items-start w-full sm:w-1/2'>
          Easy-to-access
          <span className="special-text">staking platform</span>
        </h2>
        </div>
      </div>

      <div className={`${styles.container} mt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between flex w-full flex-col sm:flex-row">
        <Image alt='mockup' src="/SolFit Dark 3.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white w-full sm:w-1/2'>
         Redeem your points
         for <span className="special-text">$SOLFIT</span>
        </h2>
        </div>
      </div>

      <div className={`${styles.container} mt-20 py-0 sm:py-6 text-center sm:text-start`}>
        <div className="container items-center justify-between  flex w-full flex-col sm:flex-row-reverse">
        <Image alt='mockup' src="/SolFit Dark 5.png" width={200} height={500} className={`${styles.sectionImg} mt-10 sm:mt-0`} />
        <h2 className='text-xl sm:text-3xl font-bold text-white items-start w-full sm:w-1/2'>
          Stay up-to-date with
          the <span className="special-text">latest news</span>
        </h2>
        </div>
      </div>

      {/* road map */}
        <div className={styles.container} id='roadmap'>
          <div className="container">
          <h3 className='text-white text-xl font-bold text-center sm:text-3xl mt-20 mb-10'>Roadmap</h3>
          <Image width={100} height={100} src='/roadmap.png' className={`${styles.roadmap} m-auto my-10`}/>
          </div>
        </div>

      <div className={styles.container} id='application'>
        <div className="container">
          <div className={styles.container}>
          <h3 className='flex justify-center items-center gap-7 text-white text-xl font-bold text-center sm:text-3xl mt-20 mb-10'>
            Try <Image width={100} height={100} src='/logo.png' className={styles.smalllogo}/>
          </h3>
          <Timer/>
          </div>
        </div>
      </div>

      {/* stores */}

      <div className={styles.container}>
        <div className="container flex justify-center items-center">
          <Image width={400} height={200} className={styles.stores} src="/App stores.png" alt="" />
        </div>
      </div>
      
    </>
  )
}

export default page
