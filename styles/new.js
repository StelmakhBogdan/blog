import styled from 'styled-components';

export const PostTitle = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;  
`;

export const InputTitle = styled.input`
  padding: 4px 4px;
  width: 400px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: .5rem;
`;

export const PostTextArea = styled.textarea`
  width: 400px;
  height: 200px;
  padding: 4px 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddButton = styled.button`
  cursor: pointer;
  background-color: limegreen;
  border: 1px solid greenyellow;
  border-radius: 6px;
  padding: 10px;
  color: #fff;
  :hover {
    background-color: green;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;