import * as React from 'react';
import './App.css'
import { Button } from './components/ui/button';

function App() : React.ReactElement {

  return (
    <div className=' flex flex-col text-center justify-around h-[100vh] w-[100vw]'>
      <h1 className='text-red-500 text-2xl'>Time2Code!</h1>
      <Button className=" w-40 bg-red-500 rounded-xl hover:bg-gray-500 self-center">This</Button>
    </div>
  )
}

export default App
