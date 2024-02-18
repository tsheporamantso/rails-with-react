import * as React from 'react'
import * as ReactDOM from 'react-dom'
import QuestionDetails from './QuestionDetails'

const QuestionsList = () => {
  const questionsList = [
    {
      id: 1,
      title: 'How to check if the key is present in a Hash?',
      tag: 'Ruby'
    },
  
    {
      id: 2,
      title: 'What is the difference between a string and symbol?',
      tag: 'Ruby'
    },
  
    {
      id: 3,
      title: 'What will happen if you add two same keys in a Hash?',
      tag: 'Ruby'
    },
  
    {
      id: 4,
      title: 'How to delete a given key in a Hash?',
      tag: 'Ruby'
    },
  
    {
      id: 5,
      title: 'How to check if two hashes are identical?',
      tag: 'Ruby'
    },
  
    {
      id: 6,
      title: 'How to combine two hashes in ruby?',
      tag: 'Ruby'
    },
  ]
  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        {questionsList.map((question) =>
        <QuestionDetails question={question} key={question.id}/>
        )}
      </div>
    </div>
  )
}

export default QuestionsList