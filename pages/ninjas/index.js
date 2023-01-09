import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { ninjas: data}
    }
}

const NinjasList = ({ninjas}) => {
    return (
        <div>   
            <h1>All Member of Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={"/ninjas/" + ninja.id} key={ninjas.id}>
                    <div className={styles.single}>
                        <h3 >{ninja.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default NinjasList;