import "../styles/login.scss";
import Header from "../components/Header";

const LoginPage = () => {
  const Login = () => {
    window.location.href = `${import.meta.env.VITE_APP_BACKEND_URL}/auth/google`;
  };
  return (
    <>
      <Header />
      <div className="loginContainer">
        <div className="login">
          <h2>
            각종 대회에 관한 정보를
            <br />
            메일을 통해 정기적으로 받아보세요
          </h2>
          <div className="google">
            <img src="src\assets\google.svg" alt="googleIcon" />
            <span>
              <p onClick={Login}>구글 계정으로 로그인</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
