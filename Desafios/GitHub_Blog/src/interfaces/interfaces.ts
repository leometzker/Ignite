export interface IUser {
  avatar_url: string
  login: string
  company: string
  name: string
  followers: number
  bio: string
  html_url: string
}

export interface ICard {
  title: string
  url: string
  createdAt: Date
  id: number
  body: string
}
