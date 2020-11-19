import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { useParams } from "react-router-dom";

const Character = () => {
  //character comics et setloading
  const [character, setCharacter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const id = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3100/characters/${id}`
        );

        // on fait la requete aussi pour les comics
        const responseComics = await axios.get(
          `http://localhost:3100/characters/${id}/comics`
        );
        setComics(responseComics.data.data);
        setCharacter(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  // on va retourner un loader avec un perso selectionné dans la home et les comics dans lesquelles il apparait
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
    <div key={id}>
      <p>{character.name[0]}</p>
      <img
        src={
          character.thumbnail.path[0] + "." + character.thumbnail.extention[0]
        }
      />
    </div>
  );
};
export default Character;
