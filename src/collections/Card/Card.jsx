import React from 'react';
import { Container, Content } from './Elements';
import Video from '../../components/Video/Video';
import List from '../../components/List/List';
import Heading from '../../components/Heading/Heading';

export function Card() {

    return(
        <Container>
            <Heading title={"Managed agency selection"} stitle={"Strengthen your onboarding process"}/>
            <Content>
                <Video />
                <List />
            </Content>
        </Container>
        );
    }
