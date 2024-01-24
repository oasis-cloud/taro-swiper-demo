import React, {useState} from 'react'
import {Textarea} from '@tarojs/components'

const Index = () => {

  const [value, setValue] = useState('')
  return <>
    <Textarea style={{border: '1px solid black'}}
              value={value}
              onInput={(e) => setValue(e.detail.value)}>
    </Textarea>
  </>
}

export default Index
