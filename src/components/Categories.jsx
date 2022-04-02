import { GiSpoon, GiNoodles, GiHamburger, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <List>
      <ListItem to="/cuisine/Indian">
        <GiSpoon />
        <Title>Indian</Title>
      </ListItem>
      <ListItem to="/cuisine/Thai">
        <GiNoodles />
        <Title>Thai</Title>
      </ListItem>
      <ListItem to="/cuisine/American">
        <GiHamburger />
        <Title>American</Title>
      </ListItem>
      <ListItem to="/cuisine/Japanese">
        <GiChopsticks />
        <Title>Japanese</Title>
      </ListItem>
    </List>
  );
}

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const ListItem = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  height: 4.5rem;
  width: 4.5rem;
  margin: 0 1rem;
  background-color: #1c1c1c;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  filter: drop-shadow(0 0.15rem 0.15rem hsl(0, 0%, 0%));
  &.active {
    background: linear-gradient(to right, #4776e6, #8e54e9);
  }
`;

const Title = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  margin-top: 4px;
`;
