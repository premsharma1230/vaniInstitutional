import React, { useState, useEffect } from "react";
import BannerImg from "../../../assets/banner.png";
import { BannerApi } from "../../../api/api";

export const Banner = () => {
  const [banner, setBanner] = useState();
  const studentLogin = JSON.parse(localStorage.getItem("studentLogin"));
  useEffect(() => {
    BannerApi(studentLogin?.College_Slug, studentLogin?.token).then(elem => {
      return setBanner(elem?.data);
    });
  }, []);

  return (
    <>
      <div className="Banner_Wrapper">
        <div className="Banner_img">
          <img
            src={banner && banner?.image ? banner?.image : BannerImg}
            alt="banner"
          />
        </div>
        <div className="Banner_Content">
          <div className="container">
            <h1>
              {banner && banner?.title
                ? banner?.title
                : "Vani Prakashan eBook Pathshala"}
            </h1>
            <p>
              {banner && banner?.description
                ? banner?.description
                : ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              pellentesque eu sit nisi, potenti ante purus vestibulum nibh.
              Tellus consequat, cum nam bibendum elementum porta scelerisque
              eleifend felis. Facilisis.`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
