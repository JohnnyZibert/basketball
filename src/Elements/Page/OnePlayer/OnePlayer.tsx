import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { deleteIcon, editInfoIcon } from '../../../assets/img/images'
import { deletePlayerRequest } from '../../../Store/deletePlayer/AsyncDeletePlayer'
import { getOnePlayerRequest } from '../../../Store/getOnePlayer/getOnePlayerRequest'
import { selectorOnePlayer } from '../../../Store/getOnePlayer/Selectors'
import { playersSelector } from '../../../Store/getPlayers/Selectors'
import { getTeamsRequest } from '../../../Store/getTeams/AsyncActionTeams'
import { AppDispatch } from '../../../Store/store'
import { OnePage } from '../HomePage/OnePage/OnePage'
import styles from './onePlayer.module.scss'

export const OnePlayer: React.FC = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const data = useSelector(playersSelector)
  const { name, number, avatarUrl, position, birthday, height, weight } =
    useSelector(selectorOnePlayer)

  const { id } = useParams()
  useEffect(() => {
    dispatch(getTeamsRequest({}))
  }, [dispatch])

  useEffect(() => {
    if (id != null) {
      dispatch(getOnePlayerRequest(Number(id)))
    }
  }, [dispatch, id])

  const handleOnClickDeletePlayer = async (id: number) => {
    await dispatch(deletePlayerRequest(Number(id)))
    await navigate('/players')
  }
  const teamName = data.find((team) => team.id === Number(id))?.teamName

  return (
    <div className={styles.onePlayerContainer}>
      <div className={styles.headerPlayer}>
        <div className={styles.headerPlayerMenu}>
          <Link to="/">Player</Link>
          <span> / </span>
          {name}
        </div>
        <div className={styles.editTools}>
          <Link to={'/players/addPlayers'}>
            <div
              className={styles.editBtn}
              onClick={() => navigate('/players/addPlayers')}
            >
              {editInfoIcon}
            </div>
          </Link>
          <div
            className={styles.deleteBtn}
            onClick={() => handleOnClickDeletePlayer(Number(id))}
          >
            {deleteIcon}
          </div>
        </div>
      </div>
      <OnePage
        playerName={name}
        number={number}
        position={position}
        avatarUrl={avatarUrl}
        birthday={birthday}
        height={height}
        weight={weight}
        teamNameForPlayer={teamName}
      />
    </div>
  )
}
// <div className={styles.wrapInfoPlayer}>
//   {' '}
//   <div className={styles.playerInfo}>
//     <div className={styles.logoPlayers}>
//       <img src={avatarUrl} alt={'player'} />
//     </div>
//     <div className={styles.descriptionPlayer}>
//       <div className={styles.namePlayer}>
//         {name} <span>#{number}</span>
//       </div>
//       <div className={styles.currentPlayerInfo}>
//         <div className={styles.rightBlockInfo}>
//           <div className={styles.label}>
//             Position
//             <div className={styles.bodyInfo}>{position}</div>
//           </div>
//           <div className={styles.label}>
//             Height
//             <div className={styles.bodyInfo}>{height} cm</div>
//           </div>
//           <div className={styles.label}>
//             Age
//             <div className={styles.bodyInfo}>{getAge(birthday)}</div>
//           </div>
//         </div>
//         <div>
//           <div className={styles.label}>
//             Team
//             <div className={styles.bodyInfo}>
//               {}
//             </div>
//           </div>
//           <div>
//             <div className={styles.label}>
//               Weight
//               <div className={styles.bodyInfo}>{weight} kg</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
