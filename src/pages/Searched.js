import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

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
      {searched.length != 0 ? (
        <Grid>
          {searched.map((item) => {
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
      ) : (
        <NotFound>Nothing found</NotFound>
      )}
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 10rem));
  grid-gap: 2rem;
  justify-content: center;
  align-content: center;

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

const NotFound = styled.h1`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(0%, -20%);
`;