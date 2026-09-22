const { ipcMain, Menu } = require("electron");

const createMenu = (main) => {
  const menu = Menu.buildFromTemplate([
    // menu transaction
    {
      label: "Transaction",
      submenu: [
        {
          label: "room",
          click: () => {
            main.webContents.send("navigate", "/");
          },
        },
        {
          label: "table",

          click: () => {
            main.webContents.send("navigate", "/table");
          },
        },
      ],
    },
    {
      label: "Master data",
      submenu: [
        {
          label: "Package",
          click: () => {},
        },
        {
          label: "F&B",
          click: () => {},
        },
        {
          label: "Room",
          click: () => {},
        },
        {
          label: "Member",
          click: () => {},
        },
        {
          label: "Stock Movement",
          click: () => {},
        },
        {
          label: "Songs",
          click: () => {},
        },
        {
          label: "User",
          click: () => {},
        },
      ],
    },
    {
      label: "Report",
      click: () => {},
    },
  ]);
  Menu.setApplicationMenu(menu);
};

module.exports = createMenu;
