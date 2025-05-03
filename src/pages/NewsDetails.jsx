import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import NewsDetailsCard from "./NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const [news, setNews] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const newsData = data.find((news) => news.id == id);
    setNews(newsData);
  }, [data, id]);
  return (
    <div>
      <header className="py-6">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">Dragon News</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3 sticky top-0 min-h-screen">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
