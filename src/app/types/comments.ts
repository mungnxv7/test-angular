export interface Comment{
    id: number,
    body: string,
    postId: number,
    user: {
    id: number,
    username: string
    }
}

export interface ResponseComment{
comments:Comment[]
skip: number
total: number
limit: number
}