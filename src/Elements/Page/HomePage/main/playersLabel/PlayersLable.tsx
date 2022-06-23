import { images } from '../../../../../assets/img/images'
import { PlayerBlock } from './PlayerBlock'
import styles from './PlayersLabel.module.scss'

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

const playersList: IPlayers[] = [
  {
    name: 'Jaylen Adams#',
    number: 10,
    position: ' ',
    team: 0,
    birthday: '2022-06-20T15:27:14.260Z',
    height: 0,
    weight: 0,
    avatarUrl: `${images.playerCard}`,
    id: 0,
  },
  {
    name: 'Kyle Anderson#',
    number: 1,
    position: 'string',
    team: 0,
    birthday: '2022-06-20T15:27:14.260Z',
    height: 0,
    weight: 0,
    avatarUrl: `${images.playerCard}`,
    id: 0,
  },
  {
    name: 'Malik Beasley#',
    number: 5,
    position: 'string',
    team: 0,
    birthday: '2022-06-20T15:27:14.260Z',
    height: 0,
    weight: 0,
    avatarUrl: `${images.playerCard}`,
    id: 0,
  },
  {
    name: 'Troy Daniels#',
    number: 30,
    position: 'string',
    team: 0,
    birthday: '2022-06-20T15:27:14.260Z',
    height: 0,
    weight: 0,
    avatarUrl: `${images.playerCard}`,
    id: 0,
  },
  {
    name: 'Danilo Gallinari#',
    number: 8,
    position: 'string',
    team: 0,
    birthday: '2022-06-20T15:27:14.260Z',
    height: 0,
    weight: 0,
    avatarUrl: `${images.playerCard}`,
    id: 0,
  },
  {
    name: 'Al Horford#',
    number: 42,
    position: 'string',
    team: 0,
    birthday: '2022-06-20T15:27:14.260Z',
    height: 0,
    weight: 0,
    avatarUrl: `${images.playerCard}`,
    id: 0,
  },
]

export const PlayersLabel = () => {
  return (
    <div className={styles.playersWrapper}>
      {playersList.map((playersList, idx) => (
        <PlayerBlock key={idx} {...playersList} />
      ))}
    </div>
  )
}
