import React, { useState } from 'react'

import { StyledBackground } from './StyledBackground'
import Title from '../Title/Title'
import MainSectionCard from '../SectionsCard/MainSectionCard'
import MidCard from '../SectionsCard/MidSectionCard'
import FooterCard from '../SectionsCard/FooterSectionCard'
import Modal from '../Modal/Modal'
import { ModalContext } from '../Contexts/ModalContext/OpenModalContext'
import { TempDataContext } from '../Contexts/ModalContext/TempDataContext'
export default function Background() {
    const [modal,setModal] = useState(0)
    const [tempData, setTempData] = useState([])
    console.log(tempData,typeof(modal))
    return (
        <StyledBackground>
            <ModalContext.Provider value={{ modal, setModal }}>
                <TempDataContext.Provider value={{ tempData, setTempData }}>
                    <Title />
                    <MainSectionCard />
                    <MidCard />
                    <FooterCard />
                    {
                        modal === 1 ? <Modal title={tempData[0]} content={tempData[1]} /> : null
                    }
                </TempDataContext.Provider>
            </ModalContext.Provider>
        </StyledBackground>
    )
}
