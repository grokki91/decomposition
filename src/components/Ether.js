/**
 * Component for showing Ether
 * @param {string} title
 * @param {string} href
 * @param {string} text
 * @param {string} icon
 * @returns <Ether title={'Эфир'} text={Array(3).fill('Управление как искусство')} href={page} icon={1}/>
 */


const Ether = ({title, href, icon, text}) => {
    return(
        <div>
            <h3>{title}</h3>
            <ul>
                {
                    text.map((el, index) => {
                        return <li key={index}><a href={href}>{icon++} {el}</a></li>
                    })
                }
            </ul>
        </div>
    );
}

export default Ether;