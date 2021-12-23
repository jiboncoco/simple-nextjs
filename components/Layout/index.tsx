import { ReactNode } from "react";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps { 
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {

    const { children, pageTitle } = props;

    return (
        <>
            <Head>
                <title>ArtByCode | {' '} { pageTitle }</title>
                <meta name="description" content="Website NextJS Basic"/>
            </Head>

            <div className="container mx-auto">
                <Header></Header>
                    <div className="ml-3">
                        {children}
                    </div>
                <Footer></Footer>
            </div>
        </>
    )
}
