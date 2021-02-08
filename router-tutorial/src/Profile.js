import React from "react";

const data = {
    velopert: {
        name: "김민중",
        description: "리액트 좋아하는개발자",
    },
    gildong: {
        name: "홍길동",
        description: "고전 소설 홍길동전 주인공",
    },
};

const Profile = ({ match, aaa }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자.</div>;
    }
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;