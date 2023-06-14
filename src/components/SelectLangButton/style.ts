import { StyleSheet } from 'react-native'
import { Colors } from '@quizapp/constants'

type Props = {
  bgcolor: string
  color?: string
}

export function useStyles({ bgcolor, color }: Props) {
  return StyleSheet.create({
    QuizSelectButton: {
      borderRadius: 16,
      backgroundColor: bgcolor ? bgcolor : Colors.JAVASCRIPT,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginTop: 48,
    },
    text: {
      color: color ? color : Colors.BLACK,
    },
  })
}
