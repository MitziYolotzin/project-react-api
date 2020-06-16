import React from "react";

export const CardPokemon = (item) => {
  const { image, name, types } = item;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img alt="pokemon" src={image} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{types}</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};
