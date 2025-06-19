import Comments from "./components/Comments"
import UserList from './components/UserList'
import Movie from './components/Movie'
function App() {

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="p-5 text-center bg-purple-500 rounded-2xl">
        {/* <Comments></Comments> */}
        {/* <UserList></UserList> */}
        <Movie></Movie>
      </div>
  </div>
  )
}

export default App
