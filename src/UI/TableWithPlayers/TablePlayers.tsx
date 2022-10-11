import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

import {
  IOnePlayerData,
  IPlayer,
} from '../../Store/getOnePlayer/getOnePlayerSlice'
import { RootState } from '../../Store/store'
import styles from './TablePlayers.module.scss'

export const TablePlayers = () => {
  const data = useSelector((state: RootState) => state.getPlayers.players.data)

  return (
    <>
      <div
        style={{
          display: 'grid',
          background: 'black',
          gap: 1,
          border: '1px solid black',
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        <div style={{ background: 'white' }}>header</div>
        <Row number={'#'} avatarUrl={<span>Player</span>} />
        {data.map((el) => (
          <Row {...{ ...el, avatarUrl: el.avatarUrl || '' }} />
        ))}
      </div>
      {/*<div className={styles.tableContainer}>*/}
      {/*  <div className={styles.tableHead}>*/}
      {/*    <strong>Roster</strong>*/}
      {/*  </div>*/}
      {/*  <div className={styles.tableBody}>*/}
      {/*    <span>#</span>*/}
      {/*    <span>Player</span>*/}
      {/*    <span>Height</span>*/}
      {/*    <span>Weight</span>*/}
      {/*    <span>Age</span>*/}
      {/*    <span>{number} </span>*/}
      {/*    <span>*/}
      {/*      <img src={avatarUrl} className={styles.imgPlayers} />{' '}*/}
      {/*      <span>name</span>*/}
      {/*    </span>*/}
      {/*    <span>aloalo</span>*/}
      {/*    <span>aloalo</span>*/}
      {/*    <span>aloalo</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  )
}

const Row = ({
  ...rest
}: Partial<Omit<IPlayer, 'avatarUrl'>> & { avatarUrl: ReactNode }) => {
  return (
    <div className={styles.row} style={{ background: 'white' }}>
      <div className={styles.row_item}>{rest.number}</div>
      {typeof rest.avatarUrl === 'string' ? (
        <div className={styles.row_item}>
          <img src={rest.avatarUrl} alt={'avatar'} />
        </div>
      ) : (
        rest.avatarUrl
      )}
      <div>
        <div className={styles.row_item_left}>
          <span>{rest.name}</span>
          <span>{rest.position}</span>
        </div>
      </div>
      <div className={styles.row_item}>{rest.height}</div>
      <div className={styles.row_item}>{rest.weight}</div>
    </div>
  )
}
