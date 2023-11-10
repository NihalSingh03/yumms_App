import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ingredients from '../ingrediants.components';
import Preperation from '../prepration.components';
import {IngredientsProps} from '../../../../../types/homeScreen.types';

const Tab = createMaterialTopTabNavigator();

export default function DetailsTopTabNavigator(props: IngredientsProps) {
  const IngredientsWrapper = () => {
    return <Ingredients {...props} />;
  };
  const PreparationWrapper = () => {
    return <Preperation {...props} />;
  };
  return (
    <Tab.Navigator>
      <Tab.Screen name="INGREDIENTS" component={IngredientsWrapper} />
      <Tab.Screen name="PREPERATION" component={PreparationWrapper} />
    </Tab.Navigator>
  );
}
