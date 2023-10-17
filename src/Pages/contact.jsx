import React from 'react'
import '../App.css'
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavBar } from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import MobileNav from "../Components/Mobilenav/MobileNav"

export default function Contact() {

    const isSmallScreen = useMediaQuery("(max-width: 784px)");
    const [drawer, setDrawer] = useState(false);

    const openDrawer = () => {
        setDrawer(true);
    };
    return (
        <>


            {isSmallScreen ? (
                <div onClick={openDrawer} style={{ cursor: "pointer" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{ width: "2.0em" }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
            ) : (
                <NavBar />
            )}
            {drawer && (
                <MobileNav open={drawer} anchor="left" setDrawer={setDrawer} />
            )}



            <center className='mt-5'>
                <form className='contact_form rounded-7 m-3 p-3'>
                    <center><h2 className='about_head text-warning'>Contact Us</h2></center>
                    <div class="form-outline mb-4">
                        <input type="text" id="form4Example1" class="form-control border-bottom" />
                        <label class="form-label text-light" for="form4Example1">Name</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="email" id="form4Example2" class="form-control form-control border-bottom border-white" />
                        <label class="form-label text-light" for="form4Example2">Email address</label>
                    </div>

                    <div class="form-outline mb-4">
                        <textarea class="form-control form-control border-bottom" id="form4Example3" rows="4"></textarea>
                        <label class="form-label text-light" for="form4Example3">Message</label>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2 bg-warning" type="checkbox" value="" id="form4Example4" />
                        <label class="form-check-label text-dark" for="form4Example4">
                            Send me a copy of this message
                        </label>
                    </div>
                    <button className='btn btn-warning btn-block rounded-7'>Send</button>
                    <br />
                </form>
            </center>
            <br /><br />
            <Footer /> </>
    )
}
