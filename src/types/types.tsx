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
  id: number | string
}
export interface ITeamData {
  data: {
    name: string
    foundationYear: number
    division: string
    conference: string
    imageUrl: string
  }
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

export interface IPlayer {
  name: string
  number: number
  position: string
  team: number
  birthday: string
  height: number
  weight: number
  avatarUrl: string
  id: number | string
}

export interface IPlayersCard {
  data: IPlayer[]
  count: number
  page: number
  size: number
}

export interface IPlayersSlice {
  players: IPlayersCard
  status: Status
}
export interface IOnePlayerData {
  data: IPlayer
  status: Status
}
export interface IOneTeam {
  data: ITeam
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

export interface IOption {
  value: string | number | undefined
  label: string | number | undefined
}

export interface IOptionPageSize {
  value: string
  label: string
}
