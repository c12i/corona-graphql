import axios from "axios";

const Query = {
  worldwideStats: async () => {
    const { data } = await axios.get("https://corona.lmao.ninja/v2/all");
    return data;
  },

  allCountriesStats: async (root, { query }) => {
    const { data } = await axios.get("https://corona.lmao.ninja/v2/countries");
    if (query) {
      const filteredData = data.filter((p) =>
        p.country.toLowerCase().includes(query.toLowerCase())
      );
      return filteredData;
    }
    return data;
  },
};

export default Query;
