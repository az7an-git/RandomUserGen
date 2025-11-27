import axios from "axios";

export const RandomUser = async (count = 9) => {
  try {
    const response = await axios.get(
      `https://randomuser.me/api/?results=${count}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch users");
  }
};
