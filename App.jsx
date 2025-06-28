 import { StyleSheet, Text, View } from 'react-native'
 import React, { useEffect } from 'react'
 import Acount from './src/Component/Acount/Acount'
 import bootsplash  from 'react-native-bootsplash'
import StackNavigation from './src/Component/Navigation/StackNavigation'

 export default function App() {
  useEffect(()=>{
    bootsplash.hide({fade:true})
  },[])
   return (
    <>
    <StackNavigation/>
    </>
   )
 }
 
 const styles = StyleSheet.create({})