import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import type { HomeStackParamList } from '../../types/routes'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default React.memo(function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList, 'home'>>()

  const onPressStart = () => {
    console.log('press')
    navigation.navigate('quiz/select')
  }

  return (
    <SafeAreaView style={style.container}>
      <Text>プログラミングクイズ</Text>
      <TouchableOpacity style={style.startButton} onPress={onPressStart}>
        <Text>スタート</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
})
