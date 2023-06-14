import { StyleSheet } from 'react-native'
import { Colors } from '@quizapp/constants'
import { SCREEN_WIDTH } from '@quizapp/constants/Sizes'

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
      marginTop: 24,
      justifyContent: 'center',
      alignItems: 'center',
      height: 200,
      width: SCREEN_WIDTH / 2 - 16 * 2,
      marginHorizontal: 8,
    },
    text: {
      color: color ? color : Colors.BLACK,
    },
    logo: {
      width: 32,
      height: 32,
      marginBottom: 12,
    },
  })
}
