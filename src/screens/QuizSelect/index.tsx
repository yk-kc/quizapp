import React from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import style from './style'
import { useHooks } from './hooks'

export default React.memo(function QuizSelectScreen() {
  const { onPressJS } = useHooks()

  return (
    <SafeAreaView style={style.container}>
      <Text>クイズの言語を選択しよう</Text>
      <View>
        <TouchableOpacity style={style.QuizSelectButton} onPress={onPressJS}>
          <Text>JavaScript</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
})
