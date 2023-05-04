import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

export default function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=44a39a5b8db0455e840941a206b6bf2e&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      return data.recipes;
    }
  };
  return (
    <Wrapper>
      <h3>Vegetarian picks</h3>
      <Splide
        options={{
          perPage:
            window.innerWidth < 400 ? 1 : window.innerWidth < 630 ? 2 : 3,
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
        {veggie.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <Card>
                  <p>{item.title}</p>
                  <img src={item.image} alt="" />
                  <Gradient />
                </Card>
              </Link>
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
