import Feed from "./Feed";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";


function App() {
  return (
    // BEM naming convention with minor case a, helps our apps scale up
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>

     
    </div>
  );
}

export default App;
