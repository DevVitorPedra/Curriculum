import React, { useContext} from 'react'
import { ModalContext } from '../Contexts/ModalContext/OpenModalContext';
import { TempDataContext } from '../Contexts/ModalContext/TempDataContext';
import { StyledAvatar, StyledSections, StyledMainCardContainer, StyledSectionsTitles, StyledDescription, StyledLink } from './StyledSectionsCard'
import { EXP } from '../../services/expData';
import ReactTooltip from 'react-tooltip';
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
               <StyledDescription onClick={()=>expDispatcher(EXP.americanas.title,EXP.americanas.content)}><i className="bi bi-signpost"></i> CD Americanas</StyledDescription>
                <StyledDescription onClick={()=>expDispatcher(EXP.flex.title,EXP.flex.content)}><i className="bi bi-signpost"></i> Flex CC</StyledDescription>
                <StyledDescription onClick={()=>expDispatcher(EXP.barbeariavip.title,EXP.barbeariavip.content)}><i className="bi bi-signpost"></i> Barbeiro</StyledDescription>
                <StyledDescription onClick={()=>expDispatcher(EXP.desenvolvedor.title,EXP.desenvolvedor.content)}><i className="bi bi-signpost"></i> Web/Mobile Dev</StyledDescription>
            </StyledSections>
            <StyledAvatar />
            <StyledSections>
                <StyledSectionsTitles><i style={{ fontSize: 30 }} className="bi bi-person-lines-fill"></i> Contatos</StyledSectionsTitles>
                <StyledDescription><StyledLink href="https://www.linkedin.com/in/vitor-santos-pedra-179a831bb/" target="_blank"><i className="bi bi-linkedin"></i> Vitor Pedra</StyledLink></StyledDescription>
                <StyledDescription><StyledLink href="https://github.com/DevVitorPedra" target="_blank"><i className="bi bi-github"></i> DevVitorPedra</StyledLink></StyledDescription>
                <StyledDescription onClick={()=>{
                    navigator.clipboard.writeText('vitor.s.pedra@gmail.com')
                    
            }} data-tip="Email copiado!" ><i className="bi bi-envelope"></i> vitor.s.pedra</StyledDescription>
            <ReactTooltip place="bottom" globalEventOff="click" event="click" />
            </StyledSections>
        </StyledMainCardContainer>
        
    )
}
