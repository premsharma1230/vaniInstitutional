import React, { useEffect, useState } from "react";
import book from "../../assets/grid1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { GetSaveBookList } from "../../api/api";
import Profile from "../../components/appNavigation/Profile";

export const Save = () => {
  const [bookSaveList, setbookSaveList] = useState();
  const { state } = useLocation();
  let navigate = useNavigate();
  const studentLogin = JSON.parse(localStorage.getItem("studentLogin"))
  useEffect(() => {
    if(studentLogin?.token){
    GetSaveBookList(studentLogin?.college_slug, studentLogin?.token).then(res => {
      setbookSaveList(res?.results);
    });
  }else{
    sessionStorage.setItem("navigationStore", JSON.stringify(true))
    navigate("/");
  }
  }, []);
  const handleDescription = (bookDetail) => {
    sessionStorage.setItem("bookDetail", JSON.stringify(bookDetail))
    navigate("/Description");
  }
  return (
    <section className="Main_HomeWrapper SaveMain_Wrapper">
      <div className="Profile" style={{ display: 'flex', justifyContent: 'right' }}>
        <Profile />
      </div>
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
                <div key={index} onClick={() => handleDescription(ele)} className="Grid-item">

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
