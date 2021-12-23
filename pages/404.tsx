import { useRouter } from "next/router";
import { useEffect } from "react"

export default function Custom404() {

    const router = useRouter();

    useEffect(() =>{
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }, []);

    return (
        <div>
            <h1>Opps Halaman 404</h1>
        </div>
    )
}
