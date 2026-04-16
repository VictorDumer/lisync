import appleBtn from '../../../../src/assets/buttons.svg'
export default function Cabecario(){
    return(
        
            <header>
                <img src={appleBtn} alt="logo" className='imagem'/>
                <h1>LI<span className='colorido'>SYNC</span></h1>
                <text>v1.0</text>
            </header>
        
    )
}