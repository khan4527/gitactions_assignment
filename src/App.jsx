import { useEffect } from "react";
import { useState } from "react";
import Styles from "./App.module.css";
import Card from "./components/Card";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async (q = "all") => {
    try {
      setLoading(true);
      let res = await fetch(
        `https://api.github.com/search/repositories?q=stars:>1+language:${q}`
      );
      let { items } = await res.json();
      setData(items);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  const handleNewParameter = (q) => {
    loadData(q);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className={Styles.app}>
      <div className={Styles.btnDiv}>
        <button onClick={() => handleNewParameter("all")}>All</button>
        <button onClick={() => handleNewParameter("html")}>HTML</button>
        <button onClick={() => handleNewParameter("css")}>CSS</button>
        <button onClick={() => handleNewParameter("javascript")}>
          JavaScript
        </button>
      </div>
      <div className={Styles.gridDiv}>
        {data && data.map((elm) => {
          return <Card key={elm.id} {...elm} />;
        })}
      </div>
    </div>
  );
}

export default App;
