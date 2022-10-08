import React, { useEffect } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'

import { UploadForm } from '../../../../common/UploadForm'
import { addNewPlayersPostRequest } from '../../../../Store/addNewPlayers/AsyncActionAddPlayers'
import { getPositionsRequest } from '../../../../Store/getPositionsPlayers/getPositionRequest'
import { getTeamsRequest } from '../../../../Store/getTeams/AsyncActionTeams'
import { AppDispatch, RootState } from '../../../../Store/store'
import { BtnCancel } from '../../../../UI/Button/btnCancel/BtnCancel'
import { BtnSave } from '../../../../UI/Button/BtnSave'
import { FormInput } from '../../../../UI/form/FormInput'
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
  const { getValues } = methods
  const teamData = useSelector((state: RootState) => state.getTeams.teams.data)

  const positionsPlayers = useSelector(
    (state: RootState) => state.positions.positions
  )

  const photo = methods.watch('avatarUrl')

  const optionsTeam: IOptionType[] = teamData.map((team) => ({
    value: team.name,
    label: team.name,
  }))

  const optionsPlayers: IOptionType[] = positionsPlayers.map((position) => ({
    value: position,
    label: position,
  }))

  useEffect(() => {
    dispatch(getTeamsRequest())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPositionsRequest())
  }, [dispatch])

  const onSubmit = (data: IAddPlayersForm) => {
    if (data) {
      dispatch(addNewPlayersPostRequest(data))
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>
          <Link to={'/players'}>Players</Link>
          <span>/</span> Add new player
        </p>
      </div>

      <div className={styles.wrapperContent}>
        <FormProvider {...methods}>
          <form
            className={styles.regForm}
            onSubmit={methods.handleSubmit(onSubmit)}
            id="playerForm"
          >
            <div className={styles.formContainer}>
              <div className={styles.dropZoneContainer}>
                <section className={styles.dropZoneSection}>
                  <UploadForm name={'avatarUrl'} value={photo} />
                </section>
              </div>

              <div className={styles.inputContainer}>
                <FormInput name={'name'} label={'Name'} />
                <FormInput name={'newPlayer'} label={'newPlayer'} />
                <section>
                  <label>Position</label>
                  <Controller
                    render={({ field }) => (
                      <ReactSelect
                        {...field}
                        // @ts-ignore
                        options={optionsPlayers}
                        isClearable
                      />
                    )}
                    name="position"
                    control={methods.control}
                  />
                </section>
                <section>
                  <label>Team</label>
                  <Controller
                    render={({ field }) => (
                      <ReactSelect
                        {...field}
                        // @ts-ignore
                        options={optionsTeam}
                        isClearable
                      />
                    )}
                    name="team"
                    control={methods.control}
                  />
                </section>

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
                      // getValues('position')
                      // getValues('team')
                      getValues(['position', 'team'])
                    }}
                  >
                    Save
                  </BtnSave>
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
