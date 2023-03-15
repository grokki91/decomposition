/**
 * Component for showing TV
 * @param {string} title
 * @param {string} href
 * @param {string} text
 * @param {string} icon
 * @returns <TV title={'Телепрограмма'} icon={'Эфир'} text={Array(3).fill('ТНТ. Best')} href={page}/>
 */

const TV = ({title, text, href, icon}) => {
    return(
        <div>
            <h3>{title} {icon}</h3>
            <ul>
                {
                    text.map((el, index) => {
                        return <li key={index}><a href={href}>{el}</a></li>
                    })
                }
            </ul>
        </div>
    );
}

export default TV;