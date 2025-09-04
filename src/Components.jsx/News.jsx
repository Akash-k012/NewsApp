import React, { useEffect, useState } from "react";
import loaderIcon from "../assets/5.svg";
import NewsItem from "./NewsItem";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [curPage, setCurPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [paginateParamas, setPaginateParams] = useState({
    currentPage: 1,
    totalpages: 0,
    pageSize: 20,
  });

  const fetchNews = async (pageNumber) => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=8f7913e195ab4218a28ad2a745cc7033&page=${pageNumber}&pageSize=${paginateParamas.pageSize}`;

    setLoader(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setLoader(false);

    setPaginateParams((prev) => ({
      ...prev,
      totalpages: parsedData.totalResults,
    }));
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const handleNextClick = async () => {
    setPage(page + 1);
  };

  const handlePrevClick = async () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  console.log(
    Math.ceil(paginateParamas.totalpages / paginateParamas.pageSize),
    paginateParamas.totalpages
  );
  return (
    <div className="container my-3">
      <h2 className="text-center">NewsApp - Top Headlines</h2>
      {!loader ? (
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                Math.ceil(
                  paginateParamas.totalpages / paginateParamas.pageSize
                ) === page
              }
              type="button"
              className="btn btn-dark"
              onClick={handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      ) : (
        <div
          className="text-center mt-8 d-flex align-items-center justify-content-center"
          style={{ minHeight: "80vh" }}
        >
          <img src={loaderIcon} />
        </div>
      )}
    </div>
  );
}
