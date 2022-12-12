import logo from '../../img/logo.svg'
import './index.css'
import styled from 'styled-components'

import profile from '../../img/perfil.svg'
import bag from '../../img/sacola.svg'

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante']
const icons = [profile, bag]

export type HeaderProps = {
    children: React.ReactNode
}

const HeaderContainer = styled.header`
     background-color: #fafafa;
     display: flex;
     justify-content: space-around;

`

const Header = ({children}: HeaderProps) => {
    return (
    <HeaderContainer>
        <div className='logo'>
            <img src={logo} alt='Representação da empresa' className='logo-img'/>
            {children}
        </div>

        <div className="options">
          {textOptions.map((text) => (
            <li className='option'>{text}</li>
          ))}
        </div>  

        <div className="icons">
          {icons.map((icon) => (
            <li><img src={icon} alt='Ícone representado'/></li>
          ))}
        </div>
    </HeaderContainer>
)}

export default Header