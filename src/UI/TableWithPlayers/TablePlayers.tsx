import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'

import { IPlayer } from '../../Store/getOnePlayer/getOnePlayerSlice'
import { selectGetPlayers } from '../../Store/getPlayers/Selectors'
import { getAge } from '../../utils/utils'
import styles from './TablePlayers.module.scss'

interface IProps {
  id: string | undefined
}

export const TablePlayers: React.FC<IProps> = ({ id }) => {
  const { data } = useSelector(selectGetPlayers)
  const teamPlayers = data.filter(
    (teamPlayer) => teamPlayer.team === Number(id && id)
  )

  return (
    <>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>Roster</div>
        <Row
          number={'#'}
          avatarUrl={<span className={styles.headerPlayer}>Player</span>}
          height={'Height'}
          weight={'Weight'}
          age={'Age'}
        />
        {teamPlayers.map((el) => (
          <Row
            {...{ ...el, avatarUrl: el.avatarUrl || '' }}
            key={`${el.number}${el.id}`}
          />
        ))}
      </div>
    </>
  )
}

const Row = ({
  ...rest
}: Partial<Omit<IPlayer, 'avatarUrl'>> & { avatarUrl: ReactNode } & {
  age?: string
}) => {
  return (
    <div className={styles.row} style={{ background: 'white' }}>
      <div className={styles.row_item_number}>{rest.number}</div>
      {typeof rest.avatarUrl === 'string' ? (
        <div className={styles.row_item_avatar}>
          <img src={rest.avatarUrl} alt={'avatar'} />
        </div>
      ) : (
        rest.avatarUrl
      )}
      <div className={styles.nameAndPosition}>
        <div className={styles.row_item_left}>
          <div className={styles.namePlayer}>{rest.name}</div>
          <div className={styles.positionPlayer}>{rest.position}</div>
        </div>
      </div>
      <div className={styles.row_item}>{rest.height}</div>
      <div className={styles.row_item}>{rest.weight}</div>
      <div className={styles.row_item}>
        {rest.birthday ? getAge(rest.birthday) : <div>{rest.age}</div>}
      </div>
    </div>
  )
}
