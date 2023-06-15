import React from 'react'
import type { QuizData } from '@quizapp/types/quiz'
import QuizForm from '@quizapp/components/QuizForm'

export default React.memo(function QuizRB() {
  const QUIZ_DATA: QuizData[] = [
    {
      id: 0,
      code: 'a = 0\nputs(a + 1)',
      question: 'コンソールに出力される値は何でしょう？',
      choice: [1, 2, 3, 4],
      answer: 0,
    },
    {
      id: 1,
      code: "str = 'A'\nputs(str)",
      question: 'コンソールに出力される値は何でしょう？',
      choice: ['A', 'B', 'C', 'D'],
      answer: 0,
    },
  ]

  return <QuizForm title="Ruby" data={QUIZ_DATA} />
})
