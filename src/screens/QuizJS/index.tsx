import React from 'react'
import type { QuizData } from '@quizapp/types/quiz'
import QuizForm from '@quizapp/components/QuizForm'

import SolveMock from '@quizapp/assets/images/solve_mock.png'

export default React.memo(function QuizJS() {
  const QUIZ_DATA: QuizData[] = [
    {
      id: 0,
      code: 'const a = 0\nconsole.log(a + 1)',
      question: 'console.logから出力される値は何でしょう？',
      choice: [1, 2, 3, 4],
      answer: 0,
      solve: SolveMock,
    },
    {
      id: 1,
      code: "const str = 'A'\nconsole.log(str)",
      question: 'console.logから出力される値は何でしょう？',
      choice: ['A', 'B', 'C', 'D'],
      answer: 0,
      solve: SolveMock,
    },
  ]

  return <QuizForm title="JavaScript" data={QUIZ_DATA} />
})
