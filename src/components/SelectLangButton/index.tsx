import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useStyles } from './style'

type Props = {
  title: string
  onPress: () => void
  bgcolor: string
  color?: string
}

export default function SelectLangButton({ title, onPress, bgcolor, color }: Props) {
  const style = useStyles({ bgcolor, color })
  return (
    <TouchableOpacity activeOpacity={0.7} style={style.QuizSelectButton} onPress={onPress}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  )
}
