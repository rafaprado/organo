import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className='social-media'>
                <a href='https://google.com'>
                    <img src="/imagens/fb.png" alt=""/>
                </a> 

                <a href='https://google.com'>
                    <img src="/imagens/tw.png" alt=""/>
                </a> 
               
                <a href='https://google.com'>
                    <img src="/imagens/ig.png" alt=""/>
                </a>
            </div>

            <a href='https://google.com'><img src="/imagens/logo.png" alt=""/></a>

            <span>Desenvolvido por Alura.</span>
        </footer>
    );
}

export default Footer;