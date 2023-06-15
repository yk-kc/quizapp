import { Colors } from '@quizapp/constants'
import { StyleSheet } from 'react-native'

export function useStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.BG_THEME,
    },
    flatListContainer: {
      paddingBottom: 32,
    },
    title: {
      paddingBottom: 16,
      fontWeight: 'bold',
      fontSize: 15,
    },
  })
}
