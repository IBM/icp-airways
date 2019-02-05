const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/posts/1";
const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getData(url);