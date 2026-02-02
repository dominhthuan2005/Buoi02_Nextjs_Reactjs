import { useState } from "react";

function App3() {
    // State lưu tên và email
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div style={{ padding: "20px" }}>
            <h2>Form nhập thông tin</h2>

            {/* Input tên */}
            <div>
                <label>Tên: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {/* Input email */}
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <hr />

            {/* Hiển thị dữ liệu */}
            <h3>Dữ liệu bạn đã nhập:</h3>
            <p>Tên: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default App3;
