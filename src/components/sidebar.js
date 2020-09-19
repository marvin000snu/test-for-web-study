import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  width: 100%;
  height: 100vh;
  background-color: skyblue;
  font-size: 20px;
  .logotext {
    display: grid;
    height: 200px;
    grid-template-rows: 3fr 1fr;
    justify-items: center;
    align-items: center;
    .title {
      font-size: 25px;
    }
    .logo {
      padding: 50px 10px 10px 10px;
    }
  }
  .menulist {
    li{
      margin: 0px 0px 30px 0px;
    }
    .news {
      cursor: pointer;
    }
  }
`;
const Sidebar = () => {
  const [newsClicked, setnewsClicked] = useState(1);
  return (
    <StyledContainer className="Sidebar">
      <div className="logotext">
        <img
          className="logo"
          src="https://yt3.ggpht.com/-gjxoCu8Fu3c/AAAAAAAAAAI/AAAAAAAAAAA/Uji17DdykF4/s900-c-k-no/photo.jpg"
          width="100px"
        ></img>
        <div className="title">NewsScrapper</div>
      </div>
      <ul className="menulist">
        <li>home</li>
        <li
          className="news"
          onClick={() => {
            if (newsClicked === 1) {
              setnewsClicked(0);
            }
            if (newsClicked === 0) {
              setnewsClicked(1);
            }
          }}
        >
          news
        </li>
        <div collapsed={newsClicked} hidden={newsClicked}><ul>
          <li>스포츠</li>
          <li>경제</li>
          <li>정치</li>
          <li>사회</li>
          <li>연예</li>

          </ul></div>
        <li>scrabbed</li>
        <li>login</li>
      </ul>
    </StyledContainer>
    
  );
};

export default Sidebar;
