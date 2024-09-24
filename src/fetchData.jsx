import { useState } from "react";

export default async function fetchData(name) {
  const [ repo, setRepo ] = useState([])
  const token = "";
  try{
      const response = await fetch(`https://api.github.com/search/repositories?q=${name}+in:name`, {
        method: "GET",
        headers: {
          Authorization: `token ${token}`, 
          Accept: "application/vnd.github.v3+json",
        },
      });
      const data = await response.json();
      setRepo(data.items)
      console.log(data.items);
    }
    catch(error){
      console.error(error);
    }
}