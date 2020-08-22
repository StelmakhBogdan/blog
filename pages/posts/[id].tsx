import {useEffect} from 'react';
import Router, {useRouter} from 'next/router';
import Axios from 'axios';
import {NextPageContext} from 'next';

import {MainLayout} from '../../components/MainLayout';
import {Post as PostInterface, PostPageProps} from '../../interfaces/post';
import Comments from '../comments';
import {PostContainer, Button} from '../../styles/post'


function Post({ post, isRedirect }: PostPageProps) {
  const router = useRouter();

  useEffect(() => {
    if (isRedirect) {
      Router.push('/posts');
    }
  }, [isRedirect]);

  if (!post) {
    return <MainLayout>
      <p>Loading...</p>
    </MainLayout>
  }

  const onClickBackToHome = () => {
    Router.push('/posts');
  }

  // @ts-ignore
  return (
    <MainLayout title={'Post Page'}>
      <PostContainer>
        <h1>{post.title}</h1>
        <hr/>
        <p>{post.body}</p>
        <Button
          onClick={onClickBackToHome}
        >
          Back to Posts
        </Button>
      </PostContainer>

      <Comments postId={router.query.id} data={post.comments}/>
    </MainLayout>
  )
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async ({ query }: PostNextPageContext) => {
  try {
    const response = await Axios.get(`${process.env.API_URL}/posts/${query.id}?_embed=comments`);
    const post: PostInterface = response.data;
    console.log(post);
    return {
      post
    }
  } catch (e) {
    console.log('Error ', e);
    return { isRedirect: true };
  }
}

export default Post;

// export async function getServerSideProps({ query }) {
//
//   const response = await fetch(`https://simple-blog-api.crew.red/posts/${query.id}`);
//   const post = await response.json();
//
//   return {
//     props: {post}
//   }
// }