import { useState } from 'react'
import * as S from './styles'

import { books } from './dataBooks'

const Search = () => {
   const [researchedBooks, setResearchedBooks] = useState<any[]>([])

   console.log(researchedBooks)

    return (
    <S.SearchContainer>
      <S.Title>Já sabe por onde começar?</S.Title>
      <S.Subtitle>Encontre seu livro em nossa estante virtual</S.Subtitle>
      <S.Input 
       placeholder='Escreva sua próxima leitura'
       onBlur={e => {
       const text = e.target.value
       const result = books.filter(book => book.name.includes(text))
       setResearchedBooks(result)
       }}
      />
        {researchedBooks.map((book) => (
            <S.Result>
                <img src={book.src}/>
                <p>{book.name}</p>
            </S.Result>
        ))}
    </S.SearchContainer>
    )
}

export default Search