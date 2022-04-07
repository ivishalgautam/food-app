import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Recipe() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [activeTab, setActiveTab] = useState("summary");
  const params = useParams();

  const getDetails = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=4e39c4af85fe484599871f95b44f519b`
    );
    const data = await api.json();
    setRecipeDetails(data);
    console.log(recipeDetails);
  };

  useEffect(() => {
    getDetails();
  }, [params.name]);

  return (
    <Details
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image>
        <h4>{recipeDetails.title}</h4>
        <img src={recipeDetails.image} alt="" />
      </Image>

      <Text>
        <Buttons>
          <button
            className={activeTab === "summary" ? "active" : ""}
            onClick={() => {
              setActiveTab("summary");
            }}
          >
            Summary
          </button>
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => {
              setActiveTab("instructions");
            }}
          >
            Instructions
          </button>
        </Buttons>

        <Info>
          {activeTab === "summary" ? (
            <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></p>
          ) : (
            <p
              dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
            ></p>
          )}
        </Info>
      </Text>
    </Details>
  );
}

const Details = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem 2rem;
  background-color: #1c1c1c;
  border-radius: 1rem;
  filter: drop-shadow(0 0.25rem 0.25rem rgba(0, 0, 0, 0.5));

  img {
    height: 12rem;
    border-radius: 0.3rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    img {
      height: 15rem;
      border-radius: 0.3rem;
      margin-right: 1rem;
      transition: all 0.3s ease-in-out;
    }
  }

  @media only screen and (max-width: 700px) {
    img {
      height: 12rem;
      border-radius: 0.3rem;
      margin-right: 1rem;
    }
  }
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 1rem 0;
  }
`;

const Text = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 2rem;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    padding: 0.7rem 3rem;
    background-color: transparent;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid #fff;
    outline: none;
    margin-right: 1rem;

    &.active {
      border: none;
      background: linear-gradient(to right, #4776e6, #8e54e9);
      color: #fff;
    }
  }
`;

const Info = styled.div`
  p {
    font-size: 0.8rem;
    padding: 0 2rem;
    line-height: 2;
  }
`;
