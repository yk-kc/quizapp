import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity } from 'react-native'
import { useStyles } from './style'

type Props = {
  title: string
  onPress: () => void
  logo: ImageSourcePropType
  bgcolor: string
  color?: string
}

export default function SelectLangButton({ title, onPress, bgcolor, color, logo }: Props) {
  const style = useStyles({ bgcolor, color })
  return (
    <TouchableOpacity activeOpacity={0.7} style={style.QuizSelectButton} onPress={onPress}>
      <Image style={style.logo} source={logo} />
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  )
}
