import React from 'react'
import type { QuizData } from '../../types/quiz'
import QuizForm from '../../components/QuizForm'

function QuizJS() {
  const QUIZ_DATA: QuizData[] = [
    {
      id: 0,
      code: 'const a = 0\nconsole.log(a + 1)',
      question: 'console.logから出力される値は何でしょう？',
      choice: [1, 2, 3, 4],
      answer: 0,
    },
    {
      id: 1,
      code: "const str = 'A'\nconsole.log(str)",
      question: 'console.logから出力される値は何でしょう？',
      choice: ['A', 'B', 'C', 'D'],
      answer: 0,
    },
  ]

  return <QuizForm title='JavaScript' data={QUIZ_DATA} />
}

export default QuizJS
