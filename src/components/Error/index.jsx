import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/404.svg'

const ErrorWrapper = styled.div`
  margin: 31px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const Illustration = styled.img`
  max-width: 800px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={DefaultPicture} />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
