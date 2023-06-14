import type { HomeStackParamList } from '@quizapp/types/routes'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

export function useHooks() {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList, 'home'>>()

  const onPressJS = () => {
    navigation.navigate('quiz/js')
  }

  const onPressRB = () => {
    navigation.navigate('quiz/rb')
  }

  const onPressPY = () => {
    navigation.navigate('quiz/py')
  }

  const onPressHTML = () => {
    navigation.navigate('quiz/html')
  }

  const onPressCSS = () => {
    navigation.navigate('quiz/css')
  }

  const onPressSQL = () => {
    navigation.navigate('quiz/sql')
  }

  return {
    onPressJS,
    onPressRB,
    onPressPY,
    onPressHTML,
    onPressCSS,
    onPressSQL,
  }
}
