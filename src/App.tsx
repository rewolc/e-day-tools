import "./App.scss";
import Header from "./features/Header/header";
import Main from "./pages/main/main";
import React, { FC } from "react";
import ToDo from "./pages/todo";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route element={<Header />} path="/">
          <Route index element={<Main />} />
          <Route element={<ToDo />} path="/todo" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
