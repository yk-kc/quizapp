import React from 'react'
import { Text, View, FlatList, ImageSourcePropType } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useStyles } from './style'
import SelectLangButton from '@quizapp/components/SelectLangButton'
import { useHooks } from './hooks'
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

export default React.memo(function QuizSelectScreen() {
  const style = useStyles()
  const hooks = useHooks()

  const LANGS: Lang[] = [
    {
      title: 'JavaScript',
      onPress: hooks.onPressJS,
      bgcolor: Colors.JAVASCRIPT,
      logo: jsIcon,
    },
    {
      title: 'Ruby',
      onPress: hooks.onPressRB,
      bgcolor: Colors.RUBY,
      color: Colors.WHITE,
      logo: rbIcon,
    },
    { title: 'Python', onPress: hooks.onPressPY, bgcolor: Colors.PYTHON, logo: pyIcon },
    { title: 'HTML', onPress: hooks.onPressHTML, bgcolor: Colors.HTML, logo: htmlIcon },
    { title: 'CSS', onPress: hooks.onPressCSS, bgcolor: Colors.CSS, logo: cssIcon },
    {
      title: 'SQL',
      onPress: hooks.onPressSQL,
      bgcolor: Colors.SQL,
      color: Colors.WHITE,
      logo: sqlIcon,
    },
  ]

  return (
    <SafeAreaView style={style.container}>
      <Text>クイズの言語を選択しよう</Text>
      <View>
        <FlatList
          numColumns={2}
          keyExtractor={(item, _) => _.toString()}
          data={LANGS}
          renderItem={({ item }) => (
            <SelectLangButton
              title={item.title}
              onPress={item.onPress}
              bgcolor={item.bgcolor}
              color={item.color}
              logo={item.logo}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
})
