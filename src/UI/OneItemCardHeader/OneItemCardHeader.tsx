import React, { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'

import { deleteIcon, editInfoIcon } from '../../assets/img/images'
import styles from '../../UI/OneItemCardHeader/OneItemCardHeader.module.scss'

interface IProps {
  name: string
  pageName: string
  handleOnClickDeleteItem?: MouseEventHandler<HTMLDivElement> | undefined
  id?: string | undefined
}

export const OneItemCardHeader: React.FC<IProps> = ({
  pageName,
  name,
  handleOnClickDeleteItem,
}) => {
  return (
    <div className={styles.headerOneItemCard}>
      <div className={styles.headerOneItemMenu}>
        <Link to={pageName === 'Teams' ? '/teams' : '/players'}>
          {pageName}
        </Link>
        <span> / </span>
        {name}
      </div>
      {!name.includes('Add new') && (
        <div className={styles.editTools}>
          <Link
            to={pageName === 'Team' ? '/teams/newTeams' : '/players/addPlayers'}
          >
            <div className={styles.editBtn}>{editInfoIcon}</div>
          </Link>
          <div className={styles.deleteBtn} onClick={handleOnClickDeleteItem}>
            {deleteIcon}
          </div>
        </div>
      )}
    </div>
  )
}
