import { Wrapper, Overlay, Details, Rating } from './styles'

import { RiStarFill } from 'react-icons/ri'

interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  name: string
  popularity: number
  backdropPath?: string
}

export function Card({ name, popularity, backdropPath, ...rest }: CardProps) {
  return (
    <div {...rest}>
      <Wrapper
        backdropPath={`https://image.tmdb.org/t/p/original${backdropPath}`}
      >
        <Overlay />
        <Details>
          <span>{name}</span>
          <Rating>
            <h5>{popularity}</h5>
            <RiStarFill color="#F6C800" />
          </Rating>
        </Details>
      </Wrapper>
    </div>
  )
}
