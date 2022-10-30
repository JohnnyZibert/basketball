import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { addNewPlayersPostRequest } from '../../../../Store/addNewPlayers/AsyncActionAddPlayers'
import { getPositionsRequest } from '../../../../Store/getPositionsPlayers/getPositionRequest'
import { getTeamsRequest } from '../../../../Store/getTeams/AsyncActionTeams'
import { selectGetTeams } from '../../../../Store/getTeams/Selectors'
import { AppDispatch, RootState } from '../../../../Store/store'
import { BtnCancel } from '../../../../UI/Button/CancelButton/BtnCancel'
import { BtnSave } from '../../../../UI/Button/SaveFormButton/BtnSave'
import { DropZone } from '../../../../UI/DropZone/DropZone'
import { FormInput } from '../../../../UI/Form/FormInput'
import { SelectPlayer } from '../../../../UI/Select/Select'
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

export const AddNewPlayers = () => {
  const methods = useForm<IAddPlayersForm>()
  const dispatch: AppDispatch = useDispatch()
  const { getValues, reset } = methods
  const { data } = useSelector(selectGetTeams)

  const positionsPlayers = useSelector(
    (state: RootState) => state.positions.positions
  )

  const photo = methods.watch('avatarUrl')

  const optionsTeam: IOptionType[] = data.map((team) => ({
    value: team.id,
    label: team.name,
  }))

  const optionsPlayers: IOptionType[] = positionsPlayers.map((position) => ({
    value: position,
    label: position,
  }))
  useEffect(() => {
    dispatch(getTeamsRequest({}))
  }, [dispatch])

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
              <div className={styles.selectContainer}>
                <SelectPlayer
                  selectName="position"
                  control={methods.control}
                  labelName={'Positions'}
                  options={optionsPlayers}
                />
              </div>
              <div className={styles.selectContainer}>
                <SelectPlayer
                  selectName="team"
                  control={methods.control}
                  labelName={'Team'}
                  options={optionsTeam}
                />
              </div>
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
