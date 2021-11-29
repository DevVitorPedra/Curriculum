import React from 'react'

import { StyledBackground } from './StyledBackground'
import Title from '../Title/Title'
import MainSectionCard from '../SectionsCard/MainSectionCard'
import MidCard from '../SectionsCard/MidSectionCard'
import FooterCard from '../SectionsCard/FooterSectionCard'


export default function Background() {
    return (
        <StyledBackground>
            <Title/>
            <MainSectionCard/>
            <MidCard/>
            <FooterCard/>
        </StyledBackground>
    )
}
