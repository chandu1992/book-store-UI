import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RedirectBtn } from "../../common/redirect button/RedirectBtn";
import axios from "axios";

const Home = () => {
  const [apiData, setApidata] = useState([]);

  const title = "Home page";
  const link = "/about";
  const btn = "About";

  const apiDataFetch = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(data.data);
      setApidata(data.data);
    } catch (e) {
      alert("somthing went wrong");
    }
  };
  useEffect(() => {
    apiDataFetch();
  }, []);
  return (
    <>
      <RedirectBtn title={title} link={link} btn={btn} />

      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {apiData.length > 0 ? (
            apiData.map((obj) => {
              return (
                <>
                  <tr>
                    <th scope="row">{obj.id}</th>
                    <td>{obj.title}</td>
                    <td>
                      {" "}
                      <img src={obj.url} alt="" width={40} />
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <tr>
              <td colspan="3" class="table-active">
                <div class="d-flex justify-content-center">
                  <div class="spinner-grow text-success m-1" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-success m-1" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-success m-1" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Home;
