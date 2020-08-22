import Link from 'next/link';
import React from 'react';
import Axios from 'axios';

import {MainLayout} from '../components/MainLayout';
import {Post} from '../interfaces/post';
import {PostsPage, PostsTable, PostsList, PostsLink} from '../styles/posts';

interface PostsPageProps {
  posts: Post[]
}

function Posts({ posts }: PostsPageProps) {

  if (!posts) {
    return (<MainLayout>
      <p>No posts found</p>
      <Link href={'/posts/new'}><a>create new one</a></Link>
    </MainLayout>)
  }

  return (
    <MainLayout title={'Posts'}>
      <PostsPage>Posts Page</PostsPage>
      <PostsTable>
        {posts.map((post) => (
          <PostsList key={post.id}>
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
              <PostsLink>{post.title}</PostsLink>
            </Link>
          </PostsList>
          )
        )}
      </PostsTable>
    </MainLayout>
  )
}

Posts.getInitialProps = async () => {

  const response = await Axios.get(`${process.env.API_URL}/posts`);
  const posts: Post[] = await response.data;

  return {
    posts
  };
}

export default Posts;