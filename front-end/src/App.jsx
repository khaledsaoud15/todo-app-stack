import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(true);
  const [input, setInput] = useState("");

  // Getting data from the database
  useEffect(() => {
    setClicked(false);
    const getData = async () => {
      const dataFromBS = await axios.get("http://localhost:3000/allTodos");
      setData(dataFromBS.data);
    };
    getData();
  }, [clicked === true]);

  // Add a new item to the list of data
  const addTodo = async () => {
    if (input === "") {
      return;
    }
    const inp = await axios.post("http://localhost:3000/todos", {
      todo: input,
    });
    console.log(inp);

    setInput("");

    setClicked(true);
  };

  const deleteTodo = async (id) => {
    await axios.delete("http://localhost:3000/todos/" + id);
    setClicked(true);
  };

  return (
    <Container>
      <Inputs>
        <Input
          type="text"
          placeholder="add TODO"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button onClick={addTodo}>Submit</Button>
      </Inputs>
      <Content>
        {data.map((t) => {
          return (
            <Todo>
              <T>{t.todo}</T>
              <Buttons>
                <Del onClick={() => deleteTodo(t._id)}>D</Del>
                <Upd>U</Upd>
              </Buttons>
            </Todo>
          );
        })}
      </Content>
    </Container>
  );
};

export default App;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 40%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 15px;
`;
const Inputs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  gap: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 80%;
  padding: 0 15px;
`;
const Button = styled.button`
  width: 20%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #1737e9;
  color: #fff;
  &:hover {
    background-color: #0126fa;
    cursor: pointer;
  }
  &:active {
    background-color: #1737e9;
    cursor: pointer;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    color: #1738e9;
    border-radius: 20px;
    background-color: #1738e9;
  }
  gap: 15px;
`;
const Todo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
const T = styled.h1`
  font-size: 20px;
`;
const Buttons = styled.div``;
const Del = styled.button``;
const Upd = styled.button``;
