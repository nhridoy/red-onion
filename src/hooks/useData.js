import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setBreakfast(data.breakfast);
        setLunch(data.lunch);
        setDinner(data.dinner);
      });
  }, []);
  return {
    data: [...breakfast, ...lunch, ...dinner],
    breakfast,
    lunch,
    dinner,
  };
};
export default useData;
