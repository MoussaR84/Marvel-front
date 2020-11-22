import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

const Comics = () => {
  const [comics, setComics] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //on va envoyer une requete au serveur qui va nous renvoyer les objets
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3100/comics`);
        setComics(response.data);
        console.log(comics);
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
      <div>
        <input perso />
      </div>

      <h1>DISCOVER OUR COMICS</h1>
      {comics.results.map((item, id) => {
        return (
          <div key={id}>
            <p>{item.name}</p>
            <img src={item.thumbnail.path + "." + item.thumbnail.extention} />
          </div>
        );
      })}
    </div>
  );
};
export default Comics;
