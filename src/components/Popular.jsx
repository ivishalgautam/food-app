import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

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
        `https://api.spoonacular.com/recipes/random?apiKey=f5a69e0e7a2c4b17ae32d7b96022093d&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log("object");
    }
  };
  console.log(popular);
  return (
    <Wrapper>
      <h2>Popular picks</h2>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {popular.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <Card>
                <p>{item.title}</p>
                <img src={item.image} alt="" />
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2rem 4rem;

  h2 {
    margin: 0.1rem 0;
    color: #fff;
  }
`;

const Card = styled.div`
  margin: 1rem 0;
  min-height: 12rem;
  min-width: 12rem;
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
