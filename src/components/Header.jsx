import ReactSVG from '../assets/react.svg'

const Header = () => {
    return(
        <header>
            <nav className="links-navegacao">
                <div className="logo">
                    <img src={ReactSVG} alt="" />
                </div>
                
                <a href="/">Home</a>
                <a href="/cadastro">Cadastro de Cliente</a>
                <a href="/conta-corrente">Conta Corrente</a>
                <a href="/financiamento">Financiamento</a>
                <a href="/sobre-nos">Sobre Nós</a>
            </nav>
        </header>
    )
}

export default Header;