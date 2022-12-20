import React, {useState, useEffect} from "react";
import { contentService } from '../services';
import { bannerConstant } from '../constants';

function Banner () {

  const [banner, setBanner] = useState(null)
  
  useEffect (()=> {      
    getBanner()
  }, [])

  const getBanner = () => {        
    contentService.getBanner({}, (err, res) => {
        if (err) return;                
        if (res.status) {
          setBanner (res.data)
        }
    })
  }

  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-dark"
      id="header"
    >
      <div className="banner banner-fs tc-light py-2">
        <div className="nk-block nk-block-sm nk-block-header my-auto">
          <div className="container container-xxl pt-5">
            <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
              <div className="col-lg-6 order-lg-last">
                <div
                  className="banner-gfx banner-gfx-auto animated"
                  data-animate="fadeInUp"
                  data-delay=".7"
                >
                  {
                    banner && banner.image && banner.image.length > 0 ? <img src={banner.image} alt="Hexa Token" />: <img src="hexa/img/Hexa.webp" alt="Hexa Token" />
                  }                
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-sm-10 text-center text-lg-left">
                <div className="banner-caption">
                  <h1
                    className="title title-lg ttu animated"
                    data-animate="fadeInUp"
                    data-delay=".8"
                  >                    
                    {banner && banner.heading? banner.heading: bannerConstant.heading}   
                  </h1>
                  <p
                    className="lead animated"
                    data-animate="fadeInUp"
                    data-delay=".9"
                  >                    
                    {banner && banner.description? banner.description: bannerConstant.description}             
                  </p>
                  <div
                    className="cpn-action animated"
                    data-animate="fadeInUp"
                    data-delay="1"
                  >
                    <a className="btn btn-primary btn-round" href="#">
                      {banner && banner.button_text? banner.button_text: bannerConstant.btn_txt}   
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="particles-bg"
          className="particles-container is-fixed particles-bg op-20"
        ></div>
      </div>
    </header>
  );
}

export default Banner;
