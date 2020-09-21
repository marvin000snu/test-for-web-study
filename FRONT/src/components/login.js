import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {Link,Redirect} from "react-router-dom"
const fetch = require("node-fetch");
const StyledContainer = styled.div`
  display: grid;
  height : 100vh;
  grid-template-columns: 1fr 1fr;
  justify-items:center;
  align-items: center;
  .signIn{
    display : grid;
    grid-template-rows 3fr 1fr 1fr 2fr;
    justify-items : center
  }
  .signUp{
      display : grid;
      grid-template-rows 3fr 1fr 1fr 1fr 2fr;
      justify-items : center;
  }
  .signInText{
      font-size:30px;
      font-weight:bold;
      margin-bottom: 20px;
  }
  .signUpText{
    font-size:30px;
    font-weight:bold;
    margin-bottom: 20px;
  }
`;
const Login = () => {
  const [user_info, setuser_info] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
  });
  const [login_info, setlogin_info] = useState({
    user_password: "",
    user_email: "",
  });
  const [log, setlog] = useState(false)
  const logIn = async function (login_info) {
    const { user_password, user_email } = login_info;
    const results = await fetch("http://localhost:3001/api/login/login", {
      method: "POST",
      body: JSON.stringify({
        user_email: user_email,
        user_password: user_password,
      }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res=>res.json())
    console.log(results)
  if (results.message==="성공"){setlog(true)}
  };

  if (log) return <Redirect to="/"/>
  const signupfunction = async function (user_info) {
    const { user_name, user_email, user_password } = user_info;
    console.log(user_name, user_email, user_password);
    console.log(
      JSON.stringify({
        user_name: user_name,
        user_email: user_email,
        user_password: user_password,
      })
    );
    const results = await fetch("http://localhost:3001/api/login/signup", {
      method: "POST",
      body: JSON.stringify({
        user_name: user_name,
        user_email: user_email,
        user_password: user_password,
      }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log(results);
  };
  return (
    <StyledContainer>
      <div className="signIn">
        <div className="signInText">로그인</div>
        <div className="emailInput">
          <input
            placeholder="email"
            onChange={(e) =>
              setlogin_info({ ...login_info, user_email: e.target.value })
            }
          />
        </div>
        <div className="passwordInput">
          <input
            placeholder="password"
            onChange={(e) =>
              setlogin_info({ ...login_info, user_password: e.target.value })
            }
          />
        </div>
        <button style={{ width: "100%", height: "80%", marginTop: "20px" }} onClick={()=>logIn(login_info)}>
          로그인
        </button>
      </div>
      <div className="signUp">
        <div className="signUpText">회원가입</div>
        <div className="signUpusernameInput">
          <input
            placeholder="이름"
            onChange={(e) => {
              setuser_info({ ...user_info, user_name: e.target.value });
            }}
          />
        </div>
        <div className="signUpemailInput">
          <input
            placeholder="email"
            onChange={(e) => {
              setuser_info({ ...user_info, user_email: e.target.value });
            }}
          />
        </div>
        <div className="signUppasswordlInput">
          <input
            placeholder="password"
            onChange={(e) => {
              setuser_info({ ...user_info, user_password: e.target.value });
            }}
          />
        </div>
        <button
          style={{ width: "100%", height: "80%", marginTop: "20px" }}
          onClick={() => signupfunction(user_info)}
        >
          회원가입
        </button>
      </div>
    </StyledContainer>
  );
};

export default Login;
