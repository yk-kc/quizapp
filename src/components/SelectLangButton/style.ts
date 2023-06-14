import { StyleSheet } from 'react-native'
import { Colors } from '@quizapp/constants'

export function useStyles() {
  return StyleSheet.create({
    QuizSelectButton: {
      borderWidth: 1,
      borderRadius: 16,
      borderColor: Colors.JAVASCRIPT,
      backgroundColor: Colors.JAVASCRIPT,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginTop: 48,
    },
  })
}
