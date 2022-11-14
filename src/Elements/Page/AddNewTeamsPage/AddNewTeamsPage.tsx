import React, { useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { getOneTeamRequest } from '../../../Store/getOneTeam/getOneTeamRequest'
import { selectOneTeam } from '../../../Store/getOneTeam/Selectors'
import { addNewTeamsPostRequest } from '../../../Store/newTeams/AddNewTeamsRequest'
import { AppDispatch } from '../../../Store/store'
import { updateTeamRequest } from '../../../Store/updateTeam/UpdataeTeamRequest'
import { ITeam, IUserForm } from '../../../types/types'
import { BtnCancel } from '../../../UI/Button/CancelButton/BtnCancel'
import { BtnSave } from '../../../UI/Button/SaveFormButton/BtnSave'
import { DropZone } from '../../../UI/DropZone/DropZone'
import { FormInput } from '../../../UI/Form/FormInput'
import { OneItemCardHeader } from '../../../UI/OneItemCardHeader/OneItemCardHeader'
import styles from './AddNewTeamsPage.module.scss'

export const AddNewTeams: React.FC = () => {
  const navigate = useNavigate()
  const methods = useForm({
    defaultValues: {
      name: '',
      foundationYear: 0,
      division: '',
      conference: '',
      imageUrl: '',
    },
  })
  const { reset, watch } = methods
  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    if (id != null) {
      dispatch(getOneTeamRequest(Number(id)))
    }
  }, [dispatch, id])

  const teamData = useSelector(selectOneTeam)

  const createTeam = (data: IUserForm) => {
    dispatch(addNewTeamsPostRequest(data))
  }
  const updateTeam = (data: {
    division: string
    conference: string
    imageUrl: string
    name: string
    foundationYear: number
    id: string | number
  }) => {
    dispatch(updateTeamRequest(data))
  }

  const onSubmit = (data: IUserForm | ITeam) => {
    return id ? updateTeam({ ...data, id }) : createTeam(data), reset({})
  }

  const handleSetValues = useCallback(() => {
    reset({ ...teamData.data })
  }, [reset, teamData.data])

  useEffect(() => {
    id && handleSetValues()
  }, [handleSetValues, id])

  const handleOnClickCancel = () => {
    navigate('/teams')
  }
  return (
    <div className={styles.contentContainer}>
      <div className={styles.header}>
        <OneItemCardHeader nameAdd={'Add new team'} pageName={'Teams'} />
      </div>

      <div className={styles.wrapperContent}>
        <FormProvider {...methods}>
          <form
            className={styles.regForm}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className={styles.dropZoneContainer}>
              <section className={styles.dropZoneTeamSection}>
                <DropZone name={'imageUrl'} value={watch('imageUrl')} />
              </section>
            </div>
            <div className={styles.inputContainer}>
              <FormInput name={'name'} label={'Name'} id={id} />
              <FormInput name={'division'} label={'Division'} id={id} />
              <FormInput name={'conference'} label={'Conference'} id={id} />
              <FormInput
                name={'foundationYear'}
                label={'Foundation year'}
                id={id}
              />
              <div
                className={styles.btnContainer}
                onClick={handleOnClickCancel}
              >
                <BtnCancel>Cancel</BtnCancel>
                <BtnSave type="submit">Save</BtnSave>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
