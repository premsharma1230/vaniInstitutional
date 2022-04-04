import React, { useState } from "react";
import { Banner } from "./Banner";
import search from "../../../assets/search.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import grid from "../../../assets/grid1.png";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const MainHome = () => {
  // const classes = useStyles();
  const [page, setPage] = useState();

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
    <div>
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
                {[...Array(12).keys()].map(index => (
                  <div className="Grid-item" key={index}>
                    <figure>
                      <img src={grid} alt="book" />
                    </figure>
                    <figcaption>
                      <h3>The Psychology of Money</h3>
                      <strong>Morgan housel</strong>
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
        </div>
      </div>
    </div>
  );
};
