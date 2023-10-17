import React from 'react'
import logo from '../About/first look logo.png'
import saintgits from '../Footer/logo White.png'
import './footer.css'

export default function Footer() {
  return (
    <div>
        <footer style={{background: 'black'}} class="text-center text-lg-start">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        
      <div className="d-flex justify-space-around cont_footer" >
      <img src= {logo} className='image-fluid w-50' alt="" />
      </div>
      </div>

      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <br /><br />
        {/* <h5 class="text-uppercase">Footer text</h5> */}
        <center>
        <img src= {saintgits} className='image-fluid saintgits' alt="" />

<p className='text-light'>
Saintgits College of Engineering <br />
Kottukulam Hills, Pathamuttam P. O, <br />
 Kerala 686532
</p>

        </center>
      </div>

    </div>
  </div>

  <div class="text-center p-3">
    © 2023 Copyright: 
    <a class="text-light" href="https://samyuktha.live/"> samyuktha.live</a>
  </div>
  <br />
</footer>
    </div>
  )
}
