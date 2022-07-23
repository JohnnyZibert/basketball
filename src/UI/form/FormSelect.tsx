// import React, { useState } from 'react'
// import { Controller, useForm, useFormContext } from 'react-hook-form'
// import { RegisterOptions } from 'react-hook-form/dist/types/validator'
//
// export const FormSelect = ({
//   name,
//   rules,
//   type = 'text',
//   options,
// }: {
//   name: string
//   rules?: RegisterOptions
//   type?: string
//   options?: { value: string; label: string }[]
// }) => {
//   const { register, handleSubmit, setValue } = useForm()
//   const { control, formState } = useFormContext()
//
//   return (
//     <Controller
//       control={control}
//       rules={rules}
//       name={name}
//       render={() => (
//         <form>
//           <label>{name}</label>
//           <select {...register(name)}>
//             {options &&
//               options.map((value) => (
//                 <option key={`${value.value}_${value.label}`}>
//                   {value.value}{' '}
//                 </option>
//               ))}
//           </select>
//         </form>
//       )}
//     />
//   )
// }
// import FormControl from '@material-ui/core/FormControl'
// import InputLabel from '@material-ui/core/InputLabel'
// import Select from '@material-ui/core/Select'
// import { Controller } from 'react-hook-form'
// const ReactHookFormSelect = ({
//   name,
//   label,
//   control,
//   defaultValue,
//   children,
//   ...props
// }) => {
//   const labelId = `${name}-label`
//   return (
//     <FormControl {...props}>
//       <InputLabel id={labelId}>{label}</InputLabel>
//       <Controller
//         as={
//           <Select labelId={labelId} label={label}>
//             {children}
//           </Select>
//         }
//         name={name}
//         control={control}
//         defaultValue={defaultValue}
//       />
//     </FormControl>
//   )
// }
// export default ReactHookFormSelect

// import React from 'react'
// import { Controller } from 'react-hook-form'
// import ReactSelect from 'react-select'
//
// import { IAddPlayersForm } from '../../Elements/Page/HomePage/addNewPlayersPage/AddNewPlayersPage'
//
// export const SelectForm = (
//   optionsPosition: { value: string; label: string }[],
//   methods: any,
//
//   name: string
// ) => {
//   return (
//     <section>
//       <label>Position</label>
//       <Controller
//         render={({ field }) => (
//           <ReactSelect {...field} options={optionsPosition} isClearable />
//         )}
//         name="position"
//         control={methods.control}
//       />
//     </section>
//   )
// }

export {}
