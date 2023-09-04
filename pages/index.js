import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Home() {
  return (
      <div>
        <Layout childeren={<input type='text' placeholder='name...'></input>}>abdjksfasdask</Layout>
        <h1>Index</h1>
    </div>
  )
}
