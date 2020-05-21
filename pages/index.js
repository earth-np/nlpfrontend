import React, { useEffect, useState } from "react";
import css from "@emotion/css";
import styled from "styled-components";
import { Input, Card, Col, Row, Skeleton, Avatar } from "antd";
import axios from "axios";
import Particles from "react-particles-js";
import "antd/dist/antd.css";

import "./style.css";

const { Search } = Input;

const { Meta } = Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #0e0e0e; */
  background-image: linear-gradient(#2b2b2b, #242424, #171717);
  color: #ffffff;
  padding-bottom: 4rem;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  font-size: 3rem;
`;

const CardContainer = styled(Row)`
  margin-top: 4rem !important;
  max-width: 1440px;
`;

const MovieCard = styled(Card)`
  width: 260px;
  height: 440px;
`;

const MovieImage = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ url }) => `url('${url}')`};
  height: 100%;
`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const skeletonList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  useEffect(() => {
    axios.get(`http://nangchana.joetokens.com/api/movie`).then(({ data: { movies } }) => {
      setMovies(movies);
      setLoading(false);
    });
  }, []);

  const handleSearch = async (search) => {
    setLoading(true);
    axios
      .get(`http://nangchana.joetokens.com/api/movie/text?query=${search}`)
      .then(({ data: { movies } }) => {
        setMovies(movies);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Particles
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
        `}
        params={{
          particles: {
            number: {
              value: 60,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <img
        src="/logo.png"
        css={css`
          width: 10rem;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          z-index: 0;
        `}
      />
      <Title>กรุณากรอกคำถามด้านล่างเพื่อทายชื่อหนัง</Title>
      <Search
        placeholder="กรุณากรอกคำถาม..."
        enterButton
        style={{ width: 600 }}
        onSearch={handleSearch}
      />
      <CardContainer gutter={[4, 24]}>
        {!loading
          ? movies.map((movie, i) => (
              <Col
                key={i}
                span={8}
                css={css`
                  display: flex;
                  justify-content: center;
                `}
              >
                <MovieCard title={movie.name} bordered={false}>
                  {movie.imageUrl ? (
                    <MovieImage url={movie.imageUrl} />
                  ) : (
                    <div
                      css={css`
                        display: flex;
                        justify-content: center;
                      `}
                    >
                      Picture
                    </div>
                  )}
                </MovieCard>
              </Col>
            ))
          : skeletonList.map((item, i) => (
              <Col
                key={i}
                span={8}
                css={css`
                  display: flex;
                  justify-content: center;
                `}
              >
                <MovieCard bordered={false}>
                  <Skeleton
                    loading={loading}
                    active
                    css={css`
                      padding: 4rem;
                    `}
                  >
                    <Meta title="Card title" description="This is the description" />
                  </Skeleton>
                </MovieCard>
              </Col>
            ))}
      </CardContainer>
    </Container>
  );
};

export default App;
