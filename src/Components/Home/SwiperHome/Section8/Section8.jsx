import image1 from "./Images/chargers_ar_web.jpg";
import image3 from "./Images/mobileandtablets_ar_web.jpg";
import image2 from "./Images/sound_ar_web.jpg";
import image4 from "./Images/tws_ar_web.jpg";
import image5 from "./Images/wearables_ar_web.jpg";

import "./Section8.css"

const Section8 = () => {
  return (
    <div className='w-100 my-3'>
      <div className='container'>
        <div className='section8-image-box'>
          <div className='images-box'>
            <div className='image1'>
              <img src={image1} alt='...' />
            </div>
            <div className='image2'>
              <img src={image2} alt='...' />
            </div>
            <div className='image3'>
              <img src={image3} alt='...' />
            </div>
            <div className='image4'>
              <img src={image4} alt='...' />
            </div>
            <div className='image5'>
              <img src={image5} alt='...' />
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Section8
