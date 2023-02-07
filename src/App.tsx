import './App.css'
import FormPeriodSelection from './components/Form/FormPeriodSelection'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Vite + React + TS</h1>
      <h3>Period selection form test</h3>
      <FormPeriodSelection />
    </div>
  )
}
