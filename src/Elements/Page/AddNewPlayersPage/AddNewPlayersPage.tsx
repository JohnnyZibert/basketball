import React, { useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { addNewPlayersPostRequest } from '../../../Store/addNewPlayers/AsyncActionAddPlayers'
import { getOnePlayerRequest } from '../../../Store/getOnePlayer/getOnePlayerRequest'
import { selectOnePlayer } from '../../../Store/getOnePlayer/Selectors'
import { getPositionsRequest } from '../../../Store/getPositionsPlayers/getPositionRequest'
import { selectGetTeams } from '../../../Store/getTeams/Selectors'
import { AppDispatch, RootState } from '../../../Store/store'
import { updatePlayerRequest } from '../../../Store/updatePlayer/UpdataePlayerRequest'
import { IAddPlayersForm, IOption } from '../../../types/types'
import { BtnCancel } from '../../../UI/Button/CancelButton/BtnCancel'
import { BtnSave } from '../../../UI/Button/SaveFormButton/BtnSave'
import { DropZone } from '../../../UI/DropZone/DropZone'
import { FormInput } from '../../../UI/Form/FormInput'
import { OneItemCardHeader } from '../../../UI/OneItemCardHeader/OneItemCardHeader'
import { SelectPlayer } from '../../../UI/Select/Select'
import styles from './AddNewPlayersPage.module.scss'

export const AddNewPlayers = () => {
  const methods = useForm<IAddPlayersForm>()
  const { id } = useParams()
  const dispatch: AppDispatch = useDispatch()
  const { getValues, reset } = methods
  const { teams } = useSelector(selectGetTeams)
  const positionsPlayers = useSelector(
    (state: RootState) => state.positions.positions
  )
  const { data: dataPlayers } = useSelector(selectOnePlayer)
  const photo = methods.watch('avatarUrl')

  const optionsTeam: IOption[] = teams.data.map((team) => ({
    value: team.id,
    label: team.name,
  }))

  const optionsPlayers: IOption[] = positionsPlayers.map((position) => ({
    value: position,
    label: position,
  }))

  useEffect(() => {
    if (id != null) {
      dispatch(getOnePlayerRequest(Number(id)))
    }
  }, [dispatch, id])

  useEffect(() => {
    dispatch(getPositionsRequest())
  }, [dispatch])

  const createPlayer = (data: IAddPlayersForm) => {
    dispatch(addNewPlayersPostRequest(data))
    reset({})
  }
  const updateTeam = (data: {
    name: string
    number: number
    position: string
    team: number
    birthday: string
    height: number
    weight: number
    avatarUrl: string
    id: number | string
  }) => {
    dispatch(updatePlayerRequest(data))
    reset({})
  }
  const handleSetValue = useCallback(() => {
    reset({ ...dataPlayers })
  }, [reset, dataPlayers])

  useEffect(() => {
    id && handleSetValue()
  }, [id, handleSetValue])

  const onSubmit = (data: IAddPlayersForm) => {
    console.log(data)
    return id ? updateTeam({ ...data, id }) : createPlayer(data)
  }

  // const currentPosition = optionsPlayers.find((currenOption) =>
  //   currenOption.label === dataPlayers.position ? dataPlayers.position : ''
  // )
  // const currentTeamPlayer = optionsTeam.find((currenTeam) =>
  //   currenTeam.value === dataPlayers.team ? dataPlayers.team : ''
  // )

  return (
    <div className={styles.contentContainer}>
      <div className={styles.header}>
        <OneItemCardHeader name={'Add new player'} pageName={'Players'} />
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
                <section className={styles.sectionPosition}>
                  <label>Position</label>
                  <Controller
                    name={'position'}
                    control={methods.control}
                    render={({ field }) => (
                      <SelectPlayer
                        {...field}
                        options={optionsPlayers}
                        multi={false}
                        value={field.value as any}
                      />
                    )}
                  />
                </section>
                <section>
                  <label>Team</label>
                  <Controller
                    name="team"
                    control={methods.control}
                    render={({ field }) => (
                      <SelectPlayer
                        {...field}
                        value={field.value as any}
                        options={optionsTeam}
                        multi={false}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </section>
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
                  onClick={() => getValues(['position', 'team'])}
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
