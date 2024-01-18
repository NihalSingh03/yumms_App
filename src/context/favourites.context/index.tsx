import {createContext, useContext, useEffect, useState} from 'react';
import {getDataFromAsyncStorage} from '../../utils/asyncStorage.utils';

export const FavouriteContext = createContext<any>({favourite: []});

export const FavouritesContext = (props: any) => {
  const [favourite, setFavourite] = useState([]);
  const value = {favourite, setFavourite};

  useEffect(() => {
    const getDataFromStorage = async () => {
      const response = await getDataFromAsyncStorage('favourites');
      if (response.data) {
        setFavourite(response.data);
      }
    };
    getDataFromStorage();
  }, []);

  return (
    <FavouriteContext.Provider value={value}>
      {props.children}
    </FavouriteContext.Provider>
  );
};

