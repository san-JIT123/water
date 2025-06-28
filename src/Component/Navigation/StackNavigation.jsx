import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './LoadingScreen';
import LoginScreen from '../LoginPage/LoginScreen';
import BottomNavigate from './BottomNavigate';
import CartScreen from '../Screen/CartScreen';




const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const [isLoading, setIsLoading] = useState(true);  // loading state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // dummy login status

  // Simulate async login check (replace with actual logic later)
  useEffect(() => {
    setTimeout(() => {
      // 👉 replace this logic with actual auth (AsyncStorage, token, etc)
      setIsLoading(false);
      setIsLoggedIn(false); // change to true to skip login
    }, 1500);
  }, []);

  return (

    <NavigationContainer>
      <Stack.Navigator>

        {
          isLoading ? <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
            :
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        }
        <Stack.Screen name="HomePage" component={BottomNavigate} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetail" component={CartScreen} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}




//             <>
//               <Stack.Screen name="HomePage" component={BottomNavigate} options={{ headerShown: false }} />
//               {/* <Stack.Screen name="ProductDetail" component={ProductDetails} /> */}
//             </>


//  {
//           isLoading ? (
//             <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
//           ) : !isLoggedIn ? (
//             <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//           ) : (

//             <>
//               <Stack.Screen name="HomePage" component={BottomNavigate} options={{ headerShown: false }} />
//               {/* <Stack.Screen name="ProductDetail" component={ProductDetails} /> */}
//             </>
//           )
//         }