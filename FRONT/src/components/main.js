import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {Router} from "react-router-dom"

const StyledContainer = styled.div`
.main{
    background-color: red;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    display: grid;
    grid-template-rows : 40vh 40vh 20vh;
    justify-items:center;
    align-items: center;
.subText:before {
    animation: animate infinite 6s; 
    content : "dsfsdf"; 
    font-size: 100px;
    font : "NanumSquareWeb";
  }
  .mainText {
    font-size: 100px;
    margin 300px 10px 10px 10px;
    align-item : top;
    font-family : "NanumSquareWeb"
  }
  @keyframes example {
    from {background-color: #9523E8;}
    to {background-color: #2454F2;}
  }
  @keyframes animate { 
  
    0% { 
        content: "시사"; 
    } 
    14% { 
        content: "경제"; 
    } 
    28% { 
        content: "연예"; 
    }
    42% { 
      content: "정치"; 
    }
    57% { 
      content: "스포츠"; 
    } 
    71% { 
      content: "세계"; 
    } 
    85% { 
      content: "문화"; 
    }   
    100% { 
      content: "시사"; 
    }   
} 
`;
const Main = () => {
  return (
    <StyledContainer>
      <div className="main">
        <h1 className="mainText">오늘 읽을 뉴스는?</h1>
        <div className="subText"></div>
      </div>
    </StyledContainer>
  );
};

export default Main;
