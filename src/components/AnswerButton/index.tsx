import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import style from './style'

type Props = {
  onPress: (choice: string | number) => void
  text: string | number
}

export default function AnswerButton({ onPress, text }: Props) {
  return (
    <TouchableOpacity style={style.button} onPress={() => onPress(text)}>
      <Text style={{ textAlign: 'center' }}>{text}</Text>
    </TouchableOpacity>
  )
}
