import {StatusBar} from 'react-native';
import {CATEGORIES, MEALS} from '../../../db/data/dummyData';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {deviceHeight, deviceWidth} from '../../../components/layput.components';
import {useEffect, useState} from 'react';
import Category from '../../../db/models/category';
import Meal from '../../../db/models/meal';

export default function useViewModal() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedCategoryMeals, setSelectedCategoryMeals] = useState<Meal[]>(
    [],
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | undefined>();

  const statusbarHeight = StatusBar.currentHeight;
  const tabBarHeight = useBottomTabBarHeight();
  const actualHeight = deviceHeight - tabBarHeight - statusbarHeight!;
  const topContainerHeight = actualHeight * 0.3;
  const screenwidth = deviceWidth - 16;

  useEffect(() => {
    const filteredSelectedCategoryMeals = MEALS.filter(meal => {
      const isSelectedCategoryMealsPresent = meal.categoryIds.some(
        (id: string) => id === selectedCategory.id,
      );
      return isSelectedCategoryMealsPresent;
    });
    setSelectedCategoryMeals(filteredSelectedCategoryMeals);
  }, [selectedCategory]);

  const handleDetailPageModal = (meal: Meal) => {
    setSelectedMeal(meal);
    setModalVisible(true);
  };

  const setCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  return {
    CATEGORIES,
    topContainerHeight,
    screenwidth,
    actualHeight,
    selectedCategory,
    setCategory,
    selectedCategoryMeals,
    modalVisible,
    setModalVisible,
    handleDetailPageModal,
    selectedMeal,
  };
}
