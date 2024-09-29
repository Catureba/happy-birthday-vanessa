import Style from './style.module.css';
import {useState} from 'react';
import Photo from '../Photo/index.jsx';

import DiCaprio from '../../assets/photos/DiCaprio.jpg';
import anakin1 from '../../assets/photos/anakin1.jpg';
import anakin2 from '../../assets/photos/anakin2.jpg';
import anakin3 from '../../assets/photos/anakin3.jpg';
import charles1 from '../../assets/photos/charles1.jpg';
import charles2 from '../../assets/photos/charles2.jpg';
import charles3 from '../../assets/photos/charles3.jpg';
import vancatu1 from '../../assets/photos/vancatu1.jpg';
import vancatu2 from '../../assets/photos/vancatu2.jpg';
import vancatu3 from '../../assets/photos/vancatu3.jpg';
import vancatu4 from '../../assets/photos/vancatu4.jpg';
import vancatu5 from '../../assets/photos/vancatu5.jpg';
import vancatu6 from '../../assets/photos/vancatu6.jpg';
import vancatu7 from '../../assets/photos/vancatu7.jpg';
import vancatu8 from '../../assets/photos/vancatu8.jpg';
import vancatu9 from '../../assets/photos/vancatu9.jpg';
import vancatu10 from '../../assets/photos/vancatu10.jpg';
import vancatu11 from '../../assets/photos/vancatu11.jpg';
import vancatu12 from '../../assets/photos/vancatu12.jpg';

const Choice = () => {
    const [imageList, setImageList] = useState([]);
    const [showDicaprio, setshowDicaprio] = useState(false);

    const darkSideImages = [
        vancatu1,
        vancatu2,
        anakin1,
        vancatu4,
        anakin2,
        vancatu5,
        anakin3,
        vancatu6,
        vancatu7,
        vancatu8,
        vancatu9,
        vancatu10,
        vancatu11,
        vancatu12,
        vancatu3,
    ];

    const lightSideImages = [
        charles1,
        vancatu4,
        vancatu1,
        vancatu3,
        vancatu2,
        charles2,
        charles3,
        vancatu12,
        vancatu5,
        vancatu6,
        vancatu7,
        vancatu8,
        vancatu9,
        vancatu10,
        vancatu11,
    ];

    const chooseDarkSide = () => {
        setImageList(darkSideImages);
    };

    const chooseLightSide = () => {
        setImageList(lightSideImages);
    };

    return (
        <div className={Style.choice_container}>
            <h2>I'm sorry but you'll have to make a decision!</h2>
            <div className={Style.choice_buttons}>
                <button onClick={chooseDarkSide} className={Style.darkSide}>
                    Dark Side
                </button>
                <button onClick={chooseLightSide} className={Style.lightSide}>
                    Speed Side
                </button>
            </div>

            {imageList.length > 0 &&
                <div>
                    <button onClick={ () => setshowDicaprio(!showDicaprio)} className={Style.dicaprio}>bug?</button>
                    {showDicaprio &&
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
                            <h1>I love you so much, but now you can never be DiCaprio's girlfriend</h1>
                            <Photo image={DiCaprio} caption="DiCaprio's image"/>
                        </div>
                    }
                </div>
            }

            <div className={Style.photo_gallery}>
                {imageList.map((image, index) => (
                    <Photo key={index} image={image} caption={`Photo ${index + 1}`}/>
                ))}
            </div>
        </div>
    );
};

export default Choice;
