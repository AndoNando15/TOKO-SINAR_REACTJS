import { useState } from 'react';

const Order = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{'cek' + count}</button>
    </>
  );
};

export default Order;
