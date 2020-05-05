import React from 'react'

import { useLocation } from 'react-router'

import { Section } from "rbx";

import { HeaderContainer } from '../containers/HeaderContainer'
import { FooterContainer } from '../containers/FooterContainer'

import { GameContainer } from '../containers/GameContainer'

import queryString from 'query-string'

export const PuzzlePage = () => {
  const { search } = useLocation()

  const query = queryString.parse(search.indexOf('?') === 0 ? search.substr(1) : search)

  return (
    <div>
      <HeaderContainer />
      <Section style={{padding: '0'}}>
          <GameContainer goalIndex={query.goalIndex} goalColor={query.goalColor} r={query.r} g={query.g} b={query.b} y={query.y} />
      </Section> 
      <FooterContainer />
    </div>
  )
}

export default PuzzlePage