import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity, FlatList, Alert, Pressable, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useStyles } from './style'
import AnswerButton from '@quizapp/components/AnswerButton'
import type { QuizData } from '@quizapp/types/quiz'
import { useHomeNavigation } from '@quizapp/hooks/useHomeNavigation'

type Props = {
  title: string
  data: QuizData[]
}

export default React.memo(function QuizForm({ title, data }: Props) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const currentQuiz = data[currentQuizIndex]
  const [modalVisible, setModalVisible] = useState(false)
  const [endModalVisible, setEndModalVisible] = useState(false)
  const style = useStyles({ modalVisible })
  const { navigation } = useHomeNavigation()

  const onPressAnswer = (choiceIndex: number) => {
    if (choiceIndex === currentQuiz.answer) {
      console.log('正解！')
      if (currentQuizIndex < data.length - 1) {
        setCurrentQuizIndex(currentQuizIndex + 1)
      } else {
        console.log('全問終了！')
        setEndModalVisible(true)
      }
    } else {
      Alert.alert('残念！', 'もう一度チャレンジしてみよう！', [
        {
          text: '再チャレンジ',
          onPress: () => console.log('Ask me later pressed'),
          style: 'cancel',
        },
        {
          text: '答えを見る',
          onPress: () => {
            setModalVisible(true)
          },
        },
      ])
    }
  }

  const onPressNext = () => {
    setModalVisible(false)
    if (currentQuizIndex < data.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1)
    } else {
      setEndModalVisible(true)
    }
  }

  const onPressEnd = () => {
    setEndModalVisible(false)
    navigation.navigate('quiz/select')
  }

  return (
    <>
      <SafeAreaView style={style.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
          style={{ zIndex: 1 }}>
          {modalVisible && <TouchableOpacity style={style.overlay} onPress={() => setModalVisible(false)} />}
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={style.modalText}>答え</Text>
              <Image source={currentQuiz.solve} style={style.solveImage} />
              <Pressable style={[style.button, style.buttonClose]} onPress={onPressNext}>
                <Text style={style.textStyle}>次の問題へ</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={endModalVisible}
          onRequestClose={() => {
            setEndModalVisible(!endModalVisible)
          }}
          style={{ zIndex: 1 }}>
          {endModalVisible && <TouchableOpacity style={style.overlay} onPress={() => setEndModalVisible(false)} />}
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={style.modalText}>\ 全問終了！ /</Text>
              <View style={style.endTextContainer}>
                <Text style={style.endText1}>お疲れさまでした！</Text>
                <Text>他の問題にもチャレンジしてみよう！</Text>
              </View>
              <Pressable style={[style.button, style.buttonClose]} onPress={onPressEnd}>
                <Text style={style.textStyle}>クイズ選択へ</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text>{title}のクイズ</Text>
        <View style={style.codeBG}>
          <Text style={style.code}>{currentQuiz.code}</Text>
        </View>
        <Text>
          問{currentQuiz.id + 1}：{currentQuiz.question}
        </Text>
        <View style={style.buttons}>
          <FlatList
            data={data[currentQuizIndex].choice as []}
            renderItem={({ item, index }) => <AnswerButton text={item} onPress={() => onPressAnswer(index)} />}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={style.flatListContainer}
          />
        </View>
      </SafeAreaView>
    </>
  )
})
