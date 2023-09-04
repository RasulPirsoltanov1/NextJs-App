import Link from "next/link";
import styled from "styled-components"

const HeaderDiv = styled.div`
  position: sticky;
  top: 10px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-evenly;
  font-size: 30px;
  font-style: italic;
`;

export default function Header({ title }) {
    return (
        <HeaderDiv>
            <Link href="/">Index</Link>
            <Link href="/about">About page!</Link>
        </HeaderDiv>
    );
}
