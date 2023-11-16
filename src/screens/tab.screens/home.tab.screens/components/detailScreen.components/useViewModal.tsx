import {useContext} from 'react';
import {HomeScreenModalProps} from '../../../../../types/homeScreen.types';
import {FavouriteContext} from '../../../../../context/favourites.context';
import {setDataInAsyncStorage} from '../../../../../utils/asyncStorage.utils';

export default function useViewModal(props: HomeScreenModalProps) {
  const {modalVisible, setModalVisible, selectedMeal} = props;
  const {favourite, setFavourite} = useContext(FavouriteContext);

  const handleLikeButton = (mealId: string) => {
    const isMealPresent = favourite.some((item: string) => item === mealId);
    if (isMealPresent) {
      const filteredFavourites = favourite.filter(
        (item: string) => item != mealId,
      );
      setFavourite(filteredFavourites);
      setDataInAsyncStorage('favourites', filteredFavourites);
    } else {
      setFavourite([...favourite, mealId]);
      setDataInAsyncStorage('favourites', [...favourite, mealId]);
    }
  };
  console.log(favourite);
  return {
    modalVisible,
    setModalVisible,
    selectedMeal,
    handleLikeButton,
    favourite,
  };
}
