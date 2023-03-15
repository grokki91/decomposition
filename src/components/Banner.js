/**
 * Component for showing banner
 * @param {string} banner
 * @returns <Banner banner={'Баннер'}/>
 */

const Banner = ({banner}) => {
    return(
        <div className="banner">
            {banner}
        </div>
    );
}

export default Banner;