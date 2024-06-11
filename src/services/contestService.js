import axios from "axios";

export const getContests = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/contest/get`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contests:", error);
    throw error;
  }
};
