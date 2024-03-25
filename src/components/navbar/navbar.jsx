import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
        <div className="container flex items-center justify-between py-5 px-0">
          {/* Logo */}
          <Link href={"/"}>
          <Image alt='logo' src={"/SolFit logo white no bg.png"} width={100} height={50} className={styles.logo} />
          </Link>
          {/* Links */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href={"#application"} className='text-white font-bold text-sm sm:text-xl'>Application</Link>
            <Link href={"#roadmap"} className='text-white font-bold text-sm sm:text-xl'>Roadmap</Link>
            <Link href={"https://whitepaper.solfit.app/"} className='text-white font-bold text-sm sm:text-xl'>Whiteppaper</Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar