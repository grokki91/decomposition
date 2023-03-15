/**
 * Component for showing logo
 * @param {string} logo
 * @param {string} page
 * @returns <Logo logo={logo} page={page}/>
 */

const Logo = ({logo, page}) => {
    return(
        <>
            <a href={page}>
                <img src={logo} alt=''/>
            </a>
        </>
    );
}

export default Logo;