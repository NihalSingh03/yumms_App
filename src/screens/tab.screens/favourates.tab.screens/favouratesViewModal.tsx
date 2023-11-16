import {useContext, useEffect, useState} from 'react';
import {FavouriteContext} from '../../../context/favourites.context';
import {MEALS} from '../../../db/data/dummyData';
import Meal from '../../../db/models/meal';
export default function useViewModal() {
  const {favourite, setFavourite} = useContext(FavouriteContext);
  const [favouriteItems, setFavouriteItems] = useState<Meal[]>([]);

  const handleDetailPageModal = (meal: Meal) => {};

  useEffect(() => {
    const favouritesMeal = MEALS.filter(meal =>
      favourite.some((favouriteItemId: string) => favouriteItemId === meal.id),
    );

    setFavouriteItems([...favouriteItems, ...favouritesMeal]);
  }, [favourite]);

  return {favouriteItems, handleDetailPageModal};
}
