import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate("/search/" + input);
  }

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch onClick={submitHandler} />
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Search"
          value={input}
        />
      </div>
    </Form>
  );
}

const Form = styled.form`
  width: 100vw;
  height: 3rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: relative;
    min-height: 80%;
    width: 20rem;

    ${
      "" /* @media only screen and (max-width: 375px) {
      width: 90%;
    } */
    }

    input {
      position: absolute;
      height: 100%;
      width: 100%;
      background: linear-gradient(to right, #4776e6, #8e54e9);
      border-radius: 50px;
      padding: 1rem 3rem;
      font-size: 0.9rem;
      font-weight: 600;
      border: none;
      outline: none;
      color: #fff;
      filter: drop-shadow(0 0.25rem 0.25rem hsl(0, 0%, 0%));

      &::placeholder {
        color: #fff;
      }
    }
  }

  svg {
    color: #777;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 2;
    transform: translate(80%, -50%);
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      color: #000;
    }
  }
`;
