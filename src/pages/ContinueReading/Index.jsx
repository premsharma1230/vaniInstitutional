import React, { useEffect, useState } from "react";
import book from "../../assets/grid1.png";
import book2 from "../../assets/book3.png";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { GetContinueReading } from "../../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "../../components/appNavigation/Profile";

export const ContinueReading = () => {
  let navigate = useNavigate();
  const [continueReading, setContinueReading] = useState([]);
  const studentLogin = JSON.parse(localStorage.getItem("studentLogin"))
  useEffect(() => {
    if(studentLogin?.token){
    GetContinueReading(studentLogin?.college_slug, studentLogin?.token).then(res => {
      setContinueReading(res?.results);
    });
  }else{
    sessionStorage.setItem("navigationStore", JSON.stringify(true))
    navigate("/");
  }
  }, []);
  function readNow(e) {
    sessionStorage.setItem("contingreadme", JSON.stringify(e));
    navigate("/continueReadBook");
  }
  return (
    <section className="Main_HomeWrapper SaveMain_Wrapper ContinueReading_Wrapper">
      <div className="Profile">
        <Profile />
      </div>
      <div className="Save_Content_wrp">
        <div className=" container">
          <div className="Save_Content">
            <div className="Save_heading">
              <figure>
                {" "}
                <i class="fas fa-book-open"></i>
              </figure>
              <figcaption>
                <h3>Continue Reading</h3>
              </figcaption>
            </div>
            <div className="SaveBook_Grid">
              {continueReading?.map((ele, index) => (
                <div key={index} className="Grid-item">
                  <figure>
                    <img src={ele?.book_details?.image} alt="book" />
                  </figure>
                  <figcaption>
                    <h3>{ele?.book_details?.title}</h3>
                    {ele?.book_details?.book_authors?.map((e, index) => (
                      <strong key={index}>{e}</strong>
                    ))}
                    <button
                      onClick={() => readNow(ele)}
                      className="continue_btn"
                    >
                      Continue
                    </button>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
