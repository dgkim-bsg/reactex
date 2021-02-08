import React from "react";
import qs from "qs";

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, //이 설정을 통해 문자열 맨 앞의 ? 를 생략 함 (&의 경우 true로 하지 않아도 자동으로 생략됨)
    });
    console.log("query : ");
    console.log(query);
    const showDetail = query.detail === "true";
    return (
        <div>
            <h1>소개(About.js)</h1>
            <p> 리액트 라우터 예제 프로젝트</p>
            {showDetail && <p>121212</p>}
        </div>
    );
};

export default About;
