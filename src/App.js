import React, {useState, useEffect} from 'react';
import List from './List.jsx';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState();
  const [loading, setLoading] = useState(false);

  const changeInputData = (e) => {
    setNewTodos(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {id: todos.length+1, title: newTodos}]);
  }

  const fetchInitailData = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:8080/todo');
    const initialData = await response.json();
    setTodos(initialData);
    setLoading(false);
  }

  // 랜더링 이후에 후속 처리가 가능하다.
  useEffect( () => {
    console.log('새로운 내용이 추가되었네요. : ', todos);
    setNewTodos('')
  }, [todos])


  // 콜백 함수에 직접 비동기 함수를 넣지 말아라.
  useEffect( () => {
    // :: 비동기 데이터 처리
    fetchInitailData();
  }, [])

  return (
    <>
      <h1>Todo Application</h1>

      <form>
        <input type="text" name="" onChange={changeInputData} value={newTodos}/>
        <button onClick={addTodo}>할 일 추가</button>
      </form>

      <List todos={todos} loading={loading}/>
    </>
  );
};

export default App;