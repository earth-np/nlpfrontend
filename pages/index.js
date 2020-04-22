import React from "react";
import css from "@emotion/css";
import styled from "styled-components";
import { Input, Card, Col, Row } from "antd";
import "antd/dist/antd.css";

import "./style.css";

const { Search } = Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  height: 100vh;
`;

const Title = styled.div`
  margin: 4rem 0;
  font-size: 3rem;
`;

const CardContainer = styled(Row)`
  margin-top: 4rem;
`;

const MovieCard = styled(Card)`
  width: 250px;
  height: 300px;
`;

const App = () => (
  <Container>
    <Title>MovieGuesser</Title>
    <Search
      placeholder="Question..."
      enterButton
      size="large"
      style={{ width: 600 }}
      onSearch={(value) => console.log(value)}
    />
    <CardContainer gutter={32}>
      <Col span={8}>
        <MovieCard title="Movie name" bordered={false}>
          Card content
        </MovieCard>
      </Col>
      <Col span={8}>
        <MovieCard title="Movie name" bordered={false}>
          Card content
        </MovieCard>
      </Col>
      <Col span={8}>
        <MovieCard title="Movie name" bordered={false}>
          Card content
        </MovieCard>
      </Col>
    </CardContainer>
  </Container>
);

export default App;
