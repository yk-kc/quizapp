import { StyleSheet } from 'react-native'
import { Colors } from '@quizapp/constants'

type Props = {
  modalVisible?: boolean
}

export function useStyles({ modalVisible }: Props) {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      backgroundColor: Colors.BG_THEME,
    },
    codeBG: {
      backgroundColor: Colors.BLACK,
      marginBottom: 24,
      borderRadius: 8,
      width: '100%',
      paddingVertical: 32,
      paddingHorizontal: 24,
      textAlign: 'left',
    },
    code: {
      color: Colors.WHITE,
      marginBottom: 8,
    },
    buttons: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatListContainer: {
      marginTop: 16,
      alignSelf: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: Colors.WHITE,
      borderRadius: 20,
      padding: 12,
      width: 300,
      height: 300,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      justifyContent: 'space-between',
    },
    button: {
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
    },
    buttonClose: {
      borderWidth: 1,
      borderColor: Colors.PRIMARY,
      backgroundColor: Colors.WHITE,
    },
    textStyle: {
      color: Colors.PRIMARY,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    overlay: {
      display: modalVisible ? 'flex' : 'none',
      position: 'absolute',
      width: modalVisible ? '100%' : 'auto',
      height: modalVisible ? '100%' : 'auto',
      backgroundColor: modalVisible ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
    },
    solveImage: {
      width: 245,
      height: 150,
    },
  })
}
