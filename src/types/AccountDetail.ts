export type AccountDetailType = {
    id: number,
    name: string
    avatar: { tmdb: { avatar_path: string } }
}

export type tmdbType = {
    avatar_path: string
}