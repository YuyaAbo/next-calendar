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

// ref https://engineering.linecorp.com/ja/blog/typescript-enum-tree-shaking/
const NavigationType = {
    prev: 'prev',
    next: 'next'
} as const;
type NavigationType = typeof NavigationType[keyof typeof NavigationType];

function Navigation() {
    const [currentDate, setCurrentDate] = useState(new Date())

    const navigateMonth = (type: NavigationType) => {
        let d = new Date()
        if (type === NavigationType.prev) {
            if (currentDate.getMonth() === 0) {
                d.setFullYear(currentDate.getFullYear() - 1)
                d.setMonth(11)
            } else {
                d.setFullYear(currentDate.getFullYear())
                d.setMonth(currentDate.getMonth() - 1)
            }
        } else {
            if (currentDate.getMonth() === 11) {
                d.setFullYear(currentDate.getFullYear() + 1)
                d.setMonth(0)
            } else {
                d.setFullYear(currentDate.getFullYear())
                d.setMonth(currentDate.getMonth() + 1)
            }
        }
        return d
    }

    return (
        <Items>
            <CalendarToday />
            <p>カレンダー</p>
            <IconButton onClick={() => setCurrentDate(navigateMonth(NavigationType.prev))}>＜</IconButton>
            <IconButton onClick={() => setCurrentDate(navigateMonth(NavigationType.next))}>＞</IconButton>
            <Button>{currentDate.getFullYear()} 年 {currentDate.getMonth() + 1} 月</Button>
        </Items>
    )
}

export default Navigation