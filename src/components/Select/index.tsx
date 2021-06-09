import React, { Dispatch, SetStateAction, useState } from 'react'
import { SelectControl, Option, Options, SelectedValue } from './styles'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Action, Actions } from '../../pages/movies/discover'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  options: Option[]
  defaultValue?: Option
  onChange?: SetStateAction<any> | Dispatch<Action>
}

export function Select({ options, defaultValue, onChange }: SelectProps) {
  const [selectedOption, setSelectedOption] = useState<Option>(
    defaultValue || null
  )
  const [areOptionsShown, setAreOptionsShown] = useState(false)

  function toggleOptions() {
    setAreOptionsShown(!areOptionsShown)
  }

  function selectOption(option: Option) {
    setSelectedOption(option)
    onChange({ type: Actions.selectSortOption, sortOption: option })
    // onChange(option) -> useState approach
  }

  return (
    <SelectControl onClick={toggleOptions}>
      <SelectedValue areOptionsShown={areOptionsShown}>
        <div>{selectedOption ? selectedOption.label : 'Select...'}</div>
        <RiArrowDownSLine
          size="26px"
          color={areOptionsShown ? '#d12f26' : '#fff'}
        />
      </SelectedValue>
      {areOptionsShown && (
        <Options>
          {options.map((option, index) => {
            return (
              <Option onClick={() => selectOption(option)} key={index}>
                {option.label}
              </Option>
            )
          })}
        </Options>
      )}
    </SelectControl>
  )
}
