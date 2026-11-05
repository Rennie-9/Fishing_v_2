/*
Отвечаете за логику полосы загрузки (progress bar), анимацию или проценты загрузки.
*/

// loadingBar.js - Управление индикатором загрузки

(() => {
    'use strict';

    const loadingScreen = document.querySelector('#loadingScreen');
    const progressBar = document.querySelector('#progressBar');
    const progressText = document.querySelector('#progressText');
    const loadingTrack = document.querySelector('.loading-track');
    const loadingError = document.querySelector('#loadingError');

    let currentProgress = 0;
    let animationFrameId = null;
    let hideTimerId = null;

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function updateProgressAttribute(progress) {
        loadingTrack?.setAttribute('aria-valuenow', String(Math.round(progress)));
    }

    function renderProgress(progress) {
        if (!progressBar || !progressText) {
            return;
        }

        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
        updateProgressAttribute(progress);
    }

    function setProgress(value) {
        const numericValue = Number(value);

        if (!Number.isFinite(numericValue)) {
            return;
        }

        const targetProgress = clamp(numericValue, 0, 100);

        if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
        }

        const animate = () => {
            const difference = targetProgress - currentProgress;

            if (Math.abs(difference) < 0.1) {
                currentProgress = targetProgress;
                renderProgress(currentProgress);
                animationFrameId = null;
                return;
            }

            currentProgress += difference * 0.15;
            renderProgress(currentProgress);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
    }

    function show() {
        if (!loadingScreen) {
            return;
        }

        clearTimeout(hideTimerId);
        loadingScreen.hidden = false;
        loadingScreen.classList.remove('loading-screen--hidden');

        if (loadingError) {
            loadingError.hidden = true;
            loadingError.textContent = '';
        }
    }

    function complete() {
        setProgress(100);

        hideTimerId = window.setTimeout(() => {
            loadingScreen?.classList.add('loading-screen--hidden');
        }, 350);
    }

    function showError(message = 'Не удалось загрузить игру.') {
        if (!loadingScreen) {
            return;
        }

        clearTimeout(hideTimerId);
        loadingScreen.classList.remove('loading-screen--hidden');

        if (loadingError) {
            loadingError.textContent = message;
            loadingError.hidden = false;
        }
    }

    function reset() {
        clearTimeout(hideTimerId);

        if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }

        currentProgress = 0;
        renderProgress(0);
        show();
    }

    window.loadingBar = {
        show,
        setProgress,
        complete,
        showError,
        reset
    };
})();