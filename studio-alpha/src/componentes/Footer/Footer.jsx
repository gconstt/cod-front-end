import './Footer.css'

function Footer(){
    return(
    <footer className='footer'>
        <div className='footer-conteiner'>
                <span>&copy; 2026 Studio Alpha</span>
            <div className='footer-icons'>
                <a href="#" aria-label='Instagram'>&#x1F4F7;</a>
                <a href="#" aria-label='Github'>&#x1F488;</a>
                <a href="#" aria-label='Gmail'>&#x2709;</a>
            </div>
        </div>
    </footer>
    )
}

export default Footer    