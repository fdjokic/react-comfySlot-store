import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
//  dev-t228g5qb.us.auth0.com
//  Hdgj9JQ3KAWqwr5r7Wj5rniYwt2SwTqJ
const clientID = process.env.REACT_APP_CLIENTID;
const DOMAIN = process.env.REACT_APP_DOMAIN;

ReactDOM.render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={clientID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
