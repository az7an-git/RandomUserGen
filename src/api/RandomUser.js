import axios from "axios";

export const RandomUser = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=1");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch random user", error);
  }
};
