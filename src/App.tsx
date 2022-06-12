import React, { FC } from "react";
import Header from "./features/header/header";
import "./App.scss";
import Main from "./pages/main/main";
import ToDo from "./pages/todo";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="/todo" element={<ToDo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
