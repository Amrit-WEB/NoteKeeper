import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { persistor, store } from "./redux/store.js"
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
)

/*
Redux persist:-
Redux Persist is a library that enables seamless persisting and
rehydrating of your Redux store state. It allows you to save your 
application’s state to a persistent storage medium, such as local 
storage or AsyncStorage (for React Native), and then restore it when 
the application is restarted or refreshed.

*/