
import "./App.css";
import Menu from "./Menu/Menu";
import Cards from "./Cards/Cards";
import Header from "./Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import { DataAdjectivesA } from "./Data/DataAdjectives/DataAdjectivesA";
import { DataAdjectivesB } from "./Data/DataAdjectives/DataAdjectivesB";
import { DataAdjectivesC } from "./Data/DataAdjectives/DataAdjectivesC";
import { DataNounsA } from "./Data/DataNouns/DataNounsA";
import { DataNounsB } from "./Data/DataNouns/DataNounsB";
import { DataNounsC } from "./Data/DataNouns/DataNounsC";
import { DataVerbsA } from "./Data/DataVerbs/DataVerbsA";
import { DataVerbsB } from "./Data/DataVerbs/DataVerbsB";
import { DataVerbsC } from "./Data/DataVerbs/DataVerbsC";
import './style/colors.css'
import { ROUTES } from "./routes";


function App() {
  return (
  <>
    <div className="header">
      <Header /> 
    </div> 
    <div className="box">
      <Menu />
      <Routes>
        <Route path={ROUTES.ADJECTIVES.A} element={<Cards data={DataAdjectivesA} />}/>  
        <Route path ="/DataAdjectivesB" element = {<Cards data={DataAdjectivesB} />}/>
        <Route path ="/DataAdjectivesC" element = {<Cards data={DataAdjectivesC} />}/>

        <Route path="/DataNounsA" element = {<Cards data={DataNounsA} />} />
        <Route path="/DataNounsB" element = {<Cards data={DataNounsB} />} />
        <Route path="/DataNounsC" element = {<Cards data={DataNounsC} />} />

        <Route path="/DataVerbsA" element = {<Cards data={DataVerbsA} />} />
        <Route path="/DataVerbsB" element = {<Cards data={DataVerbsB} />} />
        <Route path="/DataVerbsC" element = {<Cards data={DataVerbsC} />} />
      </Routes>
    </div>
    </>
);
}

export default App;
