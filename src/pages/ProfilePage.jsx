import "../styles/profile.scss";
import { useState } from "react";
import infoService from "../services/infoService";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailRecieve, setEmailRecieve] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await infoService.updateUserInfo(email, name, emailRecieve);
      navigate("/");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="profileContainer">
        <div className="profile">
          <div className="profiles">
            <div className="profilebox">
              <h6>이름</h6>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="profilebox">
              <h6>이메일</h6>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="radiobox">
              <h6>이메일 수신 여부</h6>
              <input type="radio" name="recieve" value="yes" checked={emailRecieve} onChange={() => setEmailRecieve(true)} />
              <span>예</span>
              <input type="radio" name="recieve" value="no" checked={!emailRecieve} onChange={() => setEmailRecieve(false)} />
              <span>아니오</span>
            </div>
          </div>
          <p onClick={handleSubmit} className="submit">
            저장하기
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
