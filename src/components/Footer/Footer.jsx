import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
        <div className="leftFooter">
          <h1>Menu</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">All Services</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="rightFooter">
          <div className="socialIcons">
            <h1>Contact</h1>
            <div id='socialMediaIcons' >
            <FacebookOutlinedIcon style={{ fontSize: '2.5rem', color: 'rgb(157, 157, 157)' }}/>
            <LinkedInIcon style={{ fontSize: '2.5rem', color: 'rgb(157, 157, 157)' }}/>
            <TwitterIcon style={{ fontSize: '2.5rem', color: 'rgb(157, 157, 157)' }}/>
            </div>
          </div>
          <div className="infoFooter">
            <p>Have any questions?
</p>
            <p>Please don't hesitate to contact us!</p>
            <p>Phone: <span>+1 (505) 225-2487</span></p>
            <p>Email: <span>sales@canyoncomponents.com</span></p>
            <p>Address: <span>5203 Juan Tabo Blvd. NE Suite 2B,</span></p>
            <p><span>Albuquerque, NM 87111</span></p>
          </div>
        </div>
      </div>
  )
}

export default Footer