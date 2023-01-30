import React , {useEffect} from 'react'
import './main.css'
import img1 from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'

import img3 from '../../Assets/3.jpg'
import img4 from '../../Assets/4.jpg'
import img5 from '../../Assets/5.jpg'
import img6 from '../../Assets/6.jpg'
import img7 from '../../Assets/7.jpg'
import img8 from '../../Assets/8.jpg'
import img9 from '../../Assets/9.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus dolores temporibus aliquam. Corrupti ratione voluptate fugiat quasi obcaecati. Libero, blanditiis illo? Eum autem modi dolores distinctio repellat itaque alias!'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Aston Billard',
    location: 'Australia',
    grade: 'HIGH RATED',
    fees: '$900',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus dolores temporibus aliquam. Corrupti ratione voluptate fugiat quasi obcaecati. Libero, blanditiis illo? Eum autem modi dolores distinctio repellat itaque alias!'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Central Cool',
    location: 'USA',
    grade: 'ALL IN ONE',
    fees: '$600',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus dolores temporibus aliquam. Corrupti ratione voluptate fugiat quasi obcaecati. Libero, blanditiis illo? Eum autem modi dolores distinctio repellat itaque alias!'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'United Courtyard',
    location: 'Spain',
    grade: 'S-CLASS',
    fees: '$1200',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus dolores temporibus aliquam. Corrupti ratione voluptate fugiat quasi obcaecati. Libero, blanditiis illo? Eum autem modi dolores distinctio repellat itaque alias!'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Seas Marines',
    location: 'Maldives',
    grade: 'TOP NOTCH',
    fees: '$1100',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus dolores temporibus aliquam. Corrupti ratione voluptate fugiat quasi obcaecati. Libero, blanditiis illo? Eum autem modi dolores distinctio repellat itaque alias!'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'High Midtown',
    location: 'Switzerland',
    grade: '7-STAR',
    fees: '$1500',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus dolores temporibus aliquam. Corrupti ratione voluptate fugiat quasi obcaecati. Libero, blanditiis illo? Eum autem modi dolores distinctio repellat itaque alias!'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Curo-Plus',
    location: 'United Kingdom',
    grade: 'RELAX PLUS',
    fees: '$800',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus dolores temporibus aliquam. Corrupti ratione voluptate fugiat quasi obcaecati. Libero, blanditiis illo? Eum autem modi dolores distinctio repellat itaque alias!'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Forum Gallaria',
    location: 'China',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus dolores temporibus aliquam. Corrupti ratione voluptate fugiat quasi obcaecati. Libero, blanditiis illo? Eum autem modi dolores distinctio repellat itaque alias!'
  },
  
  {
    id:9,
    imgSrc: img9,
    destTitle: 'Pluton',
    location: 'India',
    grade: 'ULTRA COMFORT',
    fees: '$700',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dicta sint, ad omnis vitae totam exercitationem, libero similique explicabo, aperiam in numquam hic. Itaque sequi, nemo explicabo recusandae facilis commodi!'
  }

]

const Main = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
}, [] )



  return (
    <section data-aos="fade-right" className='main container section'>

      <div className="secTitle">
        <div className="title">
          Most visited destinations
        </div>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id,imgSrc, destTitle,location,grade,fees,description})=> {
            return (
              <div key={id} data-aos="zoom-out-down" data-aos-duration="5000" className="singleDestination">
                  
                  <div className='imageDiv'>
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>

                    </div>

                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                  </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main