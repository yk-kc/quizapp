import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useStyles } from './style'
import SelectLangButton from '@quizapp/components/SelectLangButton'
import { useHooks } from './hooks'

export default React.memo(function QuizSelectScreen() {
  const style = useStyles()
  const hooks = useHooks()

  return (
    <SafeAreaView style={style.container}>
      <Text>クイズの言語を選択しよう</Text>
      <View>
        <FlatList
          numColumns={2}
          keyExtractor={(item, _) => _.toString()}
          data={hooks.LANGS}
          contentContainerStyle={style.flatListContainer}
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
