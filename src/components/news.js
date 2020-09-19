import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const StyledContainer = styled.div`
display: grid;
height : 100vh;
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
`;
const news = () => {
  return (
    <StyledContainer>
      
        <div className="nameofnews">스포츠<hr width="1000vh"/></div>
        <div>1</div>
      
    </StyledContainer>
  );
};

export default news;
