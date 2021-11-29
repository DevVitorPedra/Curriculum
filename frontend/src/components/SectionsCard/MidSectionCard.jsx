import React from 'react'
import { StyledDescription, StyledMainCardContainer, StyledSections, StyledSectionsTitles } from './StyledSectionsCard'
import { DiReact, DiNodejsSmall } from 'react-icons/di'
import { FaAssistiveListeningSystems, FaGraduationCap} from 'react-icons/fa'
import { SiJavascript, SiStyledcomponents } from 'react-icons/si'
import { RiEnglishInput, RiFocus3Line } from 'react-icons/ri'
import {FiMoreHorizontal} from 'react-icons/fi'
import { MdOutlinePsychology } from 'react-icons/md'
import { ImUserPlus} from 'react-icons/im'
export default function MidCard() {
    return (
        <StyledMainCardContainer>
            <StyledSections>
            <StyledSectionsTitles><i className="bi bi-pc-display-horizontal"></i> Desenvolvimento</StyledSectionsTitles>
            <StyledDescription ><SiJavascript/>Javascript</StyledDescription>
            <StyledDescription><DiReact/> React JS </StyledDescription>
            <StyledDescription><DiNodejsSmall/> Node JS </StyledDescription>
            <StyledDescription><SiStyledcomponents/> Styled Components </StyledDescription>
            <StyledDescription><FiMoreHorizontal/> mais </StyledDescription>
            </StyledSections>
            <StyledSections>
            <StyledSectionsTitles><i className="bi bi-journal-bookmark"></i> Hard Skills</StyledSectionsTitles>
            <StyledDescription><FaGraduationCap/> Gestão de Turismo</StyledDescription>
            <StyledDescription><FaGraduationCap/> Análise e Des. de Sistemas</StyledDescription>
            <StyledDescription><FaGraduationCap/> Desenvolvedor Fullstack</StyledDescription>
            <StyledDescription><RiEnglishInput/> Inglês</StyledDescription>
            <StyledDescription><FiMoreHorizontal/> mais </StyledDescription>
            
            </StyledSections>
            <StyledSections>
            <StyledSectionsTitles><i className="bi bi-puzzle"></i> Soft Skills</StyledSectionsTitles>

            <StyledDescription><FaAssistiveListeningSystems/>Escuta Ativa</StyledDescription>
            <StyledDescription><RiFocus3Line/>Foco</StyledDescription>
            <StyledDescription><ImUserPlus/>Pró-ativo</StyledDescription>
            <StyledDescription><MdOutlinePsychology/>Criatividade</StyledDescription>
            <StyledDescription><FiMoreHorizontal/> mais </StyledDescription>
            
            </StyledSections>

        </StyledMainCardContainer>
    )
}
