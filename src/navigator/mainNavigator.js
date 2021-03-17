import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings215397Navigator from '../features/Settings215397/navigator';
import UserProfile215385Navigator from '../features/UserProfile215385/navigator';
import Tutorial215384Navigator from '../features/Tutorial215384/navigator';
import NotificationList215356Navigator from '../features/NotificationList215356/navigator';
import Settings215355Navigator from '../features/Settings215355/navigator';
import Settings215347Navigator from '../features/Settings215347/navigator';
import UserProfile215345Navigator from '../features/UserProfile215345/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings215397: { screen: Settings215397Navigator },
UserProfile215385: { screen: UserProfile215385Navigator },
Tutorial215384: { screen: Tutorial215384Navigator },
NotificationList215356: { screen: NotificationList215356Navigator },
Settings215355: { screen: Settings215355Navigator },
Settings215347: { screen: Settings215347Navigator },
UserProfile215345: { screen: UserProfile215345Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
