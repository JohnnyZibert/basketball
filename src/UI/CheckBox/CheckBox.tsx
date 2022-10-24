interface IProps {
  checked: boolean
  onChange: () => void
}

export const Checkbox = ({ checked, onChange }: IProps) => {
  return <input type="checkbox" checked={checked} onChange={onChange} />
}
