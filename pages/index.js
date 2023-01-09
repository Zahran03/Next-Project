import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../componens/Navbar'
import Footer from '../componens/Footer'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <>
      <Head>
        <title>Ninjas | Home</title>
        <meta name="keyword" content="ninjas"/>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat fugit laborum necessitatibus officia laudantium numquam similique odio pariatur praesentium.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat fugit laborum necessitatibus officia laudantium numquam similique odio pariatur praesentium.</p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninjas Listing
      </Link>

      </>
    </div>
  )
}
