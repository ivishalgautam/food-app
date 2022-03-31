import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getCuisines(category);
  }, [category]);

  const getCuisines = async (name) => {
    const check = localStorage.getItem(category);

    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=4e39c4af85fe484599871f95b44f519b&number=15&cuisine=${name}`
      );
      const data = await api.json();
      localStorage.setItem(category, JSON.stringify(data.results));
      setCuisine(data.results);
    }
  };

  return (
    <Grid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Link key={item.id} to={"/recipe/" + item.id}>
            <Card>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 2rem;

  a {
    text-decoration: none;
  }
`;

const Card = styled.div`
  margin: 1rem 0;
  min-height: 10rem;
  min-width: 10rem;
  border-radius: 1rem;
  overflow: hidden;
  filter: drop-shadow(0 0.5rem 0.25rem rgba(0, 0, 0, 0.5));

  img {
    border-radius: 1rem;
    width: 100%;
    object-fit: cover;
  }

  p {
    z-index: 10;
    width: 100%;
    height: 30%;
    text-align: center;
    font-size: 0.75rem;
    color: #fff;
  }
`;
