import React from "react";
import { Footer } from "../Footer/Footer";
import book from "../../assets/grid1.png";
import { useLocation, Link } from "react-router-dom";

export const Description = () => {
  return (
    <section className="Main_HomeWrapper Description_wrapper">
      <div className="container">
        <div className="Description_Content">
          <div className="Description_Left">
            <figure>
              <img src={book} alt="book" />
            </figure>
          </div>
          <div className="Description_Right">
            <div className="About_Book">
              <div className="About-book-title">
                <h2>The Psychology of Money</h2>
                <h5>By Morgan Housel</h5>
              </div>
              <figcaption>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  proin orci sit non. Sit et habitasse sagittis proin
                  pellentesque aliquam in. Lectus tellus morbi adipiscing ornare
                  cursus pellentesque nisi, tortor eget. Vel id non massa quis
                  amet nibh libero. Volutpat malesuada feugiat lorem iaculis.
                  Ante sit orci neque pharetra. Nec purus, urna cras ac congue
                  feugiat. Tincidunt vivamus amet, enim sed risus. Urna enim,
                  sed congue justo enim purus. Volutpat ultricies mattis
                  volutpat sed aliquam euismod vel. Maecenas morbi id urna
                  facilisis scelerisque in sollicitudin viverra velit. Dignissim
                  praesent non, mi elementum nibh. Vitae, donec lorem quis nisl,
                  pellentesque ipsum elementum consectetur. Dignissim diam
                  commodo neque adipiscing tortor sed. In ut elit, platea non.
                  Donec facilisis tincidunt elementum sed aliquet placerat elit.
                  Tellus enim, tristique pulvinar fames fermentum at. Tristique
                  vestibulum scelerisque praesent aliquam. Nisl, dignissim
                  adipiscing non eget dui. Vel eget et a quam malesuada. Dui mi
                  vel viverra quis nisl, vel cras. Vulputate enim aliquam elit,
                  pellentesque enim, vitae lectus tellus. Id varius sit elit
                  nulla.
                </p>
              </figcaption>
              <div className="About-book-detail">
                <ul className="book-list-left">
                  <li>
                    <span>ISBN :</span>
                    <strong>12345678914</strong>
                  </li>
                  <li>
                    <span>Pages : </span>
                    <strong>200</strong>
                  </li>
                  <li>
                    <span>Publication Date : </span>
                    <strong>21 October, 2021</strong>
                  </li>
                  <li>
                    <span>Language :</span>
                    <strong>English</strong>
                  </li>
                  <li>
                    <span>Genre :</span>
                    <strong>Nationalism, Freedom</strong>
                  </li>
                </ul>
                <div className="description-Group-btn">
                  <div className="description_content">
                    <button className="read_btn">
                      <Link to="/ContinueReading">
                        <i class="fas fa-book-open"></i>
                        <span>READ NOW</span>
                      </Link>
                    </button>
                    <button className="Save_btn">
                      <Link to="/Save">
                        <i class="fas fa-bookmark"></i>
                        <span>save</span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Other-Books */}
        <div className="Otherbook_Wrapper">
          <div className="Otherbook-Heading">
            <h2>Other Books</h2>
          </div>
          <div className="Grid_Carousel_wrp">
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
        {/* end-here--Other-Books */}
      </div>
      <Footer />
    </section>
  );
};
