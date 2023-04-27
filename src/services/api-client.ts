import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ef06a685167c46a2b993917e8186a31d",
  },
});
