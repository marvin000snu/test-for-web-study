import React from "react";
import styled, { createGlobalStyle } from "styled-components";c

const rou = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default rou;
