import './App.css';

// APP COMPONENT
const App = () => {

  // -- actions
  const getData = () => {
    console.log("get() called");
  }
  const postData = () => {
    console.log("post() called");
  }
  const putData = () => {
    console.log("put() called");
  }
  const patchData = () => {
    console.log("patch() called");
  }
  const deleteData = () => {
    console.log("delete() called");
  }
  const simultaneousGetData = () => {
    console.log("simultaneous() called");
  }
  const customHeaders = () => {
    console.log("custom headers() called");
  }
  const errorHandling = () => {
    console.log("errorHandling() called");
  }
  const cancelToken = () => {
    console.log("cancel token() called");
  }
  return(
    <>
    <div className="container">
      <h1>HTTPS METHODS WITH AXIOS</h1>
      <div className="btn-container">
        <button onClick={getData}>GET</button>
        <button onClick={postData}>POST</button>
        <button onClick={putData}>PUT</button>
        <button onClick={patchData}>PATCH</button>
        <button onClick={deleteData}>DELETE</button>
        <button onClick={simultaneousGetData}>SIMULTANEOUS REQUEST</button>
        <button onClick={customHeaders}>CUSTOM HEADERS</button>
        <button onClick={errorHandling}>ERROR HANDLING</button>
        <button onClick={cancelToken}>CANCEL TOKEN</button>
      </div>
    </div>
    </>
  )
}

export default App;