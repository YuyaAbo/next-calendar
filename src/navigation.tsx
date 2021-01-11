import { useState } from "react";
import styled from "styled-components";
import { CalendarToday } from '@material-ui/icons';
import { Button, IconButton } from "@material-ui/core";

const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1rem;
`

function Navigation() {
    const [currentDate, setCurrentDate] = useState(new Date())

    const prevMonth = () => {
        let d = new Date()
        if (currentDate.getMonth() === 0) {
            d.setFullYear(currentDate.getFullYear() - 1)
            d.setMonth(11)
        } else {
            d.setFullYear(currentDate.getFullYear())
            d.setMonth(currentDate.getMonth() - 1)
        }
        return d
    }

    const nextMonth = () => {
        let d = new Date()
        if (currentDate.getMonth() === 11) {
            d.setFullYear(currentDate.getFullYear() + 1)
            d.setMonth(0)
        } else {
            d.setFullYear(currentDate.getFullYear())
            d.setMonth(currentDate.getMonth() + 1)
        }
        return d
    }

    return (
        <Items>
            <CalendarToday />
            <p>カレンダー</p>
            <IconButton onClick={() => setCurrentDate(prevMonth())}>＜</IconButton>
            <IconButton onClick={() => setCurrentDate(nextMonth())}>＞</IconButton>
            <Button>{currentDate.getFullYear()} 年 {currentDate.getMonth() + 1} 月</Button>
        </Items>
    )
}

export default Navigation