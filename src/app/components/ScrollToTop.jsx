'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/ScrollToTop.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUpLong} from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        visible && (
            <button className={styles.scrollToTop} onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUpLong} />
            </button>
        )
    );
}
