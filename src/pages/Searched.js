import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Searched = () => {
  const params = useParams();
  const [searched, setSearched] = useState([]);

  async function getSearched() {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=4e39c4af85fe484599871f95b44f519b&number=15&query=${params.search}`
    );
    const data = await api.json();
    setSearched(data.results);
    console.log(searched.length);
  }

  useEffect(() => {
    getSearched();
  }, [params.search]);

  return (
    <>
      {searched.length !== 0 ? (
        <Grid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {searched.map((item) => {
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
      ) : (
        <NotFound>Nothing found</NotFound>
      )}
    </>
  );
};

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

const NotFound = styled.h1`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(0%, -20%);
`;
