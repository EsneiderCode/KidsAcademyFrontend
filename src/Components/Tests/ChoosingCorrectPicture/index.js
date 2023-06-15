
import React, {useState} from "react";
import styles from "./ChoosingCorrectPicture.module.css";
const picturesArray = [
    {
        url: "url1",
        correct: true
    },
    {
        url: "url2",
        correct: false
    },
    {
        url: "url3",
        correct: false
    }
]

const ChoosingCorrectPicture = () =>{
const [choosenPicture, setChoosenPicture] = useState(null);
    return (<>
        <div className={styles.picturesContainer}>
            {
                picturesArray.map((picture, index)=>{
                    return(
                            <div className={styles.pictureContainer}>
                                <img src={picture.url} alt={picture.name}/>
                            </div>
                    )
                })
                
            }
        </div>
    </>);

}

export default ChoosingCorrectPicture;