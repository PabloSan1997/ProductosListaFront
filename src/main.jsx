
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store/store'
import { CookiesProvider } from "react-cookie";


ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>

)
