import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import './index.css';
import App from './pages/results';
import reportWebVitals from './reportWebVitals';
import { client } from './services/github';
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/react" />} />
          <Route path=":topicName" element={<App />} />hola
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
