import Meal from '../../db/models/meal';

export type HomeScreenModalProps = {
  modalVisible: boolean;
  setModalVisible: (argument: boolean) => void;
  selectedMeal?: Meal;
};
