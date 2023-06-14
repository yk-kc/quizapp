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

  return {
    onPressJS,
    onPressRB,
    onPressPY,
  }
}
