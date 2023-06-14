import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.PRIMARY,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 48,
  },
})
