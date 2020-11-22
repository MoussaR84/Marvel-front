import React from "react";

const CharacterItem = ({ item }) => {
  const id = item.id;
  // on va mettre une condition pour affichage si il nj y a pas d info donc mettre l uril de la plage not available
  return (
    <div key={item.id} to={`/character/${id}`}>
      <div className="character-item">
        <div>
          <img
            src={
              item.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                ? "https://terrigen-cdn-dev.marvel.com/content/prod/1x/default/explore-no-img.jpg"
                : `${item.thumbnail.path}.${item.thumbnail.extension}`
            }
            alt=""
          />
        </div>
        <div className="content">
          <p>{item.name}</p>
          <div className="red"></div>
        </div>

        <div className="bottom-right"></div>
      </div>
    </div>
  );
};

export default CharacterItem;
