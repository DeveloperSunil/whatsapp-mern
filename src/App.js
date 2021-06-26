import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import { useEffect,useState } from 'react';
import axios from './axios';
function App() {
  const[messages,setMessages] = useState([]);
  useEffect(() => {
      axios.get('/messages/sync')
      .then(response => setMessages(response.data))
      .catch(error => console.log(error));
  }, []);
 
  useEffect(()=>{                  
    var pusher = new Pusher('02c9365bf601a05fc47f', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted',(data) => {
      alert(JSON.stringify(data));
      setMessages([...messages,data]);
    });
    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);
  return (
    <div className="app"> 
        <div className="app_body">
          <Sidebar />
          <Chat  messages={messages}/>
        </div>
      
    </div>
  );
}

export default App;
