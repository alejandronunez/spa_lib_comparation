import React, {useState, useEffect} from 'react';
import './Binding.css';

function Binding({ message }) {
  console.log('Binding..data');
  const [message_data, changeMessage] = useState(message);

  const reverseMessage = () => changeMessage(message_data.split('').reverse().join(''));

  useEffect(() => {
    console.log('Binding..mounted');
  });
  useEffect(() => {
    console.log(`message: ${message.length}, `);
  }, [message]);
  useEffect(() => {
    console.log(`message_data: ${message_data.length}, `);
  }, [message_data]);

  console.log('Binding..computed');
  const message_computed = `${message}`;
  console.log(`message_computed: ${message_computed.length}, `);

  console.log('Binding..created');
  return (
    <div>
      <p>Prop: { message }</p>
      <p>Data: { message_data }</p>
      <p>{ message_computed }</p>
      <input
        value={message_data}
        onChange={event => changeMessage(event.target.value)}
      />
      <button
        onClick={reverseMessage}
      >
        Reverse Message
      </button>
    </div>
  );
}

export default Binding;
