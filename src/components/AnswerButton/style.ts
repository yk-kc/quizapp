import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '@quizapp/constants'

const SCREEN_WIDTH = Dimensions.get('window').width

export default StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.PRIMARY,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    marginVertical: 4,
    width: SCREEN_WIDTH / 2 - 16 * 2,
  },
})
