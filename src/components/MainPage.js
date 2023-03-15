import Banner from "./Banner";
import Category from "./Category";
import Currency from "./Currency";
import Date from "./Date";
import Ether from "./Ether";
import HeaderBlock from "./HeaderBlock";
import Logo from "./Logo";
import Map from "./Map";
import News from "./News";
import NewsCategory from "./NewsCategory";
import Search from "./Search";
import TV from "./TV";
import Visited from "./Visited";
import Weather from "./Weather";

/**
 * Component for showing page
 * @returns <MainPage />
 */

const MainPage = () => {
    const logo = 'https://mobile-review.com/all/wp-content/uploads/2021/04/yandex_logo_ru-1.png';
    const page = 'https://ya.ru';
    const img = 'https://picsum.photos/150';
    const sun = 'https://www.wideworld-sports.com/wp-content/uploads/2017/09/ico03-hover.png';

    return(
        <>
            <div className="logo">
                <Logo logo={logo} page={page}/>
            </div>
            <div className="main">
                <div className="header-news">
                    <NewsCategory title={Array(3).fill('Сейчас в СМИ')} href={page} />
                    <Date date={'31 июля, среда 02:32'}/>
                </div>
                <div className="box-news">
                    <News href={page} icon={1} news={Array(5).fill('Some text of news')}/>
                    <HeaderBlock title={'Работа над ошибками'} img={img}/>
                </div>
                <Currency value={Array(3).fill('USD MOEX 63,55')} difference={+ 0.05}/>
                <Category title={Array(8).fill('Категория')} href={page}/>
                <Search />
                <Banner banner={'Баннер'}/>
                <div className="box-block">
                    <Weather icon={sun} title={'Погода'} temperature={17}/>
                    <Visited title={'Посещаемое'} href={page} text={Array(3).fill('Недвижимость - о сталинках')}/>
                    <Map title={'Карта Германии'} href={page} text={'Расписания'}/>
                    <TV title={'Телепрограмма'} icon={'Эфир'} text={Array(3).fill('ТНТ. Best')} href={page}/>
                    <Ether title={'Эфир'} text={Array(3).fill('Управление как искусство')} href={page} icon={1}/>
                </div>
            </div>
        </>
    );
}

export default MainPage;