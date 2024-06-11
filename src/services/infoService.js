import axios from "axios";

const API_URL = "http://localhost:3000";

const updateUserInfo = async (email, name, emailRecieve) => {
  try {
    await axios.post(
      `${API_URL}/user/edit`,
      {
        email,
        name,
        email_recieve: emailRecieve,
        field: "",
      },
      {
        withCredentials: true, // 쿠키 기반 인증 사용
      }
    );
    console.log("Profile updated successfully!");
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

const checkAuthStatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/status`, {
      withCredentials: true, // 쿠키 기반 인증 사용
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error("Error checking auth status:", error);
    return false;
  }
};

export default {
  updateUserInfo,
  checkAuthStatus,
};
