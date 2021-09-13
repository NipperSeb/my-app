import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../color.js'
////////////////////////////////////////////////////////////////////////////////////
const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
///////////////////////////////////////////////////////////////////////////////////
function Header() {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/freelances">Freelance</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Questionnaire
      </StyledLink>
    </nav>
  )
}

export default Header