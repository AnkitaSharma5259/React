import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function counter1() {

  useEffect(() => {
    console.log("Functional component updating")
    return () => {
        console.log("functional component removed");
    } 

  },[number]);

  return (
    <h1>{number}</h1>
  )
}

const styles = StyleSheet.create({})