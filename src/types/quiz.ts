import { ImageSourcePropType } from 'react-native'

export type QuizData = {
  id: number
  code: string
  question: string
  answer: number
  choice: string[] | number[]
  solve: ImageSourcePropType
}
