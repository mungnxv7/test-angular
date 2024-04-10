export interface Posts{
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number
}
export interface ResponsePosts{
posts:Posts[]
skip: number
total: number
limit: number
}