import React from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import './styles/Navbar.css'
import './styles/Content.css'
import useSWR from "swr";

export const ENDPOINT = 'http://127.0.0.1:4000'
const fetcher = (url) => fetch(`${ENDPOINT}/${url}`).then((r)=>r.json());


function App() {
  const {data, mutate} = useSWR('data',fetcher)
  return (
    <div className="App">
      <Navbar/>

    {data && <Content data={data}/>}
    {JSON.stringify(data)}
    </div>
    
  );
}

export default App;
