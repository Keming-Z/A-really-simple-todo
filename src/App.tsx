import './App.css'
import { Input } from './component/Input'
import { List } from './component/List'

function App() {

  return (
    <div className='max-w-md mx-auto p-4'>
      <Input type="search" />
      <List />
    </div>
  )
}

export default App
