import React from 'react'
import { StyledAvatar, StyledSections, StyledMainCardContainer, StyledSectionsTitles, StyledDescription } from './StyledSectionsCard'

export default function MainCard() {
    return (
        <StyledMainCardContainer>
            <StyledSections>
                <StyledSectionsTitles><i style={{ fontSize: 30 }} className="bi bi-signpost-split"></i>
                    Experiências</StyledSectionsTitles>
                <StyledDescription><i className="bi bi-signpost"></i> CD Lojas Americanas</StyledDescription>
                <StyledDescription><i className="bi bi-signpost"></i> Flex Contact Center</StyledDescription>
                <StyledDescription><i className="bi bi-signpost"></i> Barbeiro Autônomo</StyledDescription>
                <StyledDescription><i className="bi bi-signpost"></i> Web/Mobile Designer</StyledDescription>
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
