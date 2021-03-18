import React from 'react';
import styled from 'styled-components';

function Pin() {
    return (
            <Wrapper>
                <Container>
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
                </Container>
            </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
display: inline-flex;
padding: 8px;
`

const Container = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
cursor: pointer;
width: 236px;

img{
    width: 100%;
    display:flex;
    cursor: zoom-in;
    border-radius: 14px;
    object-fit: cover;
}
`
