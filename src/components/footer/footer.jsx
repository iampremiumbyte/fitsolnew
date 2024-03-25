import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy;  2024 by SolFit</p>
        <div className="flex gap-5">
          <Link href={"https://x.com/solfitcoin"}>
            <Image src={"/x.png"} width={25} height={20}/>
          </Link>
          <Link href={"https://t.me/solfitcoinportal"}>
            <Image src={"/telegram.png"} width={25} height={20}/>
          </Link>
          <Link href={"https://medium.com/@solanafitcoin"}>
            <Image src={"/medium.png"} width={25} height={20}/>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer