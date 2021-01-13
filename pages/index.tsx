import Head from 'next/head'
import Navigation from "../src/navigation";
import styled from "styled-components";

function Home() {
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

const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`

export default Home