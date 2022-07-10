export type PostApiType = {
    body: string
    id: number
    title: string
    userId: number
}

export type CommentApiType = {
    body: string
    id: number
    name: string
    postId: number
    email: string
}

export interface PostApiData {
    data: PostApiType[] | null,
    error: string,
    loading: boolean,
    request: () => void
}

export interface CommentApiData {
    data: CommentApiType[] | null,
    error: string,
    loading: boolean,
    request: () => void
}

export interface Response {
    config: object
    data: []
    headers: object
    request: object
    status: number
    statusText: string
}