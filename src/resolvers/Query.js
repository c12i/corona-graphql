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

  getSingleCountryCases: async (root, { country }) => {
    const { data } = await axios.get(
      `https://corona.lmao.ninja/v2/countries/${country.toLowerCase()}`
    );
    return data;
  },

  allContinentStats: async (root, { query }) => {
    const { data } = await axios.get("https://corona.lmao.ninja/v2/continents");
    if (query) {
      const filteredData = data.filter((p) =>
        p.continent.toLowerCase().includes(query.toLowerCase())
      );
      return filteredData;
    }
    return data;
  },

  getSingleContinent: async (root, { continent }) => {
      const { data } = await axios.get(
        `https://corona.lmao.ninja/v2/continents/${continent.toLowerCase()}`
      );
      return data;
  }
};

export default Query;
