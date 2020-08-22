import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Axios from 'axios';

import {MainLayout} from '../../components/MainLayout';
import {PostTitle, Form, InputTitle, PostTextArea, ButtonContainer, AddButton} from '../../styles/new';


export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();

  const HandleCreatePost = async () => {
    if (!!title && !!body) {
      const res = await Axios.post(`https://simple-blog-api.crew.red/posts`, {title, body});
      await router.push(`/posts/${res.data.id}`)
    } else alert("Please fill the form");
  }

  return (
    <MainLayout title={'New Post'}>
      <PostTitle>Create new post</PostTitle>
      <Form>
        <br/>
        <InputTitle
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Title"/>
        <PostTextArea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Text..."/>
      </Form>
      <ButtonContainer>
        <AddButton
          onClick={HandleCreatePost}
          type="button"
        >
          Add Post
        </AddButton>
      </ButtonContainer>
    </MainLayout>
  )
}