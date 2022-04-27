import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const bf = data.filter((item) => item.type === "breakfast");
        setBreakfast(bf);
        const ln = data.filter((item) => item.type === "lunch");
        setLunch(ln);
        const dn = data.filter((item) => item.type === "dinner");
        setDinner(dn);
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
