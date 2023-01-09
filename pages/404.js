import  { useEffect } from "react";
import {useRouter} from "next/router";
import Link from "next/link";

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        }, 3000)
    }, [])


    return (
        <div class="not-found">
            <h1>Ooops...</h1>
            <p>That page cannot be found</p>
            <p>Go back to <Link href="/" className="a">Homepage</Link></p>
        </div>
    );
}
 
export default NotFound;