import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { axiosInstance } from './utils/BaseURL';
import axios from 'axios';

// -- Headers Globals

axiosInstance.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// -- Interceptors for request & response
axiosInstance.interceptors.request.use((config) => {
  console.log(`${config.method.toUpperCase()} Method is sent io ${config.url} at this time ${new Date().getTime()}`);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


// APP COMPONENT
const App = () => {
  const [resData, setResData] = useState([]);


  // -- actions
  const getData = () => {
    axiosInstance({
      method: 'get',
      url: '/todos',
      params: {
        _limit: 10,
        _sort: 'desc'
      }
    })
      .then(res => { setResData([res]) })
      .catch(err => console.log(err.message));
  }
  const postData = () => {
    axiosInstance({
      method: 'post',
      url: '/todos',
      data: {
        title: "NEW_TODO",
        completed: true,
      }
    })
      .then(res => {
        setResData([res])

      })
      .catch(err => console.log(err.message));
  }
  const putData = () => {
    axiosInstance({
      method: 'put',
      url: '/todos/1',
      data: {
        title: 'REPLACE_WITH_TITLE',
        completed: true
      }
    })
      .then(res => setResData([res]))
      .catch(err => console.log(err.message))
  }
  const patchData = () => {
    axiosInstance({
      method: 'patch',
      url: '/todos/1',
      data: {
        title: 'OVER_WRITE_WITH_TITLE',
        completed: true
      }
    })
      .then(res => setResData([res]))
      .catch(err => console.log(err.message))
  }
  const deleteData = () => {
    axiosInstance({
      method: 'delete',
      url: '/todos/1',
    })
      .then(res => setResData([res]))
      .catch(err => console.log(err.message))
  }

  const simultaneousGetData = () => {
    axios.all([
      axiosInstance("/users", {
        params: {
          _limit: 5
        }
      }),
      axiosInstance("/comments", {
        params: {
          _limit: 5
        }
      })
    ])
      .then(
        axios.spread((users, comments) => {
          setResData([users])
        })
        // res => {
        //   console.log(res[0]);
        //   console.log(res[1]);
        // }
      )
      .catch(err => console.log(err.message));
  }


  const customHeaders = () => {
    const config = {
      headers: {
        'Content-Type': "Application.json",
        Authorization: 'jwt token or some token here'
      }
    }
    axiosInstance.post("/todos", {
      data: {
        title: 'NEW_TITLE WITH CUSTOM HEADERS',
        completed: true
      },
      config
    })
      .then(res => setResData([res]))
      .catch(err => console.log(err.message))
  }
  const errorHandling = () => {
    const options = {
      method: 'get',
      url: '/comments',
      params: {
        _limit: 5
      }
    }
    axiosInstance(options)
      .then(res => {
        setResData([res]);
      })
      .catch(err => {
        if (err.response.status === 404) {
          alert("OOPS :-( Page not Found");
          console.log(err.response.status);
          console.log(err.response.data);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err.message);
        }

      })

  }
  const cancelToken = () => {
    const source = axios.CancelToken.source();
    axiosInstance('/todos', {
      cancelToken: source.token
    })
      .then(res => setResData([res]))
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        }
      });

  }


  return (
    <>
      <div className="container">
        <h1 className='title'>HTTPS METHODS WITH AXIOS</h1>
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
        <div>
          <h2>Response</h2>
          {resData.map((response, i) => (
            <>

              <h2>Status: {response.status}</h2>
              <p>Headers: {JSON.stringify(response.headers, null, 2)}</p>
              Data: <pre>{JSON.stringify(response.data, null, 2)}</pre>
              <pre>Config: {JSON.stringify(response.config, null, 2)}</pre>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;