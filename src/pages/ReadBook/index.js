import React, { useRef, useState } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";
import ss from "./Around_the_World_in_28_Languages (2).epub";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export default function ReadBook() {
  const [page, setPage] = useState("");
  const renditionRef = useRef(null);
  const tocRef = useRef(null);
  const { state } = useLocation();
  const readme = state?.readme;
  const locationChanged = epubcifi => {
    if (renditionRef.current && tocRef.current) {
      const { displayed, href } = renditionRef.current.location.start;
      const chapter = tocRef.current.find(item => item.href === href);
      setPage(`${displayed.page}`);
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
  return (
    <>
      {/* <div className="About-book-title">
        <h2 style={{}}>{'The Psychology of Money'}</h2>
        <h5>{"By Morgan Housel"}</h5>
      </div> */}
      <div className="Main_HomeWrapper Ebook_Wrapper">
        <div className="Ebook_Content">
          <div
            style={{
              height: "70vh",
              width: "38vw",
              margin: "auto",
              marginTop: "8rem",
              boxShadow: "0px 0px 27px rgb(0 0 0 / 25%)",
            }}
            className="ebook-reader-container"
          >
            <ReactReader
              locationChanged={locationChanged}
              url={readme}
              epubInitOptions={{
                openAs: "epub",
              }}
              // epubOptions={{
              //   flow: "scrolled",
              //   manager: "continuous"
              // }}
              getRendition={rendition => (renditionRef.current = rendition)}
              tocChanged={toc => (tocRef.current = toc)}
              showToc={false}
              styles={ownStyles}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "7.1rem",
              right: "1rem",
              left: "1rem",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {page}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
