import React, { useRef, useState, useEffect } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";
import ss from "./Around_the_World_in_28_Languages (2).epub";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import book1 from "../../assets/grid1.png";
import { PostContinueReading } from "../../api/api";
import Profile from "../../components/appNavigation/Profile";

export default function ReadBook(props) {
  const [page, setPage] = useState("");
  const renditionRef = useRef(null);
  const tocRef = useRef(null);
  let navigate = useNavigate();
  const { state } = useLocation();
  const studentLogin = JSON.parse(localStorage.getItem("studentLogin"));
  const readme = JSON.parse(localStorage.getItem("readme"));
  const [selections, setSelections] = useState([]);


  useEffect(() => {
    if (!studentLogin?.token) {
      sessionStorage.setItem("navigationStore", JSON.stringify(false))
      navigate("/");
    }
  }, []);
  const locationChanged = epubcifi => {
    if (renditionRef.current && tocRef.current) {
      const { displayed, href } = renditionRef.current.location.start;
      const chapter = tocRef.current.find(item => item.href === href);
      setPage(`${displayed.page}`);
      PostContinueReading(
        readme?.slug,
        studentLogin?.token,
        `${displayed.page}`,
        epubcifi
      ).then(res => {});
    }
  };
  const ownStyles = {
    ...ReactReaderStyle,
    arrow: {
      ...ReactReaderStyle.arrow,
      color: "red",
      top: "unset",
      bottom: 0,
      // padding: "0 12rem",
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

  // <<<<<<<----------Select----Line---start--here----->>>>>>>>>>
  useEffect(() => {
    if (renditionRef.current) {
      function setRenderSelection(cfiRange, contents) {
        setSelections(
          selections.concat({
            text: renditionRef.current.getRange(cfiRange).toString(),
            cfiRange,
          })
        );
        renditionRef.current.annotations.add(
          "highlight",
          cfiRange,
          {},
          null,
          "hl",
          {
            fill: "#0298bf",
            "fill-opacity": "0.5",
            "mix-blend-mode": "multiply",
          }
        );
        contents.window.getSelection().removeAllRanges();
      }
      renditionRef.current.on("selected", setRenderSelection);
      return () => {
        renditionRef.current.off("selected", setRenderSelection);
      };
    }
  }, [setSelections, selections]);

  // <<<<<<<----------Select----Line---start--here----->>>>>>>>>>

  return (
    <>
      <div className="Main_HomeWrapper Ebook_Wrapper">
        <div
          className="Profile"
          style={{ display: "flex", justifyContent: "right" }}
        >
          <Profile />
        </div>
        <div className="Ebook_Heading">
          <div className="About_Book">
            <figure>
              {" "}
              <img src={readme?.book_details?.image} alt="book" />{" "}
            </figure>
            <div className="About-book-title">
              <h2>{readme?.book_details?.title}</h2>
              <h5 style={{ display: "flex" }}>
                By &nbsp;{" "}
                {readme?.book_details?.book_authors.map((author, index) => (
                  <p>
                    {index ? "," : " "} {author}
                  </p>
                ))}
              </h5>
            </div>
          </div>
        </div>
        <div className="Ebook_Content">
          <div className="ebook-reader-container Ebook-Content_Wrp">
            <ReactReader
              locationChanged={locationChanged}
              url={readme?.original_ebook}
              epubInitOptions={{
                openAs: "epub",
              }}
              getRendition={rendition => {
                renditionRef.current = rendition;
                renditionRef.current.themes.default({
                  "::selection": {
                    background: "yellow",
                  },
                });
                setSelections([]);
              }}
              tocChanged={toc => (tocRef.current = toc)}
              showToc={false}
              styles={ownStyles}
              className="Epub_Wrapper"
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
            <button
              onClick={() => changeSize(Math.max(90, size - 10))}
              className="zoom_button"
            >
              <i class="fas fa-search-minus"></i>
            </button>
            <button
              onClick={() => changeSize(Math.min(230, size + 10))}
              className="zoom_button"
            >
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
