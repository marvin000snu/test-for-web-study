import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiLink } from "react-icons/fi";
import { FaFolderPlus } from "react-icons/fa";
const fetch = require("node-fetch");
const StyledContainer = styled.div`
display: grid;
height : 90vh;
margin : 10px;
grid-template-rows: 1fr 1fr 9fr;
justify-items: center;
align-items: center;
color: red;
.nameofnews{
  color: black;
  font-size : 50px ;
  font-weight: bold;
  margin 30px 10px 10px 50px ;
  justify-self: left;
  align-itmes: top;

}
.newsCard {
  display: grid;
  grid-template-columns: 1fr 6fr;
  margin: 20px
}
.newslist{
  justify-self : left;
  margin : 100px 10px 10px 10px ;
  justify-items: left;
}
.newstitle{
  color : black;
  font-weight : bold;
}
.newsText{
  display:grid;
  grid-template-rows: 3fr 1fr;
  align-items: center;  
}
.newstitle{
  font-size: 17px
}
.scrapbutton{
  margin 0px 0px 0px 20px
}
`;
const News = () => {
  const [newsArray, setnewsArray] = useState([]);
  const scrap = async function (key) {
    const [results] = fetch("http://localhost:3001/api/scrap/scrap", {
      method: "POST",
      body: JSON.stringify({
        news_title: newsArray[key].title,
        image_Url: newsArray[key].urlToImage,
        text_url: newsArray[key].url,
        user_id: 1,
      }),
      header: {},
    });
  };
  console.log("render!");
  useEffect(() => {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=04b3ff2533fc47d183985a6f460d561e",
      {
        method: "GET",
      }
    )
      .then((res) => res.json()) // expecting a json response
      .then((result) => setnewsArray(result.articles))
      .then(console.log(newsArray));
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
  const style = {
    overflowY: "scroll",
    height: "70vh",
    margin: "20px 120px 20px 0px  ",
  };
  return (
    <StyledContainer>
      <div className="nameofnews">
        스포츠
        <hr width="1000vh" />
      </div>
      <div className="newsList" style={style}>
        {newsArray.map((news, index) => (
          <div className="newsCard" key={index}>
            <img
              src={news.urlToImage}
              style={{ width: "100px", height: "100px" }}
            />
            <div className="newsText">
              <p className="newstitle">{news.title}</p>
              <div>
                <div className="buttons">
                  <FiLink />
                  <a href={news.url} target="_blank" className="button">
                    기사보기
                  </a>
                  <button key={index}
                    className="scrapbutton"
                    onClick={(e) => {
                      console.log(e.target.key)
                      scrap(e.target.key);
                    }}
                  >
                    <FaFolderPlus />
                    스크랩
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledContainer>
  );
};

export default News;
