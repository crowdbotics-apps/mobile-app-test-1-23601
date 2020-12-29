import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard17189087Navigator from '../features/Dashboard17189087/navigator';
import ArticleList8189086Navigator from '../features/ArticleList8189086/navigator';
import BlankScreen3189085Navigator from '../features/BlankScreen3189085/navigator';
import BlankScreen2189084Navigator from '../features/BlankScreen2189084/navigator';
import BlankScreen1189083Navigator from '../features/BlankScreen1189083/navigator';
import BlankScreen0189082Navigator from '../features/BlankScreen0189082/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard17189087: { screen: Dashboard17189087Navigator },
ArticleList8189086: { screen: ArticleList8189086Navigator },
BlankScreen3189085: { screen: BlankScreen3189085Navigator },
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
