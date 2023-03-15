/**
 * Component for showing category
 * @param {string} title
 * @param {string} href
 * @returns <Category title={Array(8).fill('Категория')} href={page}/>
 */


const Category = ({title, href}) => {
    return(
        <ul className='category'>
            {
                title.map((el, index) => {
                    return <li key={index}><a href={href}>{el}</a></li>
                })
            }
        </ul>
    );
}

export default Category;