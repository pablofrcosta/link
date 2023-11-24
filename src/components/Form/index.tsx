import { useState, ChangeEvent } from "react";
import { GoPaperclip } from "react-icons/go";
import { FaGithub, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import style from './style.module.css'

const SingleForm = ({ onSubmit, handleSelect, handleLink }: {
    onSubmit: Function;
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleLink: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
    const [selectOption, setSelectOption] = useState('');
    const [link, setLink] = useState('');

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectOption(e.target.value);
        handleSelect(e);
    };

    const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
        handleLink(e);
    };

    const getIcons = () => {
        if (selectOption === "github") {
            return <FaGithub size={30} />;
        } else if (selectOption === "youtube") {
            return <FaYoutube size={30} />;
        } else if (selectOption === "linkedin") {
            return <FaLinkedin size={30} />;
        } else if (selectOption === "instagram") {
            return <FaInstagram size={30} />;
        } else {
            return null;
        }
    };

    return (
        <form onSubmit={(e) => onSubmit(e, selectOption, link)}>
            <div className={style.linkContainer}>
                <label htmlFor="plataform" className={style.label}>Plataforma</label>
                <div style={{ display: 'flex' }}>
                    <span className={style.icon}>{getIcons()}</span>
                    <select className={style.select} name="plataform" id="plataform" onChange={handleSelectChange}>
                        <option disabled selected >Selecione uma plataforma</option>
                        <option value="github">Github</option>
                        <option value="youtube">Youtube</option>
                        <option value="linkedin">Linkedin</option>
                        <option value="instagram">Instagram</option>
                    </select>
                </div>
            </div>
            <div className={style.linkContainer} >
                <label htmlFor="link" className={style.label}>Link</label>
                <div style={{ display: 'flex' }}>
                    <span className={style.icon}><GoPaperclip /></span>
                    <input type="text" name="link" id="link" placeholder="https://br.linkedin.com/" className={style.link} onChange={handleLinkChange} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <button className={style.saveButton}>Salvar</button>
                </div>
            </div>
        </form>
    );
};
export default SingleForm