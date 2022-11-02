export interface IOnePlayerData {
  data: IPlayer
  status: Status
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface IStatus {
  status: Status
}

export interface ITeam {
  name: string
  foundationYear: number
  division: string
  conference: string
  imageUrl: string
  id: number
}

export interface ITeamsCard {
  data: ITeam[]
  count: number
  page: number
  size: number
}

export interface ITeamsSlice {
  teams: ITeamsCard
  status: Status
}
export interface IPlayers {
  name: string
  number: number
  position: string
  team: number
  birthday: string
  height: number
  weight: number
  avatarUrl: string
  id: number
}

export interface IPlayersCard {
  data: IPlayers[]
  count: number
  page: number
  size: number
}

export interface IPlayersSlice {
  players: IPlayersCard
  status: Status
}
export interface IOneTeam {
  teamData: {
    name: string
    foundationYear: number
    division: string
    conference: string
    imageUrl: string
    id: number
  }
  status: Status
}

export interface IPlayer {
  name: string
  number: number | string
  position: string
  team: number
  birthday: string
  height: number | string
  weight: number | string
  avatarUrl: string
  id: number
}
export interface IOnePlayerData {
  data: IPlayer
  status: Status
}
export interface IUserForm {
  name: string
  foundationYear: number
  division: string
  conference: string
  imageUrl: string
}
export interface AuthState {
  dataProfile: {
    name: string
    avatarUrl: string
    token: string
  }
  status: Status
}
export interface IAuthForm {
  name: string
  login: string
  password: string
  repeatPassword: string
  token: string
}
export interface IPostPhoto {
  photosUpload: string
  status: Status
}

export interface IAddPlayersForm {
  name: string
  number: number
  position: string
  team: number
  birthday: string
  height: number
  weight: number
  avatarUrl: string
}

export interface IOptionType {
  value: string | number
  label: string
}
