import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { addNewTeamsPostRequest } from '../../../../Store/newTeams/AddNewTeamsRequest'
import { AppDispatch } from '../../../../Store/store'
import { BtnCancel } from '../../../../UI/Button/CancelButton/BtnCancel'
import { BtnSave } from '../../../../UI/Button/SaveFormButton/BtnSave'
import { DropZone } from '../../../../UI/DropZone/DropZone'
import { FormInput } from '../../../../UI/Form/FormInput'
import styles from './AddNewTeamsPage.module.scss'

export interface IUserForm {
  name: string
  foundationYear: number
  division: string
  conference: string
  imageUrl: string
}

export const AddNewTeams: React.FC = () => {
  const methods = useForm<IUserForm>()
  const { watch, reset } = methods
  const dispatch: AppDispatch = useDispatch()

  const onSubmit = (data: IUserForm) => {
    if (data) {
      dispatch(addNewTeamsPostRequest(data))
    }
    reset({})
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.header}>
        <div className={styles.headerNav}>
          <Link to={'/teams'}>Teams</Link>
          <span>/</span> Add new team
        </div>
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
              <FormInput name={'name'} label={'Name'} />
              <FormInput name={'division'} label={'Division'} />
              <FormInput name={'conference'} label={'Conference'} />
              <FormInput name={'foundationYear'} label={'Foundation year'} />
              <div className={styles.btnContainer}>
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
