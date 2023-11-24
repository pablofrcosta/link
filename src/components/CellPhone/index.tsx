import style from "./style.module.css"
import { FaGithub, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

type Link = {
    id: number;
    plataform: undefined | string;
    link: undefined | string;
};
type CellphoneProps = {
    links: Link[];
};

const Cellphone: React.FC<CellphoneProps> = (props) => {

    const getIconForPlatform = (platform: string | undefined) => {
        switch (platform) {
            case "github":
                return <FaGithub size={25} />;
            case "youtube":
                return <FaYoutube size={25} />;
            case "linkedin":
                return <FaLinkedin size={25} />;
            case "instagram":
                return <FaInstagram size={25} />;
            // Adicione mais cases conforme necessário para outras plataformas
            default:
                return null; // Retorna null caso a plataforma não tenha um ícone correspondente
        }
    };

    const { links } = props
    if (!links) {
        <div className={style.cellContainer}>
        </div>
    } else {

        return (
            <div className={style.cellContainer}>
                <h1>Links</h1>
                <div className={style.links} >
                    {
                        links.map(link => (
                            <div key={link.id} className={style.cardLinks}>
                                <a href={link.link} target="blank">{getIconForPlatform(link.plataform)}{link.plataform}</a>
                            </div>
                        ))
                    }
                </div >
            </div >
        );
    };
}

export default Cellphone