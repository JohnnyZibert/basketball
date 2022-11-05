import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectGetPlayers } from '../../Store/getPlayers/Selectors'
import { selectGetTeams } from '../../Store/getTeams/Selectors'
import { IPlayer, ITeam } from '../../types/types'
import { Loader } from '../Loader/Loader'
import styles from './InfoCard.module.scss'

interface IProps {
  cardInfo: Array<IPlayer> | Array<ITeam>
}
// interface IPlayersAndITeam {
//   foundationYear: string
//   teamName: string
//   imageUrl: string | undefined
//   name: string
//   number: number
//   position: string
//   team: number
//   birthday: string
//   height: number
//   weight: number
//   avatarUrl: string
//   id: number
// }

export const InfoCard: React.FC<IProps> = ({ cardInfo }) => {
  const { status } = useSelector(selectGetPlayers)
  const statusTeam = useSelector(selectGetTeams)
  const cx = classNames.bind(styles)
  return (
    <div className={styles.cardContainer}>
      <ul className={styles.cartInfoBox}>
        {cardInfo.map((item: any) => (
          <Link key={item.id} className={styles.infoCard} to={`${item.id}`}>
            <div
              className={
                item.avatarUrl
                  ? styles.InfoCardTopPlayer
                  : styles.InfoCardTeamTop
              }
            >
              <div className={styles.imgContainer}>
                <img
                  className={
                    item.avatarUrl ? styles.playerCard : styles.teamCard
                  }
                  src={item.avatarUrl ? item.avatarUrl : item.imageUrl}
                  alt={'logoPlayers'}
                />
              </div>
            </div>
            <div className={styles.infoCardBottom}>
              <span className={styles.playerName}>{item.name}</span> {''}
              {item.number && (
                <span className={styles.playerNumber}>#{item.number}</span>
              )}
              <br />
              {item.teamName ? (
                <span className={styles.teamName}>{item.teamName}</span>
              ) : (
                <div className={styles.foundationYear}>
                  <span>Year of foundation:</span>
                  <span>{item.foundationYear}</span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}
