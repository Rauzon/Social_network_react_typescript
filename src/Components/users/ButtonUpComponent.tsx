import React, {useEffect, useState} from "react";
import s from "./users.module.css";
import {FaArrowCircleUp} from "react-icons/fa";

type ButtonUpComponentType = {
    currentPage: number
    isFetching: boolean
}

export const ButtonUpComponent: React.FC<ButtonUpComponentType> = (props) => {

    const [showScroll, setShowScroll] = useState<boolean>(false)

    useEffect(() => {
        if (props.isFetching) {
            window.addEventListener('scroll', checkScrollTop, true)
        }
        return () => window.removeEventListener('scroll', checkScrollTop)

    }, [window.pageYOffset, props.currentPage])

    function checkScrollTop() {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true)
        } else {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return <div className={s.scrollTop_wrapper}>
        <FaArrowCircleUp
            className={s.scrollTop}
            onClick={scrollTop}
            style={{height: 40, display: showScroll ? 'flex' : 'none'}}
        />
    </div>

}