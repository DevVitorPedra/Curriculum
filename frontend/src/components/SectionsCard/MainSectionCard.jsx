import React, { useContext} from 'react'
import { ModalContext } from '../Contexts/ModalContext/OpenModalContext';
import { TempDataContext } from '../Contexts/ModalContext/TempDataContext';
import { StyledAvatar, StyledSections, StyledMainCardContainer, StyledSectionsTitles, StyledDescription } from './StyledSectionsCard'
import { EXP } from '../../services/expData';
export default function MainCard() {
    const { modal,setModal } = useContext(ModalContext);
    const { tempData, setTempData } = useContext(TempDataContext)
        const expDispatcher = (title,content)=>{
            setModal(1)   
            setTempData([title,content])

        }
    return (
        <StyledMainCardContainer>
            <StyledSections>
                <StyledSectionsTitles><i style={{ fontSize: 30 }} className="bi bi-signpost-split"></i>
                    Experiências</StyledSectionsTitles>
               <StyledDescription onClick={()=>expDispatcher(EXP.americanas.title,EXP.americanas.content)}><i className="bi bi-signpost"></i> CD Lojas Americanas</StyledDescription>
                <StyledDescription onClick={()=>expDispatcher(EXP.flex.title,EXP.flex.content)}><i className="bi bi-signpost"></i> Flex Contact Center</StyledDescription>
                <StyledDescription onClick={()=>expDispatcher(EXP.barbeariavip.title,EXP.barbeariavip.content)}><i className="bi bi-signpost"></i> Barbeiro Autônomo</StyledDescription>
                <StyledDescription onClick={()=>expDispatcher(EXP.desenvolvedor.title,EXP.desenvolvedor.content)}><i className="bi bi-signpost"></i> Web/Mobile Designer</StyledDescription>
            </StyledSections>
            <StyledAvatar />
            <StyledSections>
                <StyledSectionsTitles><i style={{ fontSize: 30 }} className="bi bi-person-lines-fill"></i> Contatos</StyledSectionsTitles>
                <StyledDescription><i className="bi bi-linkedin"></i> Vitor Santos Pedra</StyledDescription>
                <StyledDescription><i className="bi bi-github"></i> DevVitorPedra</StyledDescription>
                <StyledDescription><i className="bi bi-envelope"></i> vitor.s.pedra</StyledDescription>
            </StyledSections>
        </StyledMainCardContainer>
        
    )
}
