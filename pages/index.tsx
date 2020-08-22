import Link from 'next/link';
import React from 'react';
import Axios from 'axios';

import {MainLayout} from '../components/MainLayout';
import {Post} from '../interfaces/post';
import {LatestPost, PostsTable, PostsList, PostsLink} from '../styles';

interface PostsPageProps {
  posts: Post[]
}

function Index({ posts }: PostsPageProps) {

  if (!posts) {
    return (<MainLayout>
      <p>No posts found</p>
      <Link href={'/posts/new'}><a>create new one</a></Link>
    </MainLayout>)
  }

  return (
    <MainLayout title={'Posts'}>
      <LatestPost>Latest Posts</LatestPost>
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

Index.getInitialProps = async () => {

  const response = await Axios.get(`${process.env.API_URL}/posts`);
  const posts: Post[] = await response.data;

  return {
    posts: posts.length > 5 ? posts.slice(posts.length - 5).reverse() : posts.reverse()
  };
}

export default Index;
