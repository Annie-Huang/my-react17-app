import { useEffect, useState } from 'react';

export interface TodoType {
  userId: string;
  id: string;
  title: string;
  complete: boolean;
}

const Todo = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [todo, setTodo] = useState<TodoType | null>(null);

  // If I click 'Toggle Todo' Button within 3 seconds, I will get this error:
  // index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  //     at Todo (http://localhost:3000/static/js/main.chunk.js:688:87)
  //
  // However, react 18 seems to resolve this problem!?!
  // C:\react\react-sandbox\src\components\Todo.jsx

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTodo(data);
          setLoading(false);
        }, 3000);
      });
  }, []);

  return loading ? <h3>Loading...</h3> : <h1>{todo?.title}</h1>;
};

export default Todo;
