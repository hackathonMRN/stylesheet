import './App.css'
import { useEffect, useState } from "react"
const axios = require("axios")

export function App() {
  const [userId, setUserId] = useState("defaultUserId")
  const [sort, setSort] = useState("asc")
  const [memos, setMemos] = useState([])

  async function checkServer() {
    try {
      const fetchData = await axios.get("http://34.59.39.46:5000/")
      console.log(fetchData.data)
    } catch (err) {
      console.log(err)
      alert("서버에 연결할 수 없습니다.")
    }
  }

  const fetchMemos = async () => {
    if (!userId) return
    try {
      const res = await axios.get(
        `http://34.59.39.46:5000/memos?userId=${userId}&sort=${sort}`
      )
      setMemos(res.data)
    } catch (err) {
      console.log(err)
      alert("메모 불러오기 실패")
    }
  }

  useEffect(() => {
    checkServer()
    fetchMemos()
  }, [])

  return (
    <div>
      <h1>My App</h1>
      <ul>
        {memos.map((memo, index) => (
          <li key={index}>{memo.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default App