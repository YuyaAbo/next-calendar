import { useState } from "react";
import styled from "styled-components";
import { CalendarToday } from '@material-ui/icons';
import { Button } from "@material-ui/core";
import color from "../styles/color";
import size from "../styles/size";

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
            <Title>カレンダー</Title>
            <Button onClick={() => setCurrentDate(navigateMonth(NavigationType.prev))}>＜</Button>
            <Button onClick={() => setCurrentDate(navigateMonth(NavigationType.next))}>＞</Button>
            <Button>{currentDate.getFullYear()} 年 {currentDate.getMonth() + 1} 月</Button>
        </Items>
    )
}

const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.div`
  color: ${color.PRIMARY};
  font-size: ${size.FONT.XLARGE}px;
`

export default Navigation