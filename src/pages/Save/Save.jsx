import React, { useEffect, useState } from "react";
import book from "../../assets/grid1.png";
import { Link, useLocation } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { GetSaveBookList } from "../../api/api";

export const Save = () => {
  const [bookSaveList, setbookSaveList] = useState();
  const { state } = useLocation();
  const college_slug = JSON.parse(
    sessionStorage.getItem("studentLogin")
  ).college_slug;
  const token = JSON.parse(sessionStorage.getItem("studentLogin")).token;
  useEffect(() => {
    GetSaveBookList(college_slug, token).then(res => {
      setbookSaveList(res?.results);
      // console.log(
      //   res,
      //   "datadatadatadatadatadatadatadatadata+++++++++++++++++++++++++++++++++++++++++++++"
      // );
    });
  }, []);

  console.log(bookSaveList, "bookSaveList+++++++++++++");

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
              {bookSaveList?.map((ele, index) => (
                <div key={index} className="Grid-item">
                  <Link to="">
                    <figure>
                      <img src={ele?.book_details?.image} alt="book" />
                    </figure>
                    <figcaption>
                      <h3>{ele?.book_details?.title}</h3>
                      {ele?.book_details?.book_authors.map((item, index) => (
                        <strong key={index}>
                          {index ? "," : null}
                          {item}
                        </strong>
                      ))}
                    </figcaption>
                  </Link>
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
