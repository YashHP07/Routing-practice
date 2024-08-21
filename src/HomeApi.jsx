import { useState, useEffect } from "react";

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/countries")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
   
      {data &&
        data.map((item) => {
          return <p key={item.id}><b>Country name</b>-{item.name},,<b>Capital</b>{item.capital},,<b>Currency</b>{item.currency}, <b>population-</b>{item.population}</p>;
        })}
    </>
  );
};



