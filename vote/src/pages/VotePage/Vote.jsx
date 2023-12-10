import React, { useEffect, useState } from "react";
import { useUserData } from "../../context/UserDataContext";
import Nav from "../../components/Nav/Nav.jsx";
import "../VotePage/Vote.css";
import Card from "../../components/Card/Card.jsx";
import items from "../../components/cradData.js";

const Vote = () => {
  const { userData, fetchUserData, logOut, voteData, adminData } =
    useUserData();
  const [confirmVote, setConfirmVote] = useState("");
  const [changVote, setChangeVote] = useState(false);
  console.log(userData.isAdmin);
  console.log(userData + "admin page no data");
  useEffect(() => {
    console.log(adminData + "/llll");
  }, [adminData]);
  return (
    <main className="vote-page page">
      <div className="head">
        <h2>Vote Panel</h2>
      </div>
      <div className="voting-container">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            votes={voteData[item.title] || 0}
            image={item.image}
            confirmVote={confirmVote}
            setConfirmVote={setConfirmVote}
            changVote={changVote}
            setChangeVote={setChangeVote}
          />
        ))}
      </div>
    </main>
  );
};

export default Vote;
