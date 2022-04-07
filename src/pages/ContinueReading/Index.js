import React from "react";
import book from "../../assets/grid1.png";
import book2 from "../../assets/book3.png";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const ContinueReading = () => {
  return (
    <section className="Main_HomeWrapper SaveMain_Wrapper ContinueReading_Wrapper">
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
              <div className="Grid-item">
                <Link to="#">
                  <figure>
                    <img src={book} alt="book" />
                  </figure>
                  <figcaption>
                    <h3>The Psychology of Money</h3>
                    <strong>Morgan Housel</strong>
                    <button className="continue_btn">Continue</button>
                  </figcaption>
                </Link>
              </div>
              <div className="Grid-item">
                <Link to="#">
                  <figure>
                    <img src={book2} alt="book" />
                  </figure>
                  <figcaption>
                    <h3>The Psychology of Money</h3>
                    <strong>Morgan Housel</strong>
                    <button className="continue_btn">Continue</button>
                  </figcaption>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
