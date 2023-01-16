import {useEffect, useState} from 'react'

const usefetch = (url) => {
    const [tasks, setTasks] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    //fetch tasks
    useEffect(() => {
        setIsLoading(true)
        const getTasks = async () => {
          const resp = await fetch(url)
          const data = await resp.json()
          setTasks(data)
          setIsLoading(false)
        }
        getTasks()
      }, [])

  return {tasks, setTasks}
}

export default usefetch