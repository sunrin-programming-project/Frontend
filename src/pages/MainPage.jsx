import ContestItem from "../components/ContestItem.jsx";
import { useEffect, useState } from "react";
import { getContests } from "../services/contestService";
import Header from "../components/Header.jsx";

const MainPage = () => {
  const [contests, setContests] = useState([]);
  const [filteredContests, setFilteredContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const data = await getContests();
        setContests(data);
        setFilteredContests(data);
      } catch (error) {
        console.error("Error fetching contests:", error);
      }
    };
    fetchContests();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredContests(contests);
    } else {
      const filtered = contests.filter((contest) => contest.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredContests(filtered);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="container">
        <div className="item">
          {filteredContests.map((contest, index) => (
            <ContestItem key={index} contest={contest} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
