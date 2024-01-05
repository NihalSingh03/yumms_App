import {useContext, useEffect, useState} from 'react';
import {FavouriteContext} from '../../../context/favourites.context';
import {MEALS} from '../../../db/data/dummyData';
import Meal from '../../../db/models/meal';
export default function useViewModal() {
  const {favourite, setFavourite} = useContext(FavouriteContext);
  const [favouriteItems, setFavouriteItems] = useState<Meal[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal>();

  const handleDetailPageModal = (meal: Meal) => {
    setSelectedMeal(meal);
    setModalVisible(true);
  };

  useEffect(() => {
    const favouritesMeal = MEALS.filter(meal =>
      favourite.some((favouriteItemId: string) => favouriteItemId === meal.id),
    );

    setFavouriteItems(favouritesMeal);
  }, [favourite]);

  return {
    favouriteItems,
    handleDetailPageModal,
    modalVisible,
    setModalVisible,
    selectedMeal,
  };
}
