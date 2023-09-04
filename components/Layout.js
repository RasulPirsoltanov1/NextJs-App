import Header from "./Header";
import styles from '../styles/Home.module.css'; 
import { styled } from "styled-components";

const StyledHeader=styled(Header)`
border: solid 2px greenyellow;
height: 1000px;
background-color: red;
`

export default function Layout({ children }) {
    return (<div >
        <StyledHeader></StyledHeader>
        <div className={styles.container} style={{backgroundColor:"yellow"}}>{children}</div>
        <footer>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
            </a>
        </footer>
    </div>)

}