import { HomeStackParamList } from '@quizapp/types/routes'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const useHomeNavigation = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList, 'home'>>()

  return {
    navigation,
  }
}
