export interface Quotes{
    id: number,
    quote: string
    author: string
}
export interface ResponseQuotes{
quotes:Quotes[]
skip: number
total: number
limit: number
}