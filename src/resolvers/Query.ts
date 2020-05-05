import axios from "axios";

const Query = {
  worldwideStats: async () => {
    const { data } = await axios.get("https://corona.lmao.ninja/v2/all");
    return data;
  },

  allCountriesStats: async (_: any, { query }: any) => {
    const { data } = await axios.get("https://corona.lmao.ninja/v2/countries");
    if (query) {
      const filteredData = data.filter((p: { country: string; }) =>
        p.country.toLowerCase().includes(query.toLowerCase())
      );
      return filteredData;
    }
    return data;
  },

  getSingleCountryStats: async (_: any, { country }: any) => {
    const { data } = await axios.get(
      `https://corona.lmao.ninja/v2/countries/${country.toLowerCase()}`
    );
    return data;
  },

  allContinentStats: async (_: any, { query }: any) => {
    const { data } = await axios.get("https://corona.lmao.ninja/v2/continents");
    if (query) {
      const filteredData = data.filter((p: { continent: string; }) =>
        p.continent.toLowerCase().includes(query.toLowerCase())
      );
      return filteredData;
    }
    return data;
  },

  getSingleContinent: async (_: any, { continent }: any) => {
      const { data } = await axios.get(
        `https://corona.lmao.ninja/v2/continents/${continent.toLowerCase()}`
      );
      return data;
  }
};

export default Query;
