import type { HomeStackParamList } from '../../types/routes'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

export function useHooks() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList, 'home'>>()

  const onPressJS = () => {
    navigation.navigate('quiz/js')
  }

  // const onPressRB = () => {}

  return {
    onPressJS,
  }
}
