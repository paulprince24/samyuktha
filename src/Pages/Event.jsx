import React, { useState } from 'react'
import { NavBar } from '../Components/Navbar/Navbar'
import Main from '../Components/Main/Main'
import MobileNav from '../Components/Mobilenav/MobileNav'
import Footer from '../Components/Footer/Footer'
import useMediaQuery from '@mui/material/useMediaQuery';
import CardList from '../Components/Event/EventList'
import firebase from '../Firebase/Config'



export default function Event() {

  
    
    const isSmallScreen = useMediaQuery('(max-width: 784px)');
    const [drawer, setDrawer] = useState(false);
  
    const openDrawer = () => {
      setDrawer(true);
    };
  return (
    <>
     <div className='bg-drak'>
     <section>
     <>
      {isSmallScreen ?
        <div onClick={openDrawer} style={{cursor:'pointer'}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '2.0em' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        :
        <NavBar />}
      {drawer && <MobileNav open={drawer} anchor='left' setDrawer={setDrawer} />}
    </>
     </section>
     
     <CardList />

     <br /><br />
     <Footer/>
    </div>
    </>
  )
}
