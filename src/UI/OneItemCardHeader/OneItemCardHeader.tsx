import React, { MouseEventHandler } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { deleteIcon, editInfoIcon } from '../../assets/img/images'
import styles from '../../UI/OneItemCardHeader/OneItemCardHeader.module.scss'

interface IProps {
  nameAdd: string
  pageName: string
  handleOnClickDeleteItem?: MouseEventHandler<HTMLDivElement> | undefined
  id?: string | undefined
}

export const OneItemCardHeader: React.FC<IProps> = ({
  pageName,
  nameAdd,
  handleOnClickDeleteItem,
  id,
}) => {
  const navigate = useNavigate()
  const pageNameItem = pageName === 'Teams'
  const handleOnEdit = () => {
    if (pageNameItem) {
      navigate('teams/newTeams')
    } else {
      navigate('players/addPlayers')
    }
  }
  return (
    <div className={styles.headerOneItemCard}>
      <div className={styles.headerOneItemMenu}>
        <Link to={pageNameItem ? '/teams' : '/players'}>{pageName}</Link>
        <span> / </span>
        {nameAdd}
      </div>
      {!nameAdd.includes('Add new') && (
        <div className={styles.editTools}>
          <Link
            to={pageNameItem ? `/teams/update/${id}` : `/players/update/${id}`}
          >
            <div className={styles.editBtn} onClick={handleOnEdit}>
              {editInfoIcon}
            </div>
          </Link>
          <div className={styles.deleteBtn} onClick={handleOnClickDeleteItem}>
            {deleteIcon}
          </div>
        </div>
      )}
    </div>
  )
}
