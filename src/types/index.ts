export interface Hero {
    index: number,
    name: string,
    img: string,
    url: string
}

export interface Characters{
    [key: string]: Hero
}