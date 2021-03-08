// import { ClassNames } from '@emotion/core';
import { css } from '@emotion/react';
import {useState, useEffect } from 'react'
import {cursor, cursorHidden, cursorLinkHovered, cursorClicked} from './style'
const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
    if (typeof navigator !== "undefined" && isMobile()) return null;

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e:React.MouseEvent<HTMLElement>) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a").forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const cursorClasses =()=>{
        // let cx = `${cursor};`+(clicked ? `${cursorClicked};`:'') + (hidden?`${cursorClicked};`:'') + (linkHovered?`${cursorLinkHovered}`:'')
        
        if(clicked) return css`${cursor};${cursorClicked}`
        
        if(hidden) return css`${cursor};${cursorHidden}`
        
        if(linkHovered) return css`${cursor};${cursorLinkHovered}`
        
        return css`${cursor}`
    }
    //  ClassNames({
    //     "cursorClicked": clicked,
    //     "cursorHidden": hidden,
    //     "cursorLinkHovered": linkHovered
    // });

    return (
        <div
            css={cursorClasses}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default Cursor;