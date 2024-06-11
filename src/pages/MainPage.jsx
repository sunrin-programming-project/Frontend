import ContestItem from "../components/ContestItem.jsx";
import { useEffect, useState } from "react";
import { getContests } from "../services/contestService";

const MainPage = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const data = await getContests();
        setContests(data);
      } catch (error) {
        console.error("Error fetching contests:", error);
      }
    };
    fetchContests();
  }, []);

  return (
    <>
      <div className="container">
        <div className="item">
          {contests.map((contest, index) => (
            <ContestItem key={index} contest={contest} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
