import {useState} from 'react';
import Axios from 'axios';

import {AddButton, CommentsContainer, Label, Input, CommentsList} from '../styles/comments';

export default function Comments({ postId, data: initialData }) {
  const [body, setBody] = useState('');
  const [data, setData] = useState(initialData || []);
  console.log(initialData);

  const handleCreateComment = async () => {
    if (body && body.length) {
      try {
        const res = await Axios.post(`https://simple-blog-api.crew.red/comments`, {postId, body});
        console.log(res.data);
        setData([...data, res.data]);
        setBody('');
      } catch (e) {
        alert(e);
      }
    } else alert("Please fill the form");
  }

  return (
    <CommentsContainer>
      <Label htmlFor='comment'>Comment</Label>
      <Input
        type="text"
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Write comment"
      />
      <AddButton
        onClick={handleCreateComment}
        type="button"
      >
        Add comment
      </AddButton>

      {data && data.length > 0 &&
        data.map((o, i) => (
          <CommentsList key={i}>
            {o.body}
            <hr/>
          </CommentsList>
        ))
      }

    </CommentsContainer>
  )
}