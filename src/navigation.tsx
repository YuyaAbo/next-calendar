import styled from "styled-components";

function Navigation() {
    const Items = styled.div`
      display: flex;
      flex-direction: row;
    `

    return (
        <Items>
            <p>カレンダー</p>
            <p>＜</p>
            <p>＞</p>
            <p>2020年1月</p>
        </Items>
    )
}

export default Navigation