import React, { useContext } from 'react'
import { StyledDescription, StyledMainCardContainer, StyledSections, StyledSectionsTitles } from './StyledSectionsCard'
import { DEV } from '../../data/devData'
import { FaAssistiveListeningSystems, FaDatabase, FaGraduationCap,FaReact, FaJsSquare} from 'react-icons/fa'
import { RiEnglishInput, RiFlutterFill, RiFocus3Line } from 'react-icons/ri'
import {FiMoreHorizontal} from 'react-icons/fi'
import { MdOutlinePsychology } from 'react-icons/md'
import { ImUserPlus} from 'react-icons/im'
import { ModalContext } from '../Contexts/ModalContext/OpenModalContext'
import { TempDataContext } from '../Contexts/ModalContext/TempDataContext'
import { HS } from '../../data/hardSkillsData'
import { SS } from '../../data/softSkillsData'
export default function MidCard() {
    const {modal,setModal} = useContext(ModalContext)
    const {TempData,setTempData} = useContext(TempDataContext)
    const expDispatcher = (title,content)=>{
        setModal(1)   
        setTempData([title,content])

    }
    return (
        <StyledMainCardContainer>
            <StyledSections>
            <StyledSectionsTitles><i className="bi bi-pc-display-horizontal"></i> Dev</StyledSectionsTitles>
            <StyledDescription  onClick={()=>expDispatcher(DEV.javascript.title,DEV.javascript.content)}><FaJsSquare/> Javascript</StyledDescription>
            <StyledDescription  onClick={()=>expDispatcher(DEV.python.title,DEV.python.content)}><FaReact/>  Python </StyledDescription>
            <StyledDescription  onClick={()=>expDispatcher(DEV.flutter.title,DEV.flutter.content)}><RiFlutterFill/> Flutter </StyledDescription>
            <StyledDescription  onClick={()=>expDispatcher(DEV.databases.title,DEV.databases.content)}><FaDatabase/> Bancos de Dados </StyledDescription>
            <StyledDescription onClick={()=>expDispatcher(DEV.mais.title,DEV.mais.content)}><FiMoreHorizontal/> mais </StyledDescription>
            </StyledSections>
            <StyledSections>
            <StyledSectionsTitles><i className="bi bi-journal-bookmark"></i> Hard Skills</StyledSectionsTitles>
            <StyledDescription onClick={()=>expDispatcher(HS.gt.title,HS.gt.content)}><FaGraduationCap/> Gest??o de Turismo</StyledDescription>
            <StyledDescription onClick={()=>expDispatcher(HS.sistemas.title,HS.sistemas.content)}><FaGraduationCap/> Des. de Sistemas</StyledDescription>
            <StyledDescription onClick={()=>expDispatcher(HS.devinhouse.title,HS.devinhouse.content)}><FaGraduationCap/> DEVinHouse</StyledDescription>
            <StyledDescription onClick={()=>expDispatcher(HS.ingles.title,HS.ingles.content)}><RiEnglishInput/> Ingl??s</StyledDescription>
            <StyledDescription onClick={()=>expDispatcher(HS.mais.title,HS.mais.content)}><FiMoreHorizontal/> mais </StyledDescription>
            
            </StyledSections>
            <StyledSections>
            <StyledSectionsTitles><i className="bi bi-puzzle"></i> Soft Skills</StyledSectionsTitles>

            <StyledDescription onClick={()=>expDispatcher(SS.escuta.title,SS.escuta.content)}><FaAssistiveListeningSystems/> Escuta Ativa</StyledDescription>
            <StyledDescription onClick={()=>expDispatcher(SS.foco.title,SS.foco.content)}><RiFocus3Line/> Dedica????o</StyledDescription>
            <StyledDescription onClick={()=>expDispatcher(SS.proativo.title,SS.proativo.content)}><ImUserPlus/> Pr??-ativo</StyledDescription>
            <StyledDescription onClick={()=>expDispatcher(SS.criatividade.title,SS.criatividade.content)}><MdOutlinePsychology/> Criatividade</StyledDescription>
         
            
            </StyledSections>

        </StyledMainCardContainer>
    )
}
