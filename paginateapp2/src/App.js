import React from "react";
import Navigator from "./components/navigator/Navigator";
import Page from "./components/pagination/Page";
import "./App.css";

export default function App() {

  return (
    <div className="container mt-5">
      {/* className은 단순히 클래스 명이다 */}
      <Navigator />
      <Page />
    </div>
  );
};