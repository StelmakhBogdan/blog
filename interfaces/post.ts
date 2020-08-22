export interface Post {
    id: string | number,
    title?: string,
    body: string,
    comments: [Comment]
}

export interface Comment {
    id: number,
    postId: number,
    body: string
}

export interface PostPageProps {
    post: Post,
    isRedirect: boolean
}