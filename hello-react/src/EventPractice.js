import React, { useState } from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        username: "",
        message: "",
    });
    const {username, message} = form;
    
    const onChangeObj = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm);
    }

    const onClickObj = () => {
        alert(username + ":" + message);
        setForm({
            username:"",
            message:"",
        });
    };
    const onKeyPressObj = (e) => {
        if (e.key === "Enter") {
            onClickObj();
        }
    };

    return (
        <div>
            <h1>이벤트 실습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeObj}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력하세요"
                value={message}
                onChange={onChangeObj}
                onKeyPress={onKeyPressObj}
            />
            <button onClick={onClickObj}>확인</button>
            {username}
            {message}
        </div>
    );
};

export default EventPractice;
