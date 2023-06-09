import './App.css';

// APP COMPONENT
const App = () => {
  return(
    <>
    <div className="container">
      <h1>HTTPS METHODS WITH AXIOS</h1>
      <div className="btn-container">
        <button>GET</button>
        <button>POST</button>
        <button>PUT</button>
        <button>PATCH</button>
        <button>DELETE</button>
        <button>SIMULTANEOUS REQUEST</button>
        <button>CUSTOM HEADERS</button>
        <button>ERROR HANDLING</button>
        <button>CANCEL TOKEN</button>
      </div>
    </div>
    </>
  )
}

export default App;