import './calculator.css'

export function CalculatorPage ({ themeUI }) {
  console.log(themeUI)
  return (
    <div className={themeUI === 'Light' ? 'calculator calculator-Light' : 'calculator calculator-Dark'}>
      <p>Hola</p>
    </div>
  )
}
