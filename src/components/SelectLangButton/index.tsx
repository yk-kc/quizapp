import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useStyles } from './style'
import { useHooks } from './hooks'

export default function SelectLangButton() {
  const { onPressJS } = useHooks()
  const style = useStyles()
  return (
    <TouchableOpacity style={style.QuizSelectButton} onPress={onPressJS}>
      <Text>JavaScript</Text>
    </TouchableOpacity>
  )
}
