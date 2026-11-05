/* game.js (код Phaser) */

/* global Phaser, loadingBar */

/**
 * Объект конфигурации игры Phaser.
 * Задает основные параметры, такие как тип рендерера, размеры холста и подключаемые игровые сцены.
 */

// Конфигурация игры Phaser
const config = {
    type: Phaser.AUTO, // Автоматический выбор между WebGL и Canvas в зависимости от возможностей браузера
    width: 1200,
    height: 896,
    parent: "game-container", // ID контейнера в HTML (если есть), либо игра создастся в body
    backgroundColor: "#222222", // Цвет фона по умолчанию
    scale: {
        // Автоматически вписывает игру в размер окна с сохранением пропорций
        mode: Phaser.Scale.FIT,
        // Центрирует холст по горизонтали и вертикали
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload,
        create
    }
    /* scene: [LoadingScene, MainMenuScene, GameScene]*/
};

const game = new Phaser.Game(config);

function preload() {
    loadingBar?.reset();

    this.load.on('progress', (value) => {
        loadingBar?.setProgress(value * 100);
    });

    this.load.once('complete', () => {
        loadingBar?.complete();
    });

    this.load.on('loaderror', (file) => {
        const fileName = file?.key || 'ресурс';
        loadingBar?.showError(`Ошибка загрузки: ${fileName}`);
    });

    // Пример ресурсов:
    // this.load.image('background', 'assets/loader/bg_WhiteRocks.png');
}

function create() {
    // Выведем текст для проверки, что всё запустилось
    this.add.text(600, 448, "Игра успешно запущена (1200x896)!", {
        fontFamily: "Arial",
        fontSize: "32px",
        color: "#ffffff"
    }).setOrigin(0.5);
}