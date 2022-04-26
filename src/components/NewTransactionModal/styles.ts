import { darken, transparentize } from "polished";
import styled from 'styled-components';

export const Container = styled.form`

h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
        color: var(--text-body);
    }

    & + input {
        margin-top: 1rem;
    }
}

button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    background: var(--green);
    color: #fff;
    border: 0;
    margin-top: 1.5rem;
    border-radius: 0.25rem;
    height: 4rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    font-weight: 600;

    &:hover{
        filter: brightness(0.88);
    }
}

`;

export const TransictionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors =  {
 green: '#33CC95',
 red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
      height: 4rem;
      border: 1px solid #d7d7d7;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 0.25rem;
      background: ${(props) => props.isActive 
      ? transparentize(0.9, colors[props.activeColor]) : 
      'transparent'
      };

      transition: border-color 0.2s;

      &:hover{
          border-color: ${darken(0.1, '#d7d7d7')};
      }

      img {
          height: 28px;
          width: 28px;
      }

      span {
          display: inline-block;
          margin-left: 1rem;
          font-size: 1rem;
          color: var(--text-title);
      }
`;