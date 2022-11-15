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
  birthday: Date | null
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
  return teamName ? (
    <div className={styles.oneTeamsContainer}>
      <div className={styles.wrapInfoTeam}>
        <div className={styles.teamInfo}>
          <div className={styles.logoTeams}>
            <img src={imageUrl} className={styles.imgTeam} />
          </div>
          <div className={styles.descriptionTeam}>
            <div className={styles.nameContainer}>{teamName}</div>
            <div className={styles.infoBlock}>
              <div className={styles.leftBlock}>
                <div className={styles.foundation}>
                  <div className={styles.teamData}>
                    <div className={styles.label}>{'Year of foundation'}</div>
                    <div className={styles.personInfo}>{foundationYear}</div>
                  </div>
                </div>
                <div className={styles.teamData}>
                  <div className={styles.label}>{'Conference'}</div>
                  <div className={styles.personInfo}>{conference}</div>
                </div>
              </div>
              <div className={styles.rightBlock}>
                <div className={styles.teamData}>
                  <div className={styles.label}>{'Division'}</div>
                  <div className={styles.personInfo}>{division}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.oneTeamsContainer}>
      <div className={styles.wrapInfoTeam}>
        <div className={styles.teamInfo}>
          <div className={styles.logoPlayers}>
            <img src={avatarUrl} className={styles.logoPlayers} />
          </div>
          <div className={styles.descriptionTeam}>
            <div className={styles.nameContainer}>
              <div className={styles.namePlayer}>
                {playerName}
                <span className={styles.numberPlayer}> #{number}</span>
              </div>
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.leftBlock}>
                <div className={styles.foundation}>
                  <div className={styles.teamData}>
                    <div className={styles.label}>{'Position'}</div>
                    <div className={styles.personInfo}>{position}</div>
                  </div>
                </div>
                <div className={styles.teamData}>
                  <div className={styles.label}>{'Height'}</div>
                  <div className={styles.personInfo}>{height}</div>
                </div>
                <div className={styles.age}>
                  <div className={styles.label}> {'Age'}</div>
                  <div className={styles.personInfo}>{getAge(birthday)}</div>
                </div>
              </div>
              <div className={styles.rightBlock}>
                <div className={styles.teamData}>
                  <div className={styles.label}>{'Team'}</div>
                  <div className={styles.personInfo}>{teamNameForPlayer}</div>
                </div>
                <div className={styles.teamData}>
                  <div className={styles.label}>{'Weight'}</div>
                  <div className={styles.personInfo}>{weight}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
