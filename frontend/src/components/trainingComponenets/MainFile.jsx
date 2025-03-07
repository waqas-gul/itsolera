import React from 'react'
import AiTraining from './AiTraining'
import PythonService from './PythonService'
import PythonTrainingDetails from './PythonTrainingDetails'
import Train from './Train'
export default function MainFile() {
  return (
    <>
       <Train/>
      <AiTraining/>
      <PythonService/>
      <PythonTrainingDetails/>
    </>
  )
}

