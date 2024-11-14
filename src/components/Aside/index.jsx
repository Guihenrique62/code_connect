'use client'

import Image from 'next/image'
import styles from './aside.module.css'


import logo from '../../app/assets/icones/Logo_small.png'
import feed from '../../app/assets/icones/feed.svg'
import feed_select from '../../app/assets/icones/feed_select.svg'
import profile from '../../app/assets/icones/account_circle.svg'
import profile_select from '../../app/assets/icones/account_circle_select.svg'
import info from '../../app/assets/icones/info.svg'
import info_select from '../../app/assets/icones/info_select.svg'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Aside = () => {

  const pathname = usePathname()

  return (
  <aside className= {styles.aside}>
    <Link href={'/'}>
      <Image src={logo} alt='Logo do code Connect'/>
    </Link>

    <Link href={'/'}>
      {pathname == '/' ? <Image src={feed_select} alt='Icone do Feed'/> : <Image src={feed} alt='Icone do Feed'/>}
    </Link>

    <Link href={'/profile'}>
      {pathname == '/profile' ? <Image src={profile_select} alt='Icone do profiler'/> : <Image src={profile} alt='Icone do profiler'/>}     
    </Link>

    <Link href={'/info'}>

      {pathname == '/info' ? <Image src={info_select} alt='Icone de info'/> : <Image src={info} alt='Icone de info'/>}     
    </Link>
  </aside>
  )
}