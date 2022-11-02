import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import { IPlayers, ITeam } from '../../types/types'
import styles from './InfoCard.module.scss'

interface IProps {
  cardInfo: Array<IPlayers> | Array<ITeam>
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
