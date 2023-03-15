/**
 * Component for showing header block
 * @param {string} title
 * @param {string} img
 * @returns <HeaderBlock title={'Работа над ошибками'} img={img}/>
 */

const HeaderBlock = ({title, img}) => {
    return(

        <div className="box">
            <img src={img} alt=''/>
            <div>{title}</div>
        </div>
    );
}

export default HeaderBlock;