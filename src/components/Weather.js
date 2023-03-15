/**
 * Component for showing weather
 * @param {string} title
 * @param {string} icon
 * @param {number} temperature
 * @returns <Category title={Array(8).fill('Категория')} href={page}/>
 */


const Weather = ({title, icon, temperature}) => {
    return(
        <div>
            <h3>{title}</h3>
            <img className="sun" src={icon} alt='' />
            <span>+ {temperature} &#8451;</span>
        </div>
    );
}

export default Weather;