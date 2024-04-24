import ContestItem from "../components/ContestItem.jsx";
import Select from "../components/Select.jsx";

const MainPage = () => {
  return (
    <>
      <div className="container">
        <Select />
        <div className="item">
          <ContestItem />
          <ContestItem />
          <ContestItem />
          <ContestItem />
          <ContestItem />
          <ContestItem />
        </div>
      </div>
    </>
  );
};

export default MainPage;
