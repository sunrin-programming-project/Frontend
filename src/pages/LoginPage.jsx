import "../styles/login.scss";
import Header from "../components/Header";

const LoginPage = () => {
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
              <a href="http://localhost:3000/auth/google">구글 계정으로 로그인</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
