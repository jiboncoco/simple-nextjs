import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home(){
    return (
        <>
            <Header />
            <h1 className={styles['title-homepage']}>Achmad Fauzi</h1>
            <Footer />
        </>
    );
}
