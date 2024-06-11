import axios from "axios";

export const getContests = async () => {
  try {
    const response = await axios.get("http://localhost:3000/contest/get");
    return response.data;
  } catch (error) {
    console.error("Error fetching contests:", error);
    throw error;
  }
};
