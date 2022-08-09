import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'

import { addNewPlayersPostRequest } from '../../../../Store/addNewPlayers/AsyncActionAddPlayers'
import { getPositionsRequest } from '../../../../Store/getPositionsPlayers/getPositionRequest'
import { getTeamsRequest } from '../../../../Store/getTeams/AsyncActionTeams'
import { postPhotosRequestPlayers } from '../../../../Store/savePhotos/AsyncActionSavePhotoPlayers'
import { AppDispatch, RootState } from '../../../../Store/store'
import { BtnCancel } from '../../../../UI/Button/btnCancel/BtnCancel'
import { BtnSave } from '../../../../UI/Button/BtnSave'
import { FormInput } from '../../../../UI/form/FormInput'
import styles from './AddNewPlayersPage.module.scss'

export interface IAddPlayersForm {
  newPlayer: number
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
  label: string
}

const optionsPosition: IOptionType[] = [
  { value: '1', label: 'Center Forward' },
  { value: '2', label: 'Guard Forward' },
  { value: '3', label: 'Forward' },
  { value: '4', label: 'Center' },
  { value: '5', label: 'Guard' },
]

export const AddNewPlayers = () => {
  const dispatch: AppDispatch = useDispatch()
  const teamData = useSelector((state: RootState) => state.getTeams.teams.data)
  const playerPhoto = useSelector(
    (state: RootState) => state.photosPlayersUrl.photosUpload
  )

  const optionsTeam: IOptionType[] = teamData.map((team) => ({
    value: team.id,
    label: team.name,
  }))

  const methods = useForm<IAddPlayersForm>()
  useEffect(() => {
    dispatch(getTeamsRequest())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPositionsRequest())
  }, [dispatch])

  const { getValues, setValue } = methods
  const urlPhotoPlayers = methods.watch('avatarUrl')

  const onSubmit = (data: IAddPlayersForm) => {
    if (data) {
      dispatch(addNewPlayersPostRequest(data))
    }
  }

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0]
      const formData = new FormData()
      formData.append('file', file)
      dispatch(
        postPhotosRequestPlayers({
          file: formData,
          setValue,
        })
      )
    },
    [dispatch, setValue]
  )
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>
          <Link to={'players'}>Players</Link>
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
                  {/*<img src={'avatarUrl'} />*/}
                  <img src={playerPhoto} />
                  <div
                    {...getRootProps({
                      className: styles.dropZoneSvg,
                    })}
                  >
                    <svg
                      width="72"
                      height="67"
                      viewBox="0 0 72 67"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={styles.dropZonePhotosPath}
                        opacity="0.7"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8748 25.6875C11.179 25.6875 9.79147 24.2812 9.79147 22.5625V16.3125H3.62481C1.92897 16.3125 0.541473 14.9062 0.541473 13.1875C0.541473 11.4688 1.92897 10.0625 3.62481 10.0625H9.79147V3.8125C9.79147 2.09375 11.179 0.6875 12.8748 0.6875C14.5706 0.6875 15.9581 2.09375 15.9581 3.8125V10.0625H22.1248C23.8206 10.0625 25.2081 11.4688 25.2081 13.1875C25.2081 14.9062 23.8206 16.3125 22.1248 16.3125H15.9581V22.5625C15.9581 24.2812 14.5706 25.6875 12.8748 25.6875ZM32.6143 36.625C34.2666 33.7244 37.3203 31.9375 40.625 31.9375C43.9297 31.9375 46.9834 33.7244 48.6357 36.625C50.2881 39.5257 50.2881 43.0994 48.6357 46C46.9834 48.9007 43.9297 50.6875 40.625 50.6875C37.3203 50.6875 34.2666 48.9007 32.6143 46C30.9619 43.0994 30.9619 39.5257 32.6143 36.625ZM65.2915 16.3125H55.5173L51.694 12.0938C50.5531 10.8125 48.8881 10.0625 47.1615 10.0625H27.4281C27.9523 11 28.2915 12.0312 28.2915 13.1875C28.2915 16.625 25.5165 19.4375 22.1248 19.4375H19.0415V22.5625C19.0415 26 16.2665 28.8125 12.8748 28.8125C11.734 28.8125 10.7165 28.4688 9.79147 27.9375V60.0625C9.79147 63.5 12.5665 66.3125 15.9581 66.3125H65.2915C68.6831 66.3125 71.4581 63.5 71.4581 60.0625V22.5625C71.4581 19.125 68.6831 16.3125 65.2915 16.3125ZM25.2079 41.3125C25.2079 49.9375 32.1146 56.9375 40.6246 56.9375C49.1346 56.9375 56.0413 49.9375 56.0413 41.3125C56.0413 32.6875 49.1346 25.6875 40.6246 25.6875C32.1146 25.6875 25.2079 32.6875 25.2079 41.3125Z"
                        fill="white"
                      />
                    </svg>
                    <input name="avatarUrl" id="file" {...getInputProps()} />
                  </div>
                </section>
              </div>

              <div className={styles.inputContainer}>
                <FormInput name={'name'} label={'name'} />
                <FormInput name={'newPlayer'} label={'newPlayer'} />
                <section>
                  <label>Position</label>
                  <Controller
                    render={({ field }) => (
                      <ReactSelect
                        {...field}
                        // @ts-ignore
                        options={optionsPosition}
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
                  <FormInput name={'height'} label={'height'} />
                  <FormInput name={'weight'} label={'weight'} type="number" />
                </div>
                <div className={styles.data}>
                  <FormInput name={'birthday'} type="date" />
                  <FormInput name={'number'} />
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
