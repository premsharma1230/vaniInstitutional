import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import book from "../../assets/grid1.png";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Profile from "../../components/appNavigation/Profile";
import { AddSaveBook, GetBookListDetails, GetReletedBooksListDetails } from "../../api/api";
import Carousel from 'react-material-ui-carousel';

export const Description = () => {
  let navigate = useNavigate();
  const [bookDetails, setBookDetails] = useState({});
  const [bookList, setBooklist] = useState([]);
  const college_slug = JSON.parse(sessionStorage.getItem("studentLogin")).college_slug;
  const book_slug = JSON.parse(sessionStorage.getItem("bookDetail")).slug;
  const book_Id = JSON.parse(sessionStorage.getItem("bookDetail")).id;
  const token = JSON.parse(sessionStorage.getItem("studentLogin")).token;
  useEffect(() => {
    GetBookListDetails(college_slug, token, book_slug).then(res => {
      setBookDetails(res.data);
    });
    GetReletedBooksListDetails(college_slug, token, book_slug).then(resp => {
      const booklist = resp?.results?.filter(e => e.id != book_Id);
      setBooklist(booklist)
    });
  }, [])
  function readNow(e) {
    sessionStorage.setItem("readme", JSON.stringify(e))
    navigate("/readbook");
  }
  function saveBook(e) {
   
    AddSaveBook(token, e?.slug).then(ele => {
      navigate("/Save");
    })
    // 
  }
  function openReletedBooksList(e) {
    GetBookListDetails(college_slug, token, e?.slug).then(res => {
      setBookDetails(res.data);
    });
    GetReletedBooksListDetails(college_slug, token, e?.slug).then(resp => {
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
                <h5 style={{display:"flex"}}>By &nbsp; {bookDetails?.book_details?.book_authors.map((author, index) =>
                  <p >
                    {index ? "," : " "} {author}
                  </p>
                )}
                </h5>
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
                    {bookDetails?.book_details?.book_genres.map((genre,index) =>
                    <strong key={index}>{genre}</strong>
                    )}
                  </li>
                </ul>
                <div className="description-Group-btn">
                  <div className="description_content">
                    <button
                      onClick={() => readNow(bookDetails)}
                      className="read_btn"
                    >
                      <Link to="#">
                        <i class="fas fa-book-open"></i>
                        <span>READ NOW</span>
                     </Link>
                    </button>
                    <button
                     onClick={() => saveBook(bookDetails)}
                     className="Save_btn">
                      <Link to="#">
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
            <Carousel className="Grid-item" >
              {bookList?.length > 0 &&
                bookList?.map((ele, index) => (
                  <div key={index} onClick={() => openReletedBooksList(ele)} >
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
                ))}
            </Carousel>
          </div>
        </div>
        {/* end-here--Other-Books */}
      </div>
      <Footer />
    </section>
  );
};
