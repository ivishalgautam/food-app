=import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getCuisines = async (name) => {
      const check = localStorage.getItem(category);

      if (check) {
        setCuisine(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=44a39a5b8db0455e840941a206b6bf2e&number=15&cuisine=${name}`
        );
        const data = await api.json();
        localStorage.setItem(category, JSON.stringify(data.results));
        setCuisine(data.results);
      }
    };
    getCuisines(category);
  }, [category]);

  return (
    <Grid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 12rem));
  grid-gap: 2rem;
  justify-content: center;
  align-content: center;

  a {
    text-decoration: none;
  }
`;

const Card = styled.div`
  padding: 10px;
  margin: 1rem 0;
  min-width: 10rem;
  min-height: 13rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #1c1c1c;
  filter: drop-shadow(0 0.25rem 0.25rem rgba(0, 0, 0, 0.5));

  img {
    border-radius: 0.5rem;
    width: 100%;
    object-fit: cover;
  }

  p {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: #fff;
  }
`;
