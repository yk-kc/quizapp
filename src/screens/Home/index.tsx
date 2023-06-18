import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import style from './style'
import { useHomeNavigation } from '@quizapp/hooks/useHomeNavigation'

export default React.memo(function HomeScreen() {
  const { navigation } = useHomeNavigation()

  const onPressStart = () => {
    console.log('started')
    navigation.navigate('quiz/select')
  }

  return (
    <SafeAreaView style={style.container}>
      <Text>プログラミングクイズ</Text>
      <TouchableOpacity style={style.startButton} onPress={onPressStart}>
        <Text style={style.start}>スタート</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
})
