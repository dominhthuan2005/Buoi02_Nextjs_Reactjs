import React from 'react'
import Header from './Component/Header'
import StudentInfo from './Component/StudentInfo'
import Footer from './Component/Footer'

import Counter from './Component/Counter'
import { useState } from "react";
// const App = () => {
//   return (
//     <div>
//       {/* <Header name="Đỗ Minh Thuận " />
//       <Footer mssv="23673191" />
//       <StudentInfo lop="DHKTPM19B" /> */}

//       {/* <Counter /> */}
//     </div>
//   )
// }

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Form nhập thông tin</h2>

      <div>
        <label>Tên: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <hr />

      <h3>Dữ liệu bạn đã nhập:</h3>
      <p>Tên: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default App