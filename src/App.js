// App.js

import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(120deg, #e2f0e3 0%, #cce6dd 100%);
    min-height: 100vh;
    transition: background 0.5s;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
  border-radius: 18px;
  padding: 40px 32px 28px 32px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.div`
  font-size: 2.4rem;
  color: #388e7a;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.div`
  font-size: 1.1rem;
  color: #678a7d;
  margin-bottom: 12px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  button {
    flex: 1;
    padding: 12px 8px;
    border-radius: 12px;
    border: 1px solid #b2d8cc;
    background-color: #f2fbfa;
    font-weight: 600;
    color: #388e7a;
    cursor: pointer;
    &:hover {
      background-color: #dbeee4;
    }
    &.active {
      background-color: #b2d8cc;
      color: #246a5f;
    }
  }
`;

const Input = styled.input`
  border: 1px solid #b2d8cc;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 8px;
  width: 100%;
  font-size: 1rem;
  background: #f8fcfa;
  transition: border 0.2s;
  &:focus {
    border-color: #388e7a;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #56ab91, #8ecdbe);
  border: none;
  color: white;
  padding: 14px 0;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 6px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(88, 175, 153, 0.08);
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(90deg, #3e7d69, #70bcae);
  }
`;

const FooterText = styled.p`
  font-size: 0.98rem;
  color: #5c8276;
  margin: 18px 0 0 0;
  text-align: center;
`;

const messages = {
  awareness: "Welcome! MoodGarden helps you check in with your feelings and discover mindful practices for mental clarity.",
  productivity: "Boost your focus and track progress toward your goals—get started with MoodGarden's productivity tools.",
  storytelling: "Share your unique story in a safe space—MoodGarden supports your personal journey with kindness.",
  default: "Nurture your mental wellness and growth with MoodGarden."
};

export default function App() {
  const [intent, setIntent] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleIntent = (selected) => setIntent(selected);

  // Handle login (this is only a UI demo, actual authentication logic needed)
  const handleLogin = (e) => {
    e.preventDefault();
    alert(
      `Logged in as: ${email}\nIntent: ${intent || "None selected"}\n(Here you would redirect to the tailored dashboard)`
    );
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Logo>MoodGarden</Logo>
          <Subtitle>
            {intent ? messages[intent] : messages.default}
          </Subtitle>
          <ButtonGroup>
            <button
              className={intent === "awareness" ? "active" : ""}
              onClick={() => handleIntent("awareness")}
            >
              Mental Awareness
            </button>
            <button
              className={intent === "productivity" ? "active" : ""}
              onClick={() => handleIntent("productivity")}
            >
              Productivity Boost
            </button>
            <button
              className={intent === "storytelling" ? "active" : ""}
              onClick={() => handleIntent("storytelling")}
            >
              Storytelling
            </button>
          </ButtonGroup>
          <form onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              required
            />
            <SubmitButton type="submit">Login</SubmitButton>
          </form>
          <FooterText>
            Not a member? <a href="/signup" style={{ color: '#388e7a', textDecoration: 'underline' }}>Sign up here</a>
          </FooterText>
        </Card>
      </Container>
    </>
  );
}


