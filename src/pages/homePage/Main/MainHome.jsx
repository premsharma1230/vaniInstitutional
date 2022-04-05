import React, { useState, useEffect } from "react";
import { Banner } from "./Banner";
import { Footer } from "../../Footer/Footer";
import search from "../../../assets/search.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import grid from "../../../assets/grid1.png";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { GetBookList, GetBookListCategory, GetBookListSearch } from "../../../api/api";

export const MainHome = () => {
  const { state } = useLocation();
  let navigate = useNavigate();
  const slug = state?.UserLogin?.data?.college_slug;
  const token = state?.UserLogin?.data?.token;
  const [page, setPage] = useState();
  const [bookList, setBookList] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const categoryRes = -1
    GetBookList(slug, token,categoryRes).then(res => {
      setBookList(res?.results);
    });
    GetBookListCategory(slug, token).then(res => {
      setCategory(res);
    });
  }, []);

  // const top100Films = [{ title: "The Psychology of Money" }];

  // const options = top100Films.map(option => {
  //   const firstLetter = option.title[0].toUpperCase();
  //   return {
  //     firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
  //     ...option,
  //   };
  // });

  // paginations ---
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  // ---pagination---->
  const searchData = (e) => {
    const body = e.target.value
    GetBookListSearch(body, slug, token).then(res => {
      setBookList(res?.results);
    });
  }
  const goToBookDetailsPage = (e) => {
    navigate("/Description", {
      state: { bookDetail: e, college_slug: slug, token: token },
    });
  }
  const categoryItem = (e,value) => {
    const categoryRes = value?.genres
    GetBookList(slug, token,categoryRes).then(res => {
      setBookList(res?.results);
    });
  }

  return (
    <>
      <div className="Main_HomeWrapper">
        <Banner />
        <div className="container">
          <div className="Search_Wrapper">
            <div className="Search_Item_Wrp">
              <div className="Search-child_wrap">
                <img src={search} />
                <div className="search_content">
                  <input type="text" onChange={searchData} placeholder="type here to search" />
                  <button>Search</button>
                </div>
              </div>
              <div className="rect_Wrp"></div>
            </div>
          </div>
          {/* category--search */}
          <div className="Category_Wrapper">
            <div className="CategorySearch_wrp">
              <Autocomplete
                id="category"
                options={category}
                onChange={categoryItem}
                // groupBy={option => option.genres__value}
                getOptionLabel={option => option.genres__value}
                sx={{ width: 300 }}
                renderInput={params => (
                  <TextField {...params} label="select any categories" />
                )}
              />
            </div>
            <div className="Category_Grid_Wrp">
              <div className="category_Grid_Content">
                {bookList?.map((ele, index) => (
                  <div onClick={() => goToBookDetailsPage(ele)} className="Grid-item" key={index}>
                    <div>
                      <figure>
                        <img src={ele?.image} alt="book" />
                      </figure>
                      <figcaption>
                        <h3>{ele?.title_and_author?.title}</h3>
                        <strong>{ele?.title_and_author?.authors[0]}</strong>
                      </figcaption>
                    </div>
                  </div>
                ))}
              </div>
              <div className="Pagination_wrp">
                <Stack
                  // onChange={handleChange}  
                  spacing={2}>
                  <Pagination count={10} page={page} />
                </Stack>
              </div>
            </div>
          </div>
          {/* category--search--end--here */}
        </div>{" "}
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
