import React from 'react'
import { HomePage } from '../home/home'
import { CalculatorPage } from '../calculator/calculator'
import { createBrowserRouter } from 'react-router-dom'

export const routerPaths = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: 'calculator', element: <CalculatorPage /> }
])
