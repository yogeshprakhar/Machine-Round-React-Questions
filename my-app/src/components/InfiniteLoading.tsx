import { useState, useEffect } from "react";

const infiniteLoading = () => {
  const [count, setCount] = useState(10);
  const [arr, setArr] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    let element: number[] = [];
    for (let i = 0; i <= count; i++) {
      element.push(i);
    }
    console.log(element);
    setArr(element);
  }, [count]);

  const handleScroll = () => {
    setLoading(true)
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setCount((prev) => prev + 5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("useEffect is working")

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {arr.map((item) => (
        <div
          key={item}
          className="h-20 rounded-3xl flex m-5 p-5 bg-green-500"
        >
          {}
        </div>
      ))}
      {loading ? <>Loading...</> : <></> }
    </div>
  );
};

export default infiniteLoading;
