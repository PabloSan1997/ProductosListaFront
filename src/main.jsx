
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store/store'
import { CookiesProvider } from "react-cookie";
import { ProvedorContexto } from './contexto/indes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <ProvedorContexto>
      <Provider store={store}>
        <App />
      </Provider>
    </ProvedorContexto>
  </CookiesProvider>

)
