import axios from "axios";

const API = "http://localhost:5000/api/flights";

export const getSuggestions = async (query) => {

  const res = await axios.get(`${API}/suggest`, {
    params: { query }
  });

  return res.data;

};


export const searchFlights = async (params) => {

  const res = await axios.get(`${API}/search`, {
    params
  });

  return res.data;

};