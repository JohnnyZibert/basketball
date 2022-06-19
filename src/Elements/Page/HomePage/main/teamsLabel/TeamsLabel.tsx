import { images } from '../../../../../assets/img/images'
import { CardBlock } from './CardBlock'
import styles from './TeamsLabel.module.scss'

const teamList = [
  {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: `${images.teamsCard}`,
    id: 0,
  },
  {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: `${images.teamsCard}`,
    id: 0,
  },
  {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: `${images.teamsCard}`,
    id: 0,
  },
  {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: `${images.teamsCard}`,
    id: 0,
  },
  {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: `${images.teamsCard}`,
    id: 0,
  },
  {
    name: '',
    foundationYear: 0,
    division: '',
    conference: '',
    imageUrl: `${images.teamsCard}`,
    id: 0,
  },
]

export const TeamsLabel = () => {
  return (
    <div className={styles.cardWrapper}>
      {teamList.map((teamList, idx) => (
        <CardBlock key={idx} {...teamList} />
      ))}
    </div>
  )
}
