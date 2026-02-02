"use client";

import { useState } from "react";

interface Props {
  users: Array<unknown>;
}

export default function Counter({ users }: Props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}
