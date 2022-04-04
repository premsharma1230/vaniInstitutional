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
import { useLocation } from "react-router-dom";
import { GetBookList } from "../../../api/api";

export const MainHome = () => {
  const { state } = useLocation();
  const slug = state?.UserLogin?.data?.college_slug;
  const token = state?.UserLogin?.data?.token;
  const [page, setPage] = useState();
  const [bookList, setBookList] = useState([]);
  console.log(slug, "slug +++++++");

  useEffect(() => {
    GetBookList(slug, token).then(res => {
      console.log(res, "res+++++++++++++");
      setBookList(res?.results);
    });
  }, []);

  console.log(bookList, "+++++++++++");

  const top100Films = [{ title: "The Psychology of Money" }];

  const options = top100Films.map(option => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  // paginations ---
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  // ---pagination---->

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
                  <input type="text" placeholder="type here to search" />
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
                options={options.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                )}
                groupBy={option => option.firstLetter}
                getOptionLabel={option => option.title}
                sx={{ width: 300 }}
                renderInput={params => (
                  <TextField {...params} label="select any categories" />
                )}
              />
            </div>
            <div className="Category_Grid_Wrp">
              <div className="category_Grid_Content">
                {bookList?.map((ele, index) => (
                  <div className="Grid-item" key={index}>
                    <figure>
                      <img src={ele?.image} alt="book" />
                    </figure>
                    <figcaption>
                      <h3>{ele?.title_and_author?.title}</h3>
                      <strong>{ele?.title_and_author?.authors[0]}</strong>
                    </figcaption>
                  </div>
                ))}
              </div>
              <div className="Pagination_wrp">
                <Stack spacing={2}>
                  {/* onChange={handleChange}  */}
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
