import axios from "axios";

const baseRoute = "https://admin.vaniprakashan.in";
// Home Page Apis
const HomeBanner = () => {
  const slug = "/home_page/home_page_baner/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const AuthorList = () => {
  const slug = "/home_page/authors_list/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const TrendingAuthorAndBook = () => {
  const slug = "/home_page/book_and_author/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};

const LatestestBookList = () => {
  const slug = "/home_page/latest_picks/?page=1&page_size=2";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};

const GetHomePageLogos = () => {
  const slug = "/home_page/logos/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetCollegeLists = () => {
  const slug = "/auth/college_list/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};

const GetBookList = (data, token, categoryRes) => {
  const body = data;
  let slug;
  if (categoryRes != -1 && categoryRes != undefined) {
    slug = `/institude_home_page/inst_home_list/${body}/?category=${categoryRes}`;
  } else {
    slug = `/institude_home_page/inst_home_list/${body}/`;
  }
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetBookListSearch = (data, college_slug, token) => {
  const slug = `/institude_home_page/inst_search_result/${college_slug}/?search_word=${data}`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetBookListCategory = (college_slug, token) => {
  const slug = `/institude_home_page/inst_home_filter_values/${college_slug}`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetBookListDetails = (college_slug, token, book_slug) => {
  const slug = `/institude_home_page/inst_book_details/${college_slug}/${book_slug}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetReletedBooksListDetails = (college_slug, token, book_slug) => {
  const slug = `/institude_home_page/releted_books/${college_slug}/${book_slug}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};

const studentLogin = data => {
  const body = {
    user: {
      "college": data?.slug,
      "email": data.username,
      "password": data.password,
    },
  };
  const slug = "/auth/college_student_login/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
    }).then(res => {
      return res.data;
    }) .catch(function (error) {
      if (error.response) {
        return error.response;
      } 
      else if (error.request) {
        return error.request;
      } else {
        return error.message;
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};

const GetSaveBookList = (college_slug, token) => {
  const slug = `/institude_home_page/inst_user_save_book_list/${college_slug}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const AddSaveBookList = (college_slug, token, book_slug) => {
  const slug = `/institude_home_page/inst_user_save_book_list/${college_slug}/${book_slug}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const AddSaveBook = (token, book_slug) => {
  const slug = `/institude_home_page/add_or_remove_from_save_list/${book_slug}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "post",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetContinueReading = (college_slug, token) => {
  const slug = `/institude_home_page/continue_reading_book_list/${college_slug}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const PostContinueReading = (book_slug, token, pageNo,location) => {
  const slug = `/institude_home_page/set_or_get_page_no/${book_slug}/`;
  const url = `${baseRoute}${slug}`;
  const body = {
    pages: Number(pageNo),
    location: location
  };
  try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const ContinueCurrentReading = (book_slug, token) => {
  const slug = `/institude_home_page/set_or_get_page_no/${book_slug}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};

export {
  HomeBanner,
  AuthorList,
  TrendingAuthorAndBook,
  LatestestBookList,
  GetHomePageLogos,
  GetCollegeLists,
  studentLogin,
  GetBookList,
  GetBookListSearch,
  GetBookListCategory,
  GetBookListDetails,
  GetSaveBookList,
  AddSaveBookList,
  GetContinueReading,
  PostContinueReading,
  GetReletedBooksListDetails,
  ContinueCurrentReading,
  AddSaveBook
};
