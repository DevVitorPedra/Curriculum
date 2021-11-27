import React from 'react'
import { StyledFooter, StyledMainCardContainer, StyledSections, StyledSectionsTitles } from './StyledSectionsCard'
import { AiOutlineHeart } from 'react-icons/ai'
import { StyledDescription } from './StyledSectionsCard'
import { FaChessBishop, FaHandsHelping} from 'react-icons/fa'
import {  MdSkateboarding } from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'
import { CgGames } from 'react-icons/cg'
import { GiGuitarHead } from 'react-icons/gi'
export default function FooterCard() {
    return (
        <StyledMainCardContainer>
      <StyledFooter>
          <StyledSections>
              <StyledSectionsTitles><AiOutlineHeart/> Paixões</StyledSectionsTitles>
            <StyledDescription><FaChessBishop/> Xadrez</StyledDescription>
            <StyledDescription><MdSkateboarding/> Skate</StyledDescription>
            <StyledDescription><CgGames/> Games</StyledDescription>
            <StyledDescription><GiGuitarHead/> Violão/Guitarra</StyledDescription>
          </StyledSections>
          <StyledSections>
          <StyledSectionsTitles><IoIosPeople/> Extracurriculares</StyledSectionsTitles>
          <StyledDescription><FaHandsHelping/> CEOB</StyledDescription>
          <StyledDescription><FaHandsHelping/> Voluntário Floripa</StyledDescription>
          </StyledSections>
      </StyledFooter>
      </StyledMainCardContainer>
    )
}
