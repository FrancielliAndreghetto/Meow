'use client'
import './globals.css'
import Image from 'next/image'
import NavBar from '../components/navbar'
import Header from '@/components/header'
import Coffes from '@/components/coffes'

export default function Home() {
  return (
    <main className='bg-[#F7F2E8]'>
      <NavBar/>
      <Header />
      <Coffes />
    </main>
  )
}
