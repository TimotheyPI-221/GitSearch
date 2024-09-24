import { useState } from "react";

export default async function fetchData(name) {
  const [ repo, setRepo ] = useState([])
  const token = "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";
  // const token = "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";
  try{
      const response = await fetch(`https://api.github.com/search/repositories?q=${name}+in:name`, {
        method: "GET",
        headers: {
          Authorization: `token ${token}`, // Используем токен для аутентификации
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