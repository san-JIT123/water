import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './LoadingScreen';
import LoginScreen from '../LoginPage/LoginScreen';
import BottomNavigate from './BottomNavigate';
import CartScreen from '../Screen/CartScreen';
import AcountScreen from '../Screen/AcountScreen';
import AcountFromScreen from '../Screen/AcountFromScreen';
import OTPVerifyScreen from '../OTPVerifyFrom/OTPVerifyScreen';
import Copyright from '../More/About/Copyright';
import TermsOfService from '../More/About/TermsOfService';
import LicensesAndRegistrations from '../More/About/LicensesAndRegistrations';
import AboutScreen from '../More/About/AboutScreen';
import SettingScreen from '../More/Setting/SettingScreen';
import SeendFeddBack from '../More/SeendFeedBack/SeendFeddBack';
import ReportSafetyScreen from '../More/ReportSafety/ReportSafetyScreen';
import AccountSetting from '../More/Setting/AccountSetting';




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
        <Stack.Screen name="ProductDetails" component={CartScreen} />
        <Stack.Screen name="Acount" component={AcountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Acount from" component={AcountFromScreen} />
        <Stack.Screen name="OTPVerifyFrom" component={OTPVerifyScreen} options={{ headerShown: false }} />

        {/* Abbout Page Start */}
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Copy right" component={Copyright} />
        <Stack.Screen name="Terms Of Service" component={TermsOfService} />
        <Stack.Screen name="Licenses and Registrations" component={LicensesAndRegistrations} />
        {/* Abbout Page Start */}

        {/* Send FeedBack Page Start */}
        <Stack.Screen name="Send FeedBack" component={SeendFeddBack} />
        {/* Send FeedBack Start */}


        {/*  Page Start */}
        <Stack.Screen name="Report a Safety emergency" component={ReportSafetyScreen} />
        {/* <Stack.Screen name="AccountSetting" component={AccountSetting} /> */}

        {/* Setting Start */}

        {/* Setting Page Start */}
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen name="Account Setting" component={AccountSetting} />

        {/* Setting Start */}



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