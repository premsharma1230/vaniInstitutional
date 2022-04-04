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

const GetBookList = (data, token) => {
  const body = data;
  const slug = "/institude_home_page/inst_home_list/" + body + "/";
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
const GetBookListSearch = (data, token) => {
  const body = {
    search_word: data,
  };
  const slug =
    "/institude_home_page/inst_search_result/xyz-university/" + body + "/";
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
      college: data?.slug?.slug,
      email: data.username,
      password: data.password,
    },
  };

  const slug = "/auth/college_student_login/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
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
};
