import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: `https://api-test.innoloft.com`,
  });
};
