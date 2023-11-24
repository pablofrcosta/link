import style from './style.module.css'
import { ChangeEvent, useState, useEffect } from "react"
import SingleForm from '../Form';
import CellPhone from '../CellPhone';

export default function Links() {

    const [selectOption, setSelectOption] = useState<string | undefined>('')
    const [link, setLink] = useState<string | undefined>('')
    const [dataForm, setdataForm] = useState<DataItem[]>([])
    const [showForm, setShowForm] = useState<DataLink[]>([])

    useEffect(() => {
        console.log(dataForm)
    }, [dataForm])

    interface DataItem {
        id: number,
        plataform: undefined | string,
        link: undefined | string
    }

    interface DataLink {
        id: number
        plataform: undefined | string,
        link: undefined | string
    }

    const handleSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
        setSelectOption(ev.target.value)
    }

    const handleLink = (ev: ChangeEvent<HTMLInputElement>) => {
        setLink(ev.target.value)
    }

    const handleSubmit = (ev: ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault()
        const newData: DataItem = {
            id: Math.floor(Math.random() * 1000),
            plataform: selectOption,
            link: link
        }
        setdataForm([...dataForm, newData])
    }

    const generateCardLink = () => {
        const newForm: DataLink = {
            id: Math.floor(Math.random() * 1000),
            plataform: selectOption,
            link: link
        }
        setShowForm((ev) => [...ev, newForm])
        console.log(newForm)
        console.log(showForm)
    }

    const handleGeneratedLink = () => {
        generateCardLink()
    }

    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.sectionLinks}>
                    <h2 style={{ backgroundColor: 'white' }}>Customize seus links</h2>
                    <p style={{ backgroundColor: 'white' }}>Adicionar/editar/remover links abaixo e compartilhar todos os seus perfis com o mundo!</p>
                    <button className={style.buttonLink} style={{ backgroundColor: 'white' }} onClick={handleGeneratedLink}>+Adicionar link</button>
                    <section style={{ marginBottom: '20vmin' }} >
                        {showForm.map((dataLink, index) => (
                            <div key={dataLink.id}>
                                <div className={style.linkHeader}>
                                    <h3>//Link #{index + 1}</h3>
                                    <button className={style.buttonRemove}>remover</button>
                                </div>
                                <SingleForm
                                    onSubmit={handleSubmit}
                                    handleSelect={handleSelect}
                                    handleLink={handleLink}
                                />
                            </div>
                        ))
                        }
                    </section >
                </div>
                <CellPhone links={dataForm} />
            </div>
        </div >
    )
}