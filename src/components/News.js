/**
 * Component for showing news
 * @param {string} news
 * @param {string} href
 * @param {string} icon
 * @returns <News href={page} icon={1} news={Array(5).fill('Some text of news')}/>
 */

const News = ({news, href, icon}) => {
    return(
        <ul>
            {
                news.map((el, index) => {
                    return <li key={index}><a href={href}>{icon++} {el}</a></li>
                })
            }
        </ul>
    );
}

export default News;