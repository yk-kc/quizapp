import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useStyles } from './style'
import SelectLangButton from '@quizapp/components/SelectLangButton'
import { useHooks } from './hooks'
import { Colors } from '@quizapp/constants'

export type Lang = {
  title: string
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
    },
    {
      title: 'Ruby',
      onPress: hooks.onPressRB,
      bgcolor: Colors.RUBY,
      color: Colors.WHITE,
    },
    { title: 'Python', onPress: hooks.onPressPY, bgcolor: Colors.PYTHON },
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
            <SelectLangButton title={item.title} onPress={item.onPress} bgcolor={item.bgcolor} color={item.color} />
          )}
        />
      </View>
    </SafeAreaView>
  )
})
