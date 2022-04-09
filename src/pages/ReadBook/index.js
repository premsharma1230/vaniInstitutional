import React, { useRef, useState, useEffect } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";
import ss from "./Around_the_World_in_28_Languages (2).epub";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import book1 from "../../assets/grid1.png";
import { PostContinueReading } from "../../api/api";

export default function ReadBook(props) {
  const [page, setPage] = useState("");
  const renditionRef = useRef(null);
  const tocRef = useRef(null);
  const { state } = useLocation();
  const readme = state?.readme;
  const book_slug = JSON.parse(sessionStorage.getItem("bookDetail")).slug;
  const token = JSON.parse(sessionStorage.getItem("studentLogin")).token;
  const locationChanged = epubcifi => {
    if (renditionRef.current && tocRef.current) {
      const { displayed, href } = renditionRef.current.location.start;
      const chapter = tocRef.current.find(item => item.href === href);
      setPage(`${displayed.page}`);
      PostContinueReading(book_slug, token, `${displayed.page}`).then(res => {
      });
    }
  };
  const ownStyles = {
    ...ReactReaderStyle,
    arrow: {
      ...ReactReaderStyle.arrow,
      color: "red",
      top: "unset",
      bottom: 0,
      padding: "0 12rem",
      fontSize: "30px",
      // transform: 'translate(10px, 6px)'
    },
  };

  // fontsize---->
  const [size, setSize] = useState(100);
  const changeSize = newSize => {
    setSize(newSize);
  };
  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.fontSize(`${size}%`);
    }
  }, [size]);
  //<------------fontsize--end--here-->

  console.log(renditionRef, "+++++++++++++++++++++++++++++++++++++");

  return (
    <>
      <div className="Main_HomeWrapper Ebook_Wrapper">
        <div className="Ebook_Heading">
          <div className="About_Book">
            <figure>
              {" "}
              <img src={book1} alt="book" />{" "}
            </figure>
            <div className="About-book-title">
              <h2>Heading</h2>
              <h5>By Author</h5>
            </div>
          </div>
        </div>
        <div className="Ebook_Content">
          <div className="ebook-reader-container Ebook-Content_Wrp">
            <ReactReader
              locationChanged={locationChanged}
              url={readme}
              epubInitOptions={{
                openAs: "epub",
              }}
              getRendition={rendition => (renditionRef.current = rendition)}
              tocChanged={toc => (tocRef.current = toc)}
              showToc={false}
              styles={ownStyles}
            />
          </div>
          <div
            className="PageCount"
            style={{
              bottom: "0.4rem",
              right: "1rem",
              left: "0rem",
              textAlign: "center",
              zIndex: 1,
              fontSize: "1.1em",
              color: "#020056",
              fontWeight: "bold",
              position: "relative",
            }}
          >
            <span
              className="Counter-page"
              style={{
                position: "absolute",
                top: "-1.2rem",
              }}
            >
              {page}
            </span>
          </div>
          {/* Font--size */}
          <div className="MagnifierFont_Btn">
            <button onClick={() => changeSize(Math.max(90, size - 10))}>
              <i class="fas fa-search-minus"></i>
            </button>
            <button onClick={() => changeSize(Math.min(230, size + 10))}>
              <i className="fas fa-search-plus"></i>
            </button>
          </div>
          {/* font-size */}
        </div>
        <Footer />
      </div>
    </>
  );
}
