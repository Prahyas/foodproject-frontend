import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
  // const [api, setapi] = useState('http://localhost:1337');
  const [api, setapi] = useState('https://khadyaproject.herokuapp.com');
  const [form1, setform1] = useState([]);
  const [form3, setform3] = useState([]);
  const [form5, setform5] = useState([]);
  const [form7, setform7] = useState([]);
  const [form10, setform10] = useState([]);
  const [form11, setform11] = useState([]);
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    const getLocal = () => {
      if (localStorage.getItem('currentUser') === null) {
        localStorage.setItem('currentUser', JSON.stringify([]));
      } else {
        let localDb = JSON.parse(localStorage.getItem('currentUser'));
        setcurrentUser(localDb);
      }
    };
    getLocal();
  }, []);

  useEffect(() => {
    const saveLocal = () => {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    };
    saveLocal();
  }, [currentUser]);

  const fetchform1 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form1s?sort[0]=createdAt%3Adesc&populate[0]=collection&populate[1]=collection.months`
      );
      setform1(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform3 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form3s?sort[0]=createdAt%3Adesc&populate[0]=form3collection&populate[1]=form3collection.form3months`
      );
      setform3(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform5 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form5s?sort[0]=createdAt%3Adesc&populate[0]=form5collection&populate[1]=form5collection.form5months`
      );
      setform5(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform7 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form7s?sort[0]=createdAt%3Adesc&populate[0]=form7collection&populate[1]=form7collection.form7months`
      );
      setform7(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform10 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form10s?sort[0]=createdAt%3Adesc&populate[0]=form10collection&populate[1]=form10collection.form10months`
      );
      setform10(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform11 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form11s?sort[0]=createdAt%3Adesc&populate[0]=form11collection&populate[1]=form11collection.form11months`
      );
      setform11(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchform1();
    fetchform3();
    fetchform5();
    fetchform7();
    fetchform10();
    fetchform11();
  }, []);

  return (
    <DataContext.Provider
      value={{
        apiData: [api, setapi],
        form1Data: [form1, setform1],
        fetchform1Function: { fetchform1 },
        form3Data: [form3, setform3],
        fetchform3Function: { fetchform3 },
        form5Data: [form5, setform5],
        fetchform5Function: { fetchform5 },
        form7Data: [form7, setform7],
        fetchform7Function: { fetchform7 },
        form10Data: [form10, setform10],
        fetchform10Function: { fetchform10 },
        form11Data: [form11, setform11],
        fetchform11Function: { fetchform11 },
        currentUserData: [currentUser, setcurrentUser],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
