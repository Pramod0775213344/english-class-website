// components/LoadingOverlay.js
'use client'
import React from 'react';
import styles from '../styles/LoadingOverlay.module.css';

const LoadingOverlay = ({ fadeOut }) => {
    return (
        <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default LoadingOverlay;
