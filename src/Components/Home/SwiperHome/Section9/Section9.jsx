import React from "react";
import image1 from "./ImagesEnglish/mobiles_en_web.png";
import image2 from "./ImagesEnglish/audioandspeakers_en_web.png";
import image3 from "./ImagesEnglish/werables_en_web.png";
import image4 from "./ImagesEnglish/laptops_en_web.png";
import image5 from "./ImagesEnglish/tvs_en_web.png";
import image6 from "./ImagesEnglish/monitor_care_en_web.png";

function Section9() {
  return (
    <div className="section9 w-100">
      <div className="container">
        <div className="section9-content row gap-3">
          <div className="row m-0 p-0 px-1">
            <div className="col-12 col-md-6 p-0">
              <div className="h-100 px-2">
                <img src={image1} alt="..." width={"100%"} height={"100%"} />
              </div>
            </div>
            <div className="col-6 mt-3 mt-md-0 col-md-3 p-0">
              <div className="h-100 px-2">
                <img src={image2} alt="..." width={"100%"} height={"100%"} />
              </div>
            </div>
            <div className="col-6 mt-3 mt-md-0 col-md-3 p-0">
              <div className="h-100 px-2">
                <img src={image3} alt="..." width={"100%"} height={"100%"} />
              </div>
            </div>
          </div>

          <div className="row m-0 p-0 px-1 flex-row-reverse">
          <div className="col-12 col-md-6 p-0">
              <div className="h-100 px-2">
                <img src={image4} alt="..." width={"100%"} height={"100%"} />
              </div>
            </div>

            <div className="col-6 mt-3 mt-md-0 col-md-3 p-0">
              <div className="h-100 px-2">
                <img src={image5} alt="..." width={"100%"} height={"100%"} />
              </div>
            </div>
            <div className="col-6 mt-3 mt-md-0 col-md-3 p-0">
              <div className="h-100 px-2">
                <img src={image6} alt="..." width={"100%"} height={"100%"} />
              </div>
            </div>

           

          </div>
        </div>
      </div>
    </div>
  );
}

export default Section9;
