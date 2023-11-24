import { BiCategory } from "react-icons/bi";
import style from './style.module.css'

export default function Header() {
    return (
        <div className={style.header}>
            <p><BiCategory size={40} style={{ backgroundColor: "white" }} />devlinks</p>
        </div>
    )
}