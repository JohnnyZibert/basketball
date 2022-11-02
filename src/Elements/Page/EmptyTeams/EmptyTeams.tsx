import React from 'react'

import styles from './EmptyTeams.module.scss'

interface IProps {
  smallText: string
  imgEmpty: string
}

export const EmptyTeams: React.FC<IProps> = ({ smallText, imgEmpty }) => {
  return (
    <div className={styles.emptyTeamsContainer}>
      <div className={styles.imgEmptyTeamsContainer}>
        <img src={imgEmpty} alt="EmptyImg" />
        <h1 className={styles.largeText}>Empty here</h1>
        <span className={styles.smallText}>{smallText}</span>
      </div>
    </div>
  )
}
