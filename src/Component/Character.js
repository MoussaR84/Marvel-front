import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import axios from "axios";

const Character = ({ apiUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  // Return all characters from Marvel API
  const [character, setCharacter] = useState([]);
  // Return all comics from marvel API
  const [comics, setComics] = useState([]);
  // Return Character id
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/character/${id}`);

        const responseComics = await axios.get(
          `${apiUrl}/character/${id}/comics`
        );
        setComics(responseComics.data.data);
        setCharacter(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id, apiUrl]);

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
    <section className="character-section">
      <p>les comics et perso que tu kiffes</p>
    </section>
  );
};

export default Character;
