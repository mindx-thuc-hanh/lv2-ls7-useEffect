import { useEffect, useState } from 'react'
import data from "./data/movies.json"

// mounting: 
// did mount: 

// mang rong: chay sau khi component sau khi duoc render(did mount)
// 
function App() {
  console.log(data)
  const [currentNum, setCurrentNum] = useState(1)
  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${currentNum}`)
      .then(res =>
        res.json()
          .then(postRes => {
            setPost(postRes)
          })
      ).finally(() => {
        setIsLoading(false)
      })

  }, [currentNum])

  return (
    <div>
      <div>
        <p className='flex'><strong>Title:</strong>
        
        {isLoading? 
        <div className='skelenton-rec'></div>
        :post.title}
        </p>
        <p className='flex'><strong>Body:</strong>
        
        {isLoading? 
        <div className='flex flex-col gap-1'>

        <div className='skelenton-rec'></div>
        <div className='skelenton-rec'></div>
        <div className='skelenton-rec'></div>
        </div>
        :post.body}
        
        </p>
      </div>
      <p>
        current post: {currentNum}
      </p>
      <button
        disabled={isLoading}
        onClick={() => {
          if (currentNum === 1) return;
          setCurrentNum(currentNum - 1)
        }}
      >
        {"<"}
      </button>
      <button
        disabled={isLoading}

        onClick={() => {
          if (currentNum === 100) return;

          setCurrentNum(currentNum + 1)
        }}
      >
        {">"}
      </button>
    </div>
  )
}

export default App
