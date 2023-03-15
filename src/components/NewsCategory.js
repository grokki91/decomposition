/**
 * Component for showing news category
 * @param {string} title
 * @param {string} href
 * @returns <NewsCategory title={Array(3).fill('Сейчас в СМИ')} href={page} />
 */


const NewsCategory = ({title, href}) => {
    return(
        <>
            <ul className="news-category">
                {
                    title.map((el, index) => {
                        return <li key={index}><a href={href}>{el}</a></li>
                    })
                }
            </ul>
        </>
    );
}

export default NewsCategory;