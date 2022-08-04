// import { useState } from 'react'
// import { Controller, useFormContext } from 'react-hook-form'
// import Select from 'react-select'
// import ValueType from 'react-select/dist/declarations/src/Select'
//
// import { IOptionType } from '../../Elements/Page/HomePage/addNewPlayersPage/AddNewPlayersPage'
//
// export const SelectForForm = (options: any) => {
//   const [selectedOption, setSelectedOption] = useState<
//     ValueType<IOptionType[]>
//   >(options[0])
//   const { control, formState } = useFormContext()
//   console.log(options)
//   const default_value = 1 // you can replace with your default value
//   // other codes of the component
//   const handleChange = (option: ValueType<IOptionType[]>) => {
//     option && setSelectedOption(option)
//   }
//
//   return (
//     <Controller
//       control={control}
//       defaultValue={default_value}
//       name="field_name_product"
//       render={(props) => (
//         <Select
//           options={options}
//           value={selectedOption}
//           onChange={(option) => handleChange(option)}
//         />
//       )}
//     />
//   )
// }
export {}
