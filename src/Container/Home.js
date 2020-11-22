import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Character from "../Component/Character";
import Loader from "react-loader-spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import Itemcharacter from "../Component/Itemcharacter";
import Inputsearch from "../Component/InputSearch";

const Home = ({ apiUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  // Search bar for characters
  const [searchCharacter, setSearchCharacter] = useState("");
  // Return all characters from Marvel API
  const [characters, setCharacters] = useState([]);
  // on va devoir trier les page donc on state page maximum et page
  // const [pageMax, setPageMax] = useState(0);
  const [page, setPage] = useState(1);
  // Number of results per page
  const limit = 100;

  // on handleclick sur le bas et on tournes les pages

  const handlePageClick = (event) => {
    console.log(event);
    setPage(event.selected + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `{apiUrl}?page=${page}&name=${searchCharacter}`
        );
        console.log(response.data);
        //console.log(page);
        setCharacters(response.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [page, searchCharacter, apiUrl]);

  return isLoading ? (
    <div className="loading">
      <Loader
        type="Bars"
        color="#ED1F21"
        height={100}
        width={100}
        timeout={99999}
      />
    </div>
  ) : (
    <>
      <home>
        <p>title="MARVEL CHARACTERS"</p>

        <main>
          <div className="main-navigation">
            <div className="section-title">
              <h2>MARVEL CHARACTERS LIST</h2>
            </div>
            <div>
              <Link to={`/character/:id`}>
                <Inputsearch
                  searchItem={searchCharacter}
                  setSearchItem={setSearchCharacter}
                />
              </Link>
              );
            </div>
            <div>
              <p>{characters.total} RESULTS</p>
              <p>SORT BY A-Z</p>
            </div>
          </div>
          <section className="characters-section">
            {characters.results.map((item) => {
              return <Itemcharacter key={item.id} item={item} />;
            })}
          </section>

          <div className="pages">
            <ReactPaginate
              previousLabel={"PREV"}
              nextLabel={"NEXT"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              marginPagesDisplayed={1}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages"}
              activeClassName={"active"}
            />
          </div>
        </main>
      </home>
    </>
  );
};

export default Home;
