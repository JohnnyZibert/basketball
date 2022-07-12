import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { postPhotosRequest } from '../../../../Store/savePhotos/AsyncActionSavePhoto'
import { AppDispatch } from '../../../../Store/store'
import styles from './uploadFile.module.scss'
