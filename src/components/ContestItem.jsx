import "../styles/contest.scss";

const ContestItem = ({ contest }) => {
  return (
    <div className="box">
      <div className="left">
        <p>
          <a href={contest.url} target="_blank">
            {contest.title}
          </a>
        </p>
        <div className="details">
          <div className="detail">
            <h6>주최</h6>
            <p>{contest.host}</p>
          </div>
          <div className="detail">
            <h6>대상</h6>
            <p>{contest.target}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="receipt">
          <h6>접수</h6>
          <p>{contest.register}</p>
        </div>
        <div className="dday">
          <h6>{contest.dday}</h6>
          <p>{contest.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ContestItem;
