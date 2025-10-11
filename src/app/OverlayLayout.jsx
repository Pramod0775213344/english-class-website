// src/components/ClientLayout.jsx
'use client';

import { useEffect, useState } from 'react';
import LoadingOverlay from '../app/components/LoadingOverlay';

const OverlayLayout = ({ children }) => {
    const [loading, setLoading] = useState(true);  // controls rendering overlay
    const [fadeOut, setFadeOut] = useState(false); // controls fadeOut CSS class

    useEffect(() => {
        // Start fade out after 800ms
        const fadeOutTimer = setTimeout(() => setFadeOut(true), 100);

        // Remove overlay from DOM after fade transition duration (0.5s + a buffer)
        const removeTimer = setTimeout(() => setLoading(false), 600);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(removeTimer);
        };
    }, []);


    return (
        <>
            {loading && <LoadingOverlay fadeOut={fadeOut} />}
            {children}
        </>
    );
};

export default OverlayLayout;
