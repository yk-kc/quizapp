import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useStyles } from './style'

export default React.memo(function QuizSelectScreen() {
  const style = useStyles()

  return (
    <SafeAreaView style={style.container}>
      <Text>クイズの言語を選択しよう</Text>
      <View>
        <FlatList data={[]} renderItem={() => <></>} />
      </View>
    </SafeAreaView>
  )
})
