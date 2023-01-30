import React, {useEffect}  from 'react'
import './footer.css'
import video2 from '../../Assets/v2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
}, [] )

  return (
    <section className="footer">
      <div data-aos="zoom-out-down" className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div  className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="zoom-out-down" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos="zoom-out-down" data-aos-duration="5000"  type="text" placeholder='Enter Email Address' />
            <button data-aos="zoom-out-down" data-aos-duration="5000" className='btn flex' type='submit'>

              SEND<FiSend className="icon" />
            </button>


          </div>
        </div>

        <div className="footerCard flex">
          <div data-aos="fade-up" data-aos-duration="5000" className="footerIntro flex">
              <a href="#" data-aos="zoom-out-down" data-aos-duration="5000" className='logo flex'>
                <MdOutlineTravelExplore className="icon"/>TRAVEL
              </a>
            
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer