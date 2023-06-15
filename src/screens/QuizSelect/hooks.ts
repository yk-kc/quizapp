import type { HomeStackParamList } from '@quizapp/types/routes'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { ImageSourcePropType } from 'react-native'
import { Colors } from '@quizapp/constants'
import jsIcon from '@quizapp/assets/icons/js.png'
import rbIcon from '@quizapp/assets/icons/rb.png'
import pyIcon from '@quizapp/assets/icons/py.png'
import htmlIcon from '@quizapp/assets/icons/html.png'
import cssIcon from '@quizapp/assets/icons/css.png'
import sqlIcon from '@quizapp/assets/icons/sql.png'

export type Lang = {
  title: string
  logo: ImageSourcePropType
  onPress: () => void
  bgcolor: string
  color?: string
}

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

  const LANGS: Lang[] = [
    {
      title: 'JavaScript',
      onPress: onPressJS,
      bgcolor: Colors.JAVASCRIPT,
      logo: jsIcon,
    },
    {
      title: 'Ruby',
      onPress: onPressRB,
      bgcolor: Colors.RUBY,
      color: Colors.WHITE,
      logo: rbIcon,
    },
    { title: 'Python', onPress: onPressPY, bgcolor: Colors.PYTHON, logo: pyIcon },
    { title: 'HTML', onPress: onPressHTML, bgcolor: Colors.HTML, logo: htmlIcon },
    { title: 'CSS', onPress: onPressCSS, bgcolor: Colors.CSS, logo: cssIcon },
    {
      title: 'SQL',
      onPress: onPressSQL,
      bgcolor: Colors.SQL,
      color: Colors.WHITE,
      logo: sqlIcon,
    },
  ]

  return {
    LANGS,
    onPressJS,
    onPressRB,
    onPressPY,
    onPressHTML,
    onPressCSS,
    onPressSQL,
  }
}
