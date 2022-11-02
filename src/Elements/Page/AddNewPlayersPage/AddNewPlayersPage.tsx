import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { addNewPlayersPostRequest } from '../../../Store/addNewPlayers/AsyncActionAddPlayers'
import { getPositionsRequest } from '../../../Store/getPositionsPlayers/getPositionRequest'
import { getTeamsRequest } from '../../../Store/getTeams/AsyncActionTeams'
import { selectGetTeams } from '../../../Store/getTeams/Selectors'
import { AppDispatch, RootState } from '../../../Store/store'
import { IAddPlayersForm, IOptionType } from '../../../types/types'
import { BtnCancel } from '../../../UI/Button/CancelButton/BtnCancel'
import { BtnSave } from '../../../UI/Button/SaveFormButton/BtnSave'
import { DropZone } from '../../../UI/DropZone/DropZone'
import { FormInput } from '../../../UI/Form/FormInput'
import { OneItemCardHeader } from '../../../UI/OneItemCardHeader/OneItemCardHeader'
import { SelectPlayer } from '../../../UI/Select/Select'
import styles from './AddNewPlayersPage.module.scss'

export const AddNewPlayers = () => {
  const methods = useForm<IAddPlayersForm>()
  const dispatch: AppDispatch = useDispatch()
  const { getValues, reset } = methods
  const [selectedOptionsTeam] = useState<IOptionType>()
  const [selectedOptionsPosition] = useState<IOptionType>()
  const { teams } = useSelector(selectGetTeams)
  const positionsPlayers = useSelector(
    (state: RootState) => state.positions.positions
  )

  const photo = methods.watch('avatarUrl')

  const optionsTeam: IOptionType[] = teams.data.map((team) => ({
    value: team.id,
    label: team.name,
  }))

  const optionsPlayers: IOptionType[] = positionsPlayers.map((position) => ({
    value: position,
    label: position,
  }))
  useEffect(() => {
    dispatch(getTeamsRequest({ page: teams.page, size: teams.size }))
  }, [dispatch])

  useEffect(() => {
    dispatch(getPositionsRequest())
  }, [dispatch])

  const onSubmit = (data: IAddPlayersForm) => {
    data && dispatch(addNewPlayersPostRequest(data))
    reset({})
  }

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
                    render={({ field }) => (
                      <SelectPlayer
                        {...field}
                        options={optionsPlayers}
                        multi={false}
                        value={selectedOptionsPosition}
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
                      <SelectPlayer
                        {...field}
                        options={optionsTeam}
                        multi={false}
                        value={selectedOptionsTeam}
                      />
                    )}
                    name="team"
                    control={methods.control}
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
