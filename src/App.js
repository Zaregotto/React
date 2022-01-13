import Posts from "./components/Posts";
import Users from "./components/Users";
import Comments from "./components/Comments";
import "./App.css"

function App() {

  return (
      <div className={'all'}>
        <Users/>
        <Posts/>
        <Comments/>
      </div>
  );
}

export default App;