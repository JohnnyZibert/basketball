import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { addNewPlayersPostRequest } from '../../../../Store/addNewPlayers/AsyncActionAddPlayers'
import { getPositionsRequest } from '../../../../Store/getPositionsPlayers/getPositionRequest'
import { getTeamsRequest } from '../../../../Store/getTeams/AsyncActionTeams'
import { ITeamsCard } from '../../../../Store/getTeams/TeamsSlice'
import { AppDispatch, RootState } from '../../../../Store/store'
import { BtnCancel } from '../../../../UI/Button/CancelButton/BtnCancel'
import { BtnSave } from '../../../../UI/Button/SaveFormButton/BtnSave'
import { DropZone } from '../../../../UI/DropZone/DropZone'
import { FormInput } from '../../../../UI/Form/FormInput'
import { TestSelect } from '../../../../UI/TestSelect/TestSelect'
import styles from './AddNewPlayersPage.module.scss'

export interface IAddPlayersForm {
  name: string
  number: number
  position: string
  team: number
  birthday: string
  height: number
  weight: number
  avatarUrl: string
}

export interface IOptionType {
  value: string | number
  label: string | number
}
const colorStyles = {
  // control: (styles: any) => ({
  //   ...styles,
  //   backgroundColor: 'red',
  // }),
  // singleValue: (provided: any, state: { isDisabled: any }) => {
  //   const opacity = state.isDisabled ? 0.5 : 1
  //   const transition = 'opacity 300ms'
  //   const backgroundColor = '#E4163A'
  //   return { ...provided, opacity, transition, backgroundColor }
  // },
}
export const AddNewPlayers = () => {
  const methods = useForm<IAddPlayersForm>()
  const dispatch: AppDispatch = useDispatch()
  const { getValues, reset } = methods
  const teamData = useSelector((state: RootState) => state.getTeams.teams.data)

  const positionsPlayers = useSelector(
    (state: RootState) => state.positions.positions
  )

  const photo = methods.watch('avatarUrl')

  const optionsTeam: IOptionType[] = teamData.map((team) => ({
    value: team.id,
    label: team.name,
  }))

  const optionsPlayers: IOptionType[] = positionsPlayers.map((position) => ({
    value: position,
    label: position,
  }))
  const getTeams = (data: ITeamsCard) => {
    dispatch(getTeamsRequest({ data }))
  }

  useEffect(() => {
    getTeams(data)
  }, [dispatch])
  const data = useSelector((state: RootState) => state.getTeams.teams)

  useEffect(() => {
    dispatch(getPositionsRequest())
  }, [dispatch])

  const onSubmit = (data: IAddPlayersForm) => {
    if (data) {
      dispatch(addNewPlayersPostRequest(data))
    }
    reset({})
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.header}>
        <div className={styles.headerNav}>
          <Link to={'/players'}>Players</Link>
          <span>/</span> Add new player
        </div>
      </div>

      <div className={styles.wrapperContent}>
        <FormProvider {...methods}>
          <form
            className={styles.regForm}
            onSubmit={methods.handleSubmit(onSubmit)}
            id="playerForm"
          >
            <div className={styles.dropZoneContainer}>
              <section className={styles.dropZoneSection}>
                <DropZone name={'avatarUrl'} value={photo} />
              </section>
            </div>

            <div className={styles.inputContainer}>
              <FormInput name={'name'} label={'Name'} />
              <TestSelect
                selectName="position"
                control={methods.control}
                labelName={'Positions'}
                options={optionsPlayers}
              />
              <TestSelect
                selectName="team"
                control={methods.control}
                labelName={'Team'}
                options={optionsTeam}
              />
              <div className={styles.bodySize}>
                <FormInput name={'height'} label={'Height'} />
                <FormInput name={'weight'} label={'Weight'} type="number" />
              </div>
              <div className={styles.data}>
                <FormInput name={'birthday'} label={'Birthday'} type="date" />
                <FormInput name={'number'} label={'Number'} type="number" />
              </div>

              <div className={styles.btnContainer}>
                <BtnCancel>Cancel</BtnCancel>
                <BtnSave
                  type="submit"
                  onClick={() => {
                    getValues(['position', 'team'])
                  }}
                >
                  Save
                </BtnSave>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
