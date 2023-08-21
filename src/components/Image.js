import './Image.css'
import { DigitalRain } from "react-digital-rain";
import { Carousel } from 'antd';

const Image = () => {


    return(
        <div className="image-container">
            <h1>Image</h1>
            <h2>Masonry Layout</h2>
            <div className="masonry-layout">
                <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/33f/b8a/60863d5189af87971c3874fccd.jpg" alt="pic"></img>
                <img src="https://wallpapers.com/images/featured/best-ever-desktop-bgt6dccypy1dfk0c.jpg" alt="pic"></img>
                <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/a5e/087/03dfa55c93aee526953abeff43.jpg" alt="pic"></img>
                <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/6f5/d79/6c2d4457e7b227254fbc0f51b8.jpg" alt="pic"></img>
                <img src="https://i.pinimg.com/736x/7e/d4/09/7ed409fc7f195254e923ede214838779.jpg" alt="pic"></img>
                <img src="https://petapixel.com/assets/uploads/2022/07/337294main_pg62_as11-40-5903_full-762x800.jpeg" alt="pic"></img>
                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/best-sunset-ever-kenneth-bourassa.jpg" alt="pic"></img>
                <img src="https://www.thephoblographer.com/wp-content/uploads/2017/09/camels-screencap.png" alt="pic"></img>
                <img src="https://mymodernmet.com/wp/wp-content/uploads/2021/12/best-photos-2021-simon-paul-needham-lion.jpeg" alt="pic"></img>
                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic"></img>
                <img src="https://assets.newatlas.com/dims4/default/8f236f3/2147483647/strip/true/crop/2940x1960+546+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fc3%2Fb7%2Ffcf101f241d3a2e58784fe548b16%2Fant-balancing-the-earth-by-anadgphotography-philippines-analiza-de-guzman-agora-images.jpg" alt="pic"></img>
                <img src="https://www.format.com/wp-content/uploads/best_landscape_photography_apps.jpg" alt="pic"></img>
            </div>

            <h2>Animated backgrounds</h2>

            <div className='background-gradient-transition'>
                <h3>background-gradient-transition</h3>
            </div>

            <div className='matrix-background'>
                <h3>Matrix</h3>
                <DigitalRain/>
            </div>

            <h2>Carousel - antd</h2>
            <div className='carousel'>
                <Carousel autoplay effect='fade'>
                    <img src='https://www.movieposters.com/cdn/shop/products/avengers-infinity-war_89e0d364_240x360_crop_center.progressive.jpg?v=1631200474' alt='movie poster'></img>
                    <img src='https://www.movieposters.com/cdn/shop/products/ef4b93ef8f7157de3f97ae1ff5d21b56_0526bb98-1f4a-4da5-b928-b0025f5e6371_240x360_crop_center.progressive.jpg?v=1573585487' alt='movie poster'></img>
                    <img src='https://www.movieposters.com/cdn/shop/products/950e439404c3d5eddd86ae876cec83bf_949b5045-2503-4883-bcd2-ff1f31f5b14c_240x360_crop_center.progressive.jpg?v=1573588746' alt='movie poster'></img>
                    <img src='https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_240x360_crop_center.progressive.jpg?v=1573587596' alt='movie poster'></img>
                    <img src='https://www.movieposters.com/cdn/shop/products/5cae019e64c0ee10ead36a00e60f0137_8b8714b2-b733-44ec-8f3f-f131a04915b5_240x360_crop_center.progressive.jpg?v=1614780406' alt='movie poster'></img>
                    <img src='https://www.movieposters.com/cdn/shop/products/spiderverse.2ndadv_240x360_crop_center.progressive.jpg?v=1619633475' alt='movie poster'></img>
                </Carousel>
            </div>

        </div>
    )
}

export default Image;