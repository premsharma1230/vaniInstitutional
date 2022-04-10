import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import book from "../../assets/grid1.png";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Profile from "../../components/appNavigation/Profile";
import { GetBookListDetails, GetReletedBooksListDetails } from "../../api/api";

export const Description = () => {
  let navigate = useNavigate();
  const [bookDetails, setBookDetails] = useState({});
  const [bookList, setBooklist] = useState([]);
  const college_slug = JSON.parse(sessionStorage.getItem("studentLogin")).college_slug;
  const book_slug = JSON.parse(sessionStorage.getItem("bookDetail")).slug;
  const token = JSON.parse(sessionStorage.getItem("studentLogin")).token;
  useEffect(() => {
    GetBookListDetails(college_slug, token, book_slug).then(res => {
      setBookDetails(res.data);
    });
    GetReletedBooksListDetails(college_slug, token, book_slug).then(resp => {
      setBooklist(resp?.results)
    });
  }, [])
  function readNow(e) {
    sessionStorage.setItem("readme", JSON.stringify(e))
    navigate("/readbook");
  }
  function openReletedBooksList(e) {
    GetBookListDetails(college_slug, token, e?.slug).then(res => {
      setBookDetails(res.data);
    });
    GetReletedBooksListDetails(college_slug, token,  e?.slug).then(resp => {
      setBooklist(resp?.results)
    });
  }
  return (
    <section className="Main_HomeWrapper Description_wrapper">
      <div className="Profile" style={{ display: 'flex', justifyContent: 'right' }}>
        <Profile />
      </div>
      <div className="container">
        <div className="Description_Content">
          <div className="Description_Left">
            <figure>
              <img
                src={bookDetails?.book_details?.image}
                alt="book"
                style={{ width: "18rem", height: "24rem" }}
              />
            </figure>
          </div>
          <div className="Description_Right">
            <div className="About_Book">
              <div className="About-book-title">
                <h2>{bookDetails?.book_details?.title}</h2>
                <h5>By {bookDetails?.book_details?.book_authors}</h5>
              </div>
              <figcaption>
                <p>{bookDetails?.book_details?.description}</p>
              </figcaption>
              <div className="About-book-detail">
                <ul className="book-list-left">
                  <li>
                    <span>ISBN :</span>
                    <strong>{bookDetails?.book_details?.isbn_code}</strong>
                  </li>
                  <li>
                    <span>Pages : </span>
                    <strong>{bookDetails?.pages}</strong>
                  </li>
                  <li>
                    <span>Publication Date : </span>
                    <strong>
                      {bookDetails?.book_details?.publications_year}
                    </strong>
                  </li>
                  <li>
                    <span>Language :</span>
                    <strong>{bookDetails?.languages?.key}</strong>
                  </li>
                  <li>
                    <span>Genre :</span>
                    <strong>{bookDetails?.book_details?.book_genres}</strong>
                  </li>
                </ul>
                <div className="description-Group-btn">
                  <div className="description_content">
                    <button
                      onClick={() => readNow(bookDetails?.original_ebook)}
                      className="read_btn"
                    >
                      <Link to="#">
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
            {bookList?.length > 0 &&
              bookList?.map((ele, index) => (
                <div key={index} onClick={() => openReletedBooksList(ele)} className="Grid-item">
                  <figure>
                    <img src={ele?.image} alt="book" />
                  </figure>
                  <figcaption>
                    <h3>{ele?.title_and_author?.title}</h3>
                    {ele?.title_and_author?.authors?.map((e, index) =>
                      <strong key={index}>{e}</strong>
                    )}
                  </figcaption>
                </div>
              ))}{" "}
          </div>
        </div>
        {/* end-here--Other-Books */}
      </div>
      <Footer />
    </section>
  );
};
