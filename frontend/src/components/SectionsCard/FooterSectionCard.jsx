import React, { useContext} from 'react'
import { StyledFooter, StyledMainCardContainer, StyledSections, StyledSectionsTitles } from './StyledSectionsCard'
import { AiOutlineHeart } from 'react-icons/ai'
import { StyledDescription } from './StyledSectionsCard'
import { FaChessBishop, FaHandsHelping} from 'react-icons/fa'
import {  MdSkateboarding } from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'
import { CgGames } from 'react-icons/cg'
import { GiGuitarHead } from 'react-icons/gi'
import { ModalContext } from '../Contexts/ModalContext/OpenModalContext'
import { TempDataContext } from '../Contexts/ModalContext/TempDataContext'
import { PASSIONS } from '../../services/passionsData'
import { EXTRA } from '../../services/extraData'
export default function FooterCard() {
  const {modal,setModal} = useContext(ModalContext)
  const {TempData,setTempData} = useContext(TempDataContext)
  const expDispatcher = (title,content)=>{
      setModal(1)   
      setTempData([title,content])

  }
    return (
        <StyledMainCardContainer>
     
          <StyledSections style={{height:200}} >
              <StyledSectionsTitles><AiOutlineHeart/> Paixões</StyledSectionsTitles>
            <StyledDescription  onClick={()=>expDispatcher(PASSIONS.chess.title,PASSIONS.chess.content)}><FaChessBishop/> Xadrez</StyledDescription>
            <StyledDescription  onClick={()=>expDispatcher(PASSIONS.esportes.title,PASSIONS.esportes.content)}><MdSkateboarding/> Esportes</StyledDescription>
            <StyledDescription  onClick={()=>expDispatcher(PASSIONS.games.title,PASSIONS.games.content)}><CgGames/> Games</StyledDescription>
            <StyledDescription  onClick={()=>expDispatcher(PASSIONS.musica.title,PASSIONS.musica.content)}><GiGuitarHead/> Música</StyledDescription>
          </StyledSections>
          <StyledSections style={{height:200}}>
          <StyledSectionsTitles><IoIosPeople/> Extra</StyledSectionsTitles>
          <StyledDescription  onClick={()=>expDispatcher(EXTRA.ceob.title,EXTRA.ceob.content)}><FaHandsHelping/> CEOB</StyledDescription>
          <StyledDescription  onClick={()=>expDispatcher(EXTRA.floripa.title,EXTRA.floripa.content)}><FaHandsHelping/> Voluntário Floripa</StyledDescription>
          </StyledSections>
    
      </StyledMainCardContainer>
    )
}
