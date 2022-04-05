import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import book from "../../assets/grid1.png";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { GetBookListDetails } from "../../api/api";

export const Description = () => {
  const { state } = useLocation();
  let navigate = useNavigate();
  const [bookDetails, setBookDetails] = useState();
  const [booklist, setBooklist] = useState([]);
  const college_slug = state?.college_slug
  const book_slug = state?.bookDetail?.slug
  const booklistId = state?.bookDetail?.id
  const token = state?.token;
  const bookList = state?.allBookList
  useEffect(() => {
    GetBookListDetails(college_slug, token, book_slug).then(res => {
      setBookDetails(res.data);
    });
    const data = bookList?.filter((ele) => ele.id != booklistId)
    console.log(data,"+++++++++++++++++++++++++++++++++++++++++++++")
    setBooklist(data)
  }, [])
  const readNow = (e) => {
    navigate("/readbook", {
      state: { readme: e }
    });
  }
  return (
    <section className="Main_HomeWrapper Description_wrapper">
      <div className="container">
        <div className="Description_Content">
          <div className="Description_Left">
            <figure>
              <img src={bookDetails?.book_details?.image} alt="book" style={{width:'18rem', height:'24rem'}} />
            </figure>
          </div>
          <div className="Description_Right">
            <div className="About_Book">
              <div className="About-book-title">
                <h2>{bookDetails?.book_details?.title}</h2>
                <h5>By {bookDetails?.book_details?.book_authors}</h5>
              </div>
              <figcaption>
                <p>
                  {bookDetails?.book_details?.description}
                </p>
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
                    <strong>{bookDetails?.book_details?.publications_year}</strong>
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
                    <button onClick={() =>readNow(bookDetails?.original_ebook)} className="read_btn">
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
          {booklist.length > 0  && booklist?.map((ele) =>
          <div className="Grid_Carousel_wrp">
            <div className="Grid-item">
              <Link to="/Description">
                <figure>
                  <img src={ele.image} alt="book" />
                </figure>
                <figcaption>
                  <h3>{ele.title_and_author.title}</h3>
                  <strong>{ele.title_and_author.authors}</strong>
                </figcaption>
              </Link>
            </div>
          </div>
          )}
        </div>
        {/* end-here--Other-Books */}
      </div>
      <Footer />
    </section>
  );
};
