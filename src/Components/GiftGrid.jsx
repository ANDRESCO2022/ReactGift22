import {useEffect, useState} from 'react';
//import {getGift} from '../helpers/getGif.js';
import {GiftItem} from './GiftItem.jsx';
import {useFetchGifs} from '../hooks/useFetchGifs.js';

export const GiftGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GiftItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
