import styled from 'styled-components';


export const Container = styled.header`

    background: var(--blue);


`;

export const Content = styled.div`
    //serve para fiar menor que a página ..
    max-width: 1120px;

    //serve para alinhar ao centro ..
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        //serve para determinar o tempo ..
        transition: filter 0.2s;

        &:hover {
            //varias funções filter com blur etc..
            filter: brightness(0.9);
        }
    }

`;