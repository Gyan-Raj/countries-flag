import React, { useEffect, useState } from "react";
import { fetchData } from "../api/Api";
import Card from "../card/Card";
import style from "./Flag.module.css";

function Flag() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    try {
      let response = fetchData().then((res) => {
        // console.log(res);
        setCountries(res.data);
      });
      //   console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  //   console.log(countries);
  //   console.log(countries[0].name);
  //   console.log(countries[0].name.common);
  return (
    <div className={style.container}>
      {countries.map((ele) => {
        // console.log(ele.name.official);
        // console.log(ele.flags);
        // console.log(ele.flags.alt);
        // console.log(ele.flags.png);
        return (
          <Card
            data={{
              name: ele.name.official,
              flag: ele.flags.png,
              alt: ele.flags.alt,
            }}
          />
        );
      })}
    </div>
  );
}

export default Flag;
