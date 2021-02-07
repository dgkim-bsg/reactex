import React, { useState } from "react";

const Info = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    const onChangename = (e) => {
        setName(e.target.value);
    };
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };
    return (
        <div>
            <div>
                <input value={name} onChange={onChangename} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
