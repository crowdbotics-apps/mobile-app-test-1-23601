import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2189084Navigator from '../features/BlankScreen2189084/navigator';
import BlankScreen1189083Navigator from '../features/BlankScreen1189083/navigator';
import BlankScreen0189082Navigator from '../features/BlankScreen0189082/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2189084: { screen: BlankScreen2189084Navigator },
BlankScreen1189083: { screen: BlankScreen1189083Navigator },
BlankScreen0189082: { screen: BlankScreen0189082Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
