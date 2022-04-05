import React from "react";
import book from "../../assets/grid1.png";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const Save = () => {
  return (
    <section className="Main_HomeWrapper SaveMain_Wrapper">
      <div className="Save_Content_wrp">
        <div className=" container">
          <div className="Save_Content">
            <div className="Save_heading">
              <figure>
                {" "}
                <i class="fas fa-bookmark"></i>
              </figure>
              <figcaption>
                <h3>Saved Books</h3>
              </figcaption>
            </div>
            <div className="SaveBook_Grid">
              <div className="Grid-item">
                <Link to="/Description">
                  <figure>
                    <img src={book} alt="book" />
                  </figure>
                  <figcaption>
                    <h3>The Psychology of Money</h3>
                    <strong>Morgan Housel</strong>
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
