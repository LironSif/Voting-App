import React, { useState } from "react";
import "./Card.css";
import { useUserData } from "../../context/UserDataContext";

const Card = ({
  title,
  image,
  votes,
  confirmVote,
  setConfirmVote,
  changVote,
  setChangeVote,
}) => {
  const { userData, updateVote } = useUserData();

  const HandleClick = () => {
    console.log(userData)
    console.log(changVote)
    console.log("HandleClick runnig")

    if (userData.Voted && changVote) {
      console.log(userData.Voted)
      console.log(changVote)

      setConfirmVote(title);

    } else if (userData.Voted) {
      console.log(userData.Voted)

      setChangeVote(true);

    }
    console.log("none")
  };

  const HandleCancel = () => {
    setConfirmVote("")
    setChangeVote(false)

  };

  const handleUpdate =()=>{
    updateVote(title,userData)
    setConfirmVote('')
    setChangeVote(false)

  }

  return (
    <div className="card-container">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <h2>{`Votes ${votes}`}</h2>
        <div className="card-actions">
          {confirmVote === title ? (
            <>
              <button className="card-btn"  onClick={handleUpdate}>Are you sure ?</button>
              <button className="card-btn" onClick={HandleCancel}>Cancel</button>
            </>
          ) : (
            <button className="card-btn" onClick={HandleClick}>
              {(userData.vote && !changVote ? "Change My " : "") + "Vote"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
