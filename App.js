import React, { useState, useRef } from 'react'
import GeneralJokes from './src/components/joke/generalJokes'
import ProgrammingJokes from './src/components/joke/programmingJokes'

// implement rn navigation to show one joke at a time

export default function App() {
  return (
    <>
    {/* <GeneralJokes /> */}
    <ProgrammingJokes />
    </>
  )
}
