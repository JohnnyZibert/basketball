import React from 'react'

import { getAge } from '../../../utils/utils'
import styles from './OnePage.module.scss'

interface IProps {
  teamName?: string
  playerName?: string
  division?: string
  imageUrl?: string
  foundationYear?: number
  conference?: string
  number?: number | string
  position?: string
  avatarUrl?: string
  birthday?: string
  height?: number | string
  weight?: number | string
  teamNameForPlayer?: string | undefined
}

export const OnePage: React.FC<IProps> = ({
  teamName,
  playerName,
  division,
  imageUrl,
  conference,
  foundationYear,
  number,
  position,
  avatarUrl,
  birthday,
  height,
  weight,
  teamNameForPlayer,
}) => {
  return (
    <div className={styles.oneTeamsContainer}>
      <div className={styles.wrapInfoTeam}>
        {' '}
        <div className={styles.teamInfo}>
          <div className={teamName ? styles.logoTeams : styles.logoPlayers}>
            <img
              src={teamName ? imageUrl : avatarUrl}
              className={teamName && styles.imgTeam}
            />
          </div>
          <div className={styles.descriptionTeam}>
            <div className={styles.nameContainer}>
              {teamName ? (
                teamName
              ) : (
                <div className={styles.nameTeam}>
                  {playerName}{' '}
                  <span className={styles.numberPlayer}>#{number}</span>
                </div>
              )}
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.leftBlock}>
                <div className={styles.foundation}>
                  <div className={styles.teamData}>
                    <div className={styles.label}>
                      {teamName ? 'Year of foundation' : 'Position'}
                    </div>
                    <div className={styles.personInfo}>
                      {teamName ? foundationYear : position}
                    </div>
                  </div>
                </div>
                <div className={styles.teamData}>
                  <div className={styles.label}>
                    {teamName ? 'Conference' : 'Height'}
                  </div>
                  <div className={styles.personInfo}>
                    {teamName ? conference : height}
                  </div>
                </div>
                {playerName && (
                  <div className={styles.age}>
                    <div className={styles.label}> {playerName && 'Age'}</div>
                    <div className={styles.personInfo}>
                      {getAge(String(birthday))}
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.rightBlock}>
                <div className={styles.teamData}>
                  <div className={styles.label}>
                    {' '}
                    {teamName ? 'Division' : 'Team'}
                  </div>
                  <div className={styles.personInfo}>
                    {teamName ? division : teamNameForPlayer}
                  </div>
                </div>
                {playerName && (
                  <div className={styles.teamData}>
                    <div className={styles.label}>
                      {' '}
                      {playerName && 'Weight'}
                    </div>
                    <div className={styles.personInfo}>{weight}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
