import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

export default function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=0f5408f54a25461eaa597db8e08eb174&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  return (
    <Wrapper>
      <h3>Popular picks</h3>
      <Splide
        options={{
          perPage:
            window.innerWidth < 400
              ? 1
              : window.innerWidth < 630
              ? 2
              : window.innerWidth < 825
              ? 3
              : 4,
          arrows:
            window.innerWidth < 400
              ? true
              : window.innerWidth < 630
              ? true
              : false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {popular.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <Card>
                <Link to={"/recipe/" + item.id}>
                  <p>{item.title}</p>
                  <img src={item.image} alt="" />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1rem;

  h3 {
    margin: 0.1rem 0;
    color: #fff;
  }
`;

const Card = styled.div`
  margin: 1rem 0;
  min-height: 10rem;
  min-width: 10rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  filter: drop-shadow(0 0.5rem 0.25rem rgba(0, 0, 0, 0.5));

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 10;
    width: 100%;
    height: 30%;
    text-align: center;
    transform: translateX(-50%);
    font-size: 0.9rem;
    color: #fff;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  z-index: 4;
`;
