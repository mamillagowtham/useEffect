import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const App = () => {
  console.log("up one");

  const [data, setData] = useState([]);
  useEffect(() => {
    const todo = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
      console.log("inside one");
    };

    todo();
  }, []);

  console.log("down one ");
  return (
    <>
    <div>
      {data.map((item) => {
        return <Cart item = {item.title}/>;
      })}
      
    </div>
     
     </>
  );
};



export default App