import { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import "../styles/photoswipe.css";
import "../styles/defaultSkin/default.skin.css";
import "../styles/select2.min.css";
import "../styles/all.min.css";
import "../styles/stroyka/stroyka.css";
import "../styles/home.css";
import "../styles/mainPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/layout";
import { reducerMain } from "../store/allreducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const composeEnhancers =   compose;
const store = createStore(
  reducerMain,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
