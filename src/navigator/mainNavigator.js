import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList4189090Navigator from '../features/ArticleList4189090/navigator';
import ArticleList5189089Navigator from '../features/ArticleList5189089/navigator';
import CalendarView6189088Navigator from '../features/CalendarView6189088/navigator';
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
ArticleList4189090: { screen: ArticleList4189090Navigator },
ArticleList5189089: { screen: ArticleList5189089Navigator },
CalendarView6189088: { screen: CalendarView6189088Navigator },
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
