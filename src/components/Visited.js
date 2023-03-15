/**
 * Component for showing visited
 * @param {string} title
 * @param {string} href
 * @param {string} text
 * @returns <News href={page} icon={1} news={Array(5).fill('Some text of news')}/>
 */

const Visited = ({title, text, href}) => {
    return(
        <div>
            <h3>{title}</h3>
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

export default Visited;