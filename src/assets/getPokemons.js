import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const { VUE_BASE_URL } = process.env;

export const getPokemon = async () => {
  const response = await axios.get(`${VUE_BASE_URL}:3000/api/pokemon`);
  return response;
};
