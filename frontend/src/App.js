import React from "react";
import Header from "./components/Header";
import { Table } from "./components/Table";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title={"Golang News Aggregator"} />
        <Table col1={"Title"} col2={"Keywords"} />
      </div>
    );
  }
}

export default App;