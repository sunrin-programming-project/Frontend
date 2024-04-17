import "../styles/contest.scss";

const ContestItem = () => {
  return (
    <>
      <div className="box">
        <div className="left">
          <div className="fields">
            <div className="field">
              <p>IT•소프트웨어•게임</p>
              <p>과학•공학•기술</p>
            </div>
          </div>
          <p>2024 ACC 크리에이터 레지던시 국제공모</p>
          <div className="details">
            <div className="detail">
              <h6>주최</h6>
              <p>국립아시아문화전당</p>
            </div>
            <div className="detail">
              <h6>대상</h6>
              <p>일반인, 기타</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="receipt">
            <h6>접수</h6>
            <p>04.01 ~ 04.30</p>
          </div>
          <div className="dday">
            <h6>D-20</h6>
            <p>접수중</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestItem;
