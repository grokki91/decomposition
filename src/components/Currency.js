/**
 * Component for showing currency
 * @param {string} value
 * @param {string} difference
 * @returns <Currency value={Array(3).fill('USD MOEX 63,55')} difference={+ 0.05}/>
 */

const Currency = ({value, difference}) => {
    return(
        <ul className="currency">
            {
                value.map((el, index) => {
                    return <li key={index}>{el} {difference}</li>
                })
            }
        </ul>
    );
}

export default Currency;