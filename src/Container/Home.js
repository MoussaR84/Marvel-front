import React, { useState, useEffect } from "react";
import Character from "../Component/Character";
import Loader from "react-loader-spinner";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    //on va envoyer une requete au serveur qui va nous renvoyer les objets
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3100/characters`);
        setCharacters(response.data);
        console.log(characters);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  //on va afficher un loader avec des barres et les perso
  return isLoading ? (
    <div className="loading">
      <span>Please wait</span>

      <Loader
        type="Bars"
        color="#ED1F21"
        height={100}
        width={100}
        timeout={99999}
      />
    </div>
  ) : (
    <div>
      <h1>DISCOVER OUR CHARACTERS</h1>
      {characters.results.map((item, id) => {
        return (
          <div key={id}>
            <Link to="/character">
              <p>{item.name}</p>
              <img src={item.thumbnail.path + "." + item.thumbnail.extention} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
