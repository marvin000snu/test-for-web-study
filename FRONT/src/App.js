
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "./components/sidebar";
import { BrowserRouter ,Route } from 'react-router-dom';
import scrap from "./components/scrap"
import Main from "./components/main"
import news from "./components/news"
import Login from './components/login'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 9fr;
}
`;
const App = () => {
  return (
    <StyledContainer>
      <BrowserRouter>
      <Sidebar />
      <div>
      <Route exact path ="/" component={Main}/>
      <Route exact path ="/scrap" component={scrap}/>
      <Route exact path ="/home" component={Main}/>
      <Route exact path ="/news" component={news}/>
      <Route exact path ="/login" component={Login}/>
      </div>
      </BrowserRouter>
    </StyledContainer>
  );
};

export default App;
