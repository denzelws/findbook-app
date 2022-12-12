
import './App.css'
import styled from 'styled-components'
import Header from './components/Header'
import Search from './components/Search'


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`


function App() {
  return (
    <AppContainer>
        <Header><p>Find<strong>Books</strong></p></Header>
        <Search />
    </AppContainer>
  )
}

export default App
