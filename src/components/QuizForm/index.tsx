import React, { useState } from 'react'
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  Alert,
  Pressable,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useStyles } from './style'
import AnswerButton from '../../components/AnswerButton'
import type { QuizData } from '../../types/quiz'

type Props = {
  title: string
  data: QuizData[]
}

export default React.memo(function QuizForm({ title, data }: Props) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const currentQuiz = data[currentQuizIndex]
  const [modalVisible, setModalVisible] = useState(false)
  const style = useStyles({ modalVisible })
  const onPressAnswer = (choiceIndex: number) => {
    if (choiceIndex === data[currentQuizIndex].answer) {
      console.log('正解！')
      if (currentQuizIndex < data.length - 1) {
        setCurrentQuizIndex(currentQuizIndex + 1)
      } else {
        console.log('全問終了！')
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

  return (
    <>
      <SafeAreaView style={style.container}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
          style={{ zIndex: 1 }}
        >
          {modalVisible && (
            <TouchableOpacity
              style={style.overlay}
              onPress={() => setModalVisible(false)}
            />
          )}
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={style.modalText}>Hello World!</Text>
              <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={style.textStyle}>Hide Modal</Text>
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
            renderItem={({ item, index }) => (
              <AnswerButton text={item} onPress={() => onPressAnswer(index)} />
            )}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={style.flatListContainer}
          />
        </View>
      </SafeAreaView>
    </>
  )
})
