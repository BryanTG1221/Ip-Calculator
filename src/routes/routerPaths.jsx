import React from 'react'
import { HomePage } from '../home/home'
import { CalculatorPage } from '../calculator/calculator'
import { createBrowserRouter } from 'react-router-dom'

const date = new Date()
const hours = date.getHours()
let themeUI
hours < 19 && hours > 6 ? themeUI = 'Light' : themeUI = 'Dark'

export const routerPaths = createBrowserRouter([
  { path: '/', element: <HomePage themeUI={themeUI} /> },
  { path: 'calculator', element: <CalculatorPage themeUI={themeUI} /> }
])
