import styled from 'styled-components';

export const AddButton = styled.button`
  cursor: pointer;
  width: 150px;
  background-color: limegreen;
  border: 1px solid greenyellow;
  border-radius: 6px;
  padding: 10px;
  color: #fff;
  :hover {
    background-color: green;
  }
  margin-bottom: 30px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: .5rem;
  padding: 4px 4px;
  width: 400px;
  font-size: larger;
`;

export const CommentsContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 450px;
`;

export const Label = styled.label`
  padding-bottom: 10px;
`;

export const CommentsList = styled.div`
  
`;