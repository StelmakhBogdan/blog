import styled from 'styled-components';

export const LatestPost = styled.h1`
  text-align: center;
  color: black;
`;

export const PostsTable = styled.ul`
  padding: 0px;
`;

export const PostsList = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  color: black;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: .5rem;
`;

export const PostsLink = styled.a`
  cursor: pointer;
  color: black;
  font-size: medium;
`;