/**
 * Component for showing map
 * @param {string} title
 * @param {string} href
 * @param {string} text
 * @returns <Map title={'Карта Германии'} href={page} text={'Расписания'}/>
 */

const Map = ({title, text, href}) => {
    return(
        <div>
            <h3>{title}</h3>
            <div><a href={href}>{text}</a></div>
        </div>
    );
}

export default Map;