import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Body from "./Body";
import { useState } from "react";
import Welcome from "./Welcome";

//dvdvdvvdvdv

function App() {
  const [ repo, setRepo ] = useState([])
  // const token = null;
  async function fetchData(name) {
    try{
      const response = await fetch(`https://api.github.com/search/repositories?q=${name}+in:name`, {
        method: "GET",
        headers: {
          // Authorization: `token ${token}`, 
          Accept: "application/vnd.github.v3+json",
        },
      });
      const data = await response.json();
      setRepo(data.items)
    }
    catch(error){
      console.error(error);
    }
  }
  return (
    <>

      <Header onSearch={ fetchData }/>
      {repo.length > 0 ? <Body data={repo}/> : <Welcome />}
    </>
  );
}

export default App;
