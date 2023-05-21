import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PreRegister from './screens/PreRegister.jsx';
import Login from './screens/Login.jsx';
import Home from './screens/Home.jsx';
import Registration from './screens/Registration.jsx';
import Summary from './screens/Summary.jsx';
import MyWedding from './screens/MyWedding.jsx';
import WishList from './screens/WishList.jsx';

import Dresses from './screens/SummaryCategories/Dresses.jsx';
import Suits from './screens/SummaryCategories/Suits.jsx';
import Venues from './screens/SummaryCategories/Venues.jsx';
import PhotoVideo from './screens/SummaryCategories/PhotoVideo.jsx';
import Music from './screens/SummaryCategories/Music.jsx';
import Catering from './screens/SummaryCategories/Catering.jsx';
import Decoration from './screens/SummaryCategories/Decoration.jsx';
import Invitations from './screens/SummaryCategories/Invitations.jsx';
import Cake from './screens/SummaryCategories/Cake.jsx';
import CarRental from './screens/SummaryCategories/CarRental.jsx';


import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerPosition: 'right', 
      drawerStyle: {backgroundColor: '#ccab79cb', width: '80%', color:'white'}, 
      drawerLabelStyle: {textAlign: 'center', color: 'white', fontSize: 25},
      drawerItemStyle: {backgroundColor: 'rgba(144, 104, 40, 0.47)', marginTop: 40},
      headerTintColor: '#fff',
      headerTransparent: true,
      headerTitle: '',
      headerShown: false,
    }}>

      <Drawer.Screen name="PreRegister" component={PreRegister} options={{headerShown: false, drawerItemStyle: {display: 'none'}}}/>    
      <Drawer.Screen name="Login" component={Login} options={{headerShown: false, drawerItemStyle: {display: 'none'}}}/>
      <Drawer.Screen name="Registration" component={Registration} options={{headerShown: false, drawerItemStyle: {display: 'none'}}}/>
      <Drawer.Screen name="Home" component={Home} options={{headerShown: false, drawerContentContainerStyle: {paddingTop: 60}}}/>
      <Drawer.Screen name="Summary" component={Summary} options={{headerShown: false}}/>
      <Drawer.Screen name="My wedding" component={MyWedding} options={{headerShown: false}}/>
      <Drawer.Screen name="Wish list" component={WishList} options={{headerShown: false}}/>

      <Drawer.Screen name="Log out" component={Login} options={{headerShown: true, drawerItemStyle: {display: 'none'}, drawerItemStyle: {backgroundColor: 'rgba(144, 104, 40, 0.47)', marginTop: 250},}}/>


      <Stack.Screen name="Dresses" component={Dresses} options={{ drawerItemStyle: {display: 'none'}}}/>
      <Stack.Screen name="Suits" component={Suits} options={{ drawerItemStyle: {display: 'none'}}}/>
      <Stack.Screen name="Venues" component={Venues} options={{ drawerItemStyle: {display: 'none'}}}/>
      <Stack.Screen name="PhotoVideo" component={PhotoVideo} options={{ drawerItemStyle: {display: 'none'}}}/>
      <Stack.Screen name="Music" component={Music} options={{ drawerItemStyle: {display: 'none'}}}/>
      <Stack.Screen name="Catering" component={Catering} options={{ drawerItemStyle: {display: 'none'}}}/>
      <Stack.Screen name="Decoration" component={Decoration} options={{ drawerItemStyle: {display: 'none'}}}/>
      <Stack.Screen name="Invitations" component={Invitations} options={{ drawerItemStyle: {display: 'none'}}}/>
      <Stack.Screen name="Cake" component={Cake} />
      <Stack.Screen name="CarRental" component={CarRental} />
    </Drawer.Navigator>
  );
}

const AppNavigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigator;
