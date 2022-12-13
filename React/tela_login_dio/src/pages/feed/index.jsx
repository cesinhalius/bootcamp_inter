import React from 'react'

import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import { Header } from '../../components/Header'

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card/>
            <Card/>
            <Card/>
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
               <UserInfo nome="Diego"         image="https://avatars.githubusercontent.com/u/2254731?v=4" percentual={85}/>
               <UserInfo nome="Cesar Augusto" image="https://avatars.githubusercontent.com/u/43553774?v=4"percentual={75}/>
               <UserInfo nome="Mayk Brito"    image="https://avatars.githubusercontent.com/u/6643122?v=4" percentual={65}/>
               <UserInfo nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={45}/>
        </Column>
    </Container>
    </>
  )
}

export { Feed };
