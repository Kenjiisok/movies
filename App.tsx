import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/Screens/Home/Index';
import { Routes } from './src/Routes/Index';
import { MovieProvider } from './src/Context/moviesContext';

export default function App() {
  return (
    <>
      <MovieProvider>
        <Routes />
        <StatusBar style="auto" />
      </MovieProvider>
    </>
  );
}

