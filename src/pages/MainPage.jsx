import ContestItem from "../components/ContestItem.jsx";

const MainPage = () => {
  return (
    <>
      <div className="container">
        {/* <div className="select">
          <h6>분야</h6>
        </div> */}
        <div className="item">
          <ContestItem />
          <ContestItem />
          <ContestItem />
        </div>
      </div>
    </>
  );
};

export default MainPage;
