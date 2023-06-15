import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'
import { SCREEN_WIDTH } from '@quizapp/constants/Sizes'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BG_THEME,
  },
  startButton: {
    borderRadius: 16,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 48,
    height: 70,
    width: SCREEN_WIDTH - 16 * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  start: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: '500',
  },
})
