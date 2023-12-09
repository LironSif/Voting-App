import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [voteData, setVoteData] = useState(null);

  const instance = axios.create({
    baseURL: "https://6571bb50d61ba6fcc013639c.mockapi.io/sifiVote/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const fetchUserData = async () => {
    try {
      const response = await instance.get("users");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const logIn = async (payload) => {
    try {
      const response = await instance.get("users");
      console.log("respons came back")
      const userList = response.data
      
      const user = userList.find((el) => el.email === payload.email);
      console.log(user);
      const cardVotes = userList.reduce((acc, el)=>{
        if(acc[el.Voted]){
          acc[el.Voted] += 1
        }else{
          acc[el.Voted] = 1
        }
        return acc
      },{})
      setVoteData(cardVotes)
      console.log("complete login")

      if (!user) {
        alert("user not found");
        return;
      } else if (user.password !== payload.password) {
        alert("incorrect Password ");
        return;
      } else {
        setUserData(user);
        if (user.isAdmin) {
          setAdminData(userList);
        }
      }
    } catch (error) {
      console.error("DRORRRR");
    }
  };

  const updateVote = async (title, user) => {
    const updatedUser = {
      ...user,
      Voted: title, 
      vote: true
    };
  
    try {
      const response = await instance.put(`users/${user.id}`, updatedUser);
      console.log('Vote updated:', response.data);
      setUserData(response.data)
      const newVotes ={...voteData}
      if(newVotes[title]){
        newVotes[title]= newVotes[title]+1
      }else{
        newVotes[title]= 1
      }
      if(user.Voted !== ''){
        newVotes[user.Voted]= newVotes[user.Voted]-1
      }
      setVoteData(newVotes)
      
    } catch (error) {
      console.error('Error updating vote:', error);
    }
  };
  

  
  const logOut = () => setUserData(null)

  return (
    <UserDataContext.Provider value={{ userData, fetchUserData, logIn, logOut, voteData, updateVote}}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
