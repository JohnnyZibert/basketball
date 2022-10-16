import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { UploadForm } from '../../../../common/UploadForm'
import { addNewTeamsPostRequest } from '../../../../Store/newTeams/AddNewTeamsRequest'
import { savePhotosTeamRequest } from '../../../../Store/savePhotos/AsyncActionSavePhoto'
import { AppDispatch } from '../../../../Store/store'
import { BtnCancel } from '../../../../UI/Button/btnCancel/BtnCancel'
import { BtnSave } from '../../../../UI/Button/BtnSave'
import { FormInput } from '../../../../UI/form/FormInput'
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
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>
          <Link to={'/teams'}>Teams</Link>
          <span>/</span> Add new team
        </p>
      </div>

      <div className={styles.wrapperContent}>
        <FormProvider {...methods}>
          <form
            className={styles.regForm}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className={styles.formContainer}>
              <div className={styles.dropZoneContainer}>
                <section className={styles.dropZoneTeamSection}>
                  <UploadForm name={'imageUrl'} value={watch('imageUrl')} />
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
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
