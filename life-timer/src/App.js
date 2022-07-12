
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Text from './components/Text/Text';

const App = () => {
  const [time,setTime] = useState((new Date()).toLocaleTimeString());
  useEffect(() => {
    setTimeout(() => {
      setTime((new Date()).toLocaleTimeString())
    }, 1000)
  }, [time])

  return (
    <Card className='container'>
        <Text>
          {time}
        </Text>
    </Card>
  )
}

export default App