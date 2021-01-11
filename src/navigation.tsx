import styled from "styled-components";
import { CalendarToday } from '@material-ui/icons';
import { Button, IconButton } from "@material-ui/core";

function Navigation() {
    const Items = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: 1rem;
    `

    return (
        <Items>
            <CalendarToday />
            <p>カレンダー</p>
            <IconButton>＜</IconButton>
            <IconButton>＞</IconButton>
            <Button>2020年1月</Button>
        </Items>
    )
}

export default Navigation