import React from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { useSelector } from 'react-redux'

import { selectCurrentPage } from '../../../../Store/getTeams/Selectors'
import { ITeam } from '../../../../Store/getTeams/TeamsSlice'
import { RootState } from '../../../../Store/store'
import styles from './Paginate.module.scss'

interface IPaginationProps {
  currentPageTeams?: number
  pageCount?: number
  onChangePage?: (page: number) => void
  count?: number
  size?: number
  handlePageClick: ({ selected: selectedPage }: any) => void
  renderOnZeroPageCount?:
    | ((props: ReactPaginateProps) => void | null)
    | undefined
}

export const Pagination: React.FC<IPaginationProps> = ({
  handlePageClick,
  currentPageTeams,
  count,
  pageCount,
}) => {
  const currentPage = useSelector(selectCurrentPage)

  const svgBackArrow = (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.4 0.768457C5.712 1.08046 5.712 1.58446 5.4 1.89646L2.296 5.00046L5.4 8.10446C5.712 8.41646 5.712 8.92046 5.4 9.23246C5.088 9.54446 4.584 9.54446 4.272 9.23246L0.600003 5.56046C0.288003 5.24846 0.288003 4.74446 0.600003 4.43246L4.272 0.760457C4.576 0.456457 5.088 0.456457 5.4 0.768457Z"
        fill="#707070"
      />
    </svg>
  )
  const svgUpArrow = (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.599997 0.768457C0.287997 1.08046 0.287997 1.58446 0.599997 1.89646L3.704 5.00046L0.599997 8.10446C0.287997 8.41646 0.287997 8.92046 0.599997 9.23246C0.911997 9.54446 1.416 9.54446 1.728 9.23246L5.4 5.56046C5.712 5.24846 5.712 4.74446 5.4 4.43246L1.728 0.760457C1.424 0.456457 0.911997 0.456457 0.599997 0.768457Z"
        fill="#707070"
      />
    </svg>
  )

  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..." // точки между цифрами
        nextLabel={svgUpArrow} //перещёлкивание вперёд
        previousLabel={svgBackArrow} //перещёлкивание назад
        onPageChange={handlePageClick} // функция для перещёлкивания страниц
        pageRangeDisplayed={4} //количество страниц до ...
        marginPagesDisplayed={1} //количество страниц после ...
        pageCount={pageCount ? pageCount : 1} //количество отображаемых страниц в приложении
        initialPage={0}
      />
    </div>
  )
}
