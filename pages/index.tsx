import Head from 'next/head'
import Navigation from "../src/navigation";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Calendar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
    </Container>
  )
}
