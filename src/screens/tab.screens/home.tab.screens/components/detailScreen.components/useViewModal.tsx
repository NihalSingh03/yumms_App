import {HomeScreenModalProps} from '../../../../../types/homeScreen.types';

export default function useViewModal(props: HomeScreenModalProps) {
  const {modalVisible, setModalVisible,selectedMeal} = props;

  return {modalVisible, setModalVisible,selectedMeal};
}
