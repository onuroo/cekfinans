import { useContext } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';

const NavigationActions = () => {

  const navigation = useNavigation();

  const tabNavigate = (routeName) => {
    navigation.navigate(routeName);
  };

  const navigatePush = (routeName, params = {}, in_stack = false) => {
    navigation.dispatch(
        StackActions.push(routeName, {
          ...params,
        }),
    );
  };

  const navigatePop = (screenCount = 1) => {
    navigation.dispatch(
        StackActions.pop(screenCount),
    );
  };

  const navigateReset = (routeName, params = {}) => {
    navigation.dispatch(
      StackActions.replace(routeName, params),
    );
  };

  const openLoading = () => {
    navigatePush('loading');
  }
  const closeLoading = () => {
    navigatePop();
  }

  return {
    navigation,
    tabNavigate,
    navigatePush,
    navigatePop,
    navigateReset,
    openLoading,
    closeLoading
  };
};

export default NavigationActions;
