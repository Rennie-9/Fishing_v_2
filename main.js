/* main.js (код Electron) */
// 1280 × 960 (HD 4:3)
// 1024 × 768 (XGA 4:3)

const { app, BrowserWindow } = require("electron");

// Отключаем аппаратное ускорение и дисковый кэш GPU,
// чтобы избежать ошибок доступа к файлам (Access Denied / Cache Creation failed)
app.disableHardwareAcceleration();
app.commandLine.appendSwitch("disable-gpu-shader-disk-cache");

function createWindow() {
    // Создаем окно приложения
    const mainWindow = new BrowserWindow({
        width: 1200,      // Ширина рабочей зоны окна
        height: 896,      // Высота рабочей зоны окна
        useContentSize: true,  // Учитывает указанные width/height именно для контента, без учета рамки окна
        resizable: false,      // Запрещаем менять размер окна мышкой, чтобы игра не плыла
        autoHideMenuBar: false, // true - Скрываем верхнее меню (File, Edit и т.д.)
        webPreferences: {
            nodeIntegration: true,     // Разрешаем использование Node.js внутри
            contextIsolation: false    // Отключаем изоляцию для простоты связи скриптов
        }
    });

    // Загружаем наш главный HTML-файл
    mainWindow.loadFile("index.html");
}

// Когда Electron полностью инициализировался — создаем окно
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Закрываем приложение, когда все окна закрыты (для Windows/Linux)
app.on('window-all-closed', () => {
    if (process.platform !== 'win32') {
        app.quit();
    } else {
        app.quit(); // Или просто убрать условие и вызывать app.quit() для всех ОС
    }
}); 


