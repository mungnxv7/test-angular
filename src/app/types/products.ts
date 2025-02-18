export interface Products{
brand: string
category: string
description: string
discountPercentage: number
id: number
images: string[]
price: number
rating: number
stock: number
thumbnail:string
title: string
}

export type ResponseProducts ={
products:Products[]
skip: number
total: number
limit: number
}
