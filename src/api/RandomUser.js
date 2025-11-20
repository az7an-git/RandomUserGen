import axios from "axios";

export const RandomUser = async () => {
  const response = await axios.get("https://randomuser.me/api/");
  return response.data;
};
