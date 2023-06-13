import './App.css';
import Button from './components/Button';

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
  return (
    <>
      <div className="container">
        <h1>HTTPS METHODS WITH AXIOS</h1>
        <div className="btn-container">
          <Button onClick={getData} label="GET" type="button" />
          <Button onClick={postData} label="POST" type="button" />
          <Button onClick={putData} label="PUT" type="button" />
          <Button onClick={patchData} label="PATCH" type="button" />
          <Button onClick={deleteData} label="DELETE" type="button" />
          <Button onClick={simultaneousGetData} label="SIMULTANEOUS REQUEST" type="button" />
          <Button onClick={customHeaders} label="CUSTOM HEADERS" type="button" />
          <Button onClick={errorHandling} label="ERROR HANDLING" type="button" />
          <Button onClick={cancelToken} label="CANCEL TOKEN" type="button" />
        </div>
      </div>
    </>
  )
}

export default App;