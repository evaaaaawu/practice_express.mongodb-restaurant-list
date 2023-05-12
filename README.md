# 我的餐廳清單

## **Introduction 專案簡介**

使用 Node.js + Express + MongoDB 製作的簡易餐廳美食網站，使用者可以註冊帳號、登入，並查看、新增、編輯或刪除專屬該用戶的餐廳資訊。

![](public/screenshots/screenshot_index.png)

## **Features 功能**

- 使用者可以點擊任一餐廳，查看更多餐廳資訊，如地址、電話與簡介
- 使用者可以依店家名稱搜尋餐廳
- 使用者可以新增一筆餐廳資料
- 使用者可以瀏覽一筆餐廳的詳細資訊
- 使用者可以編輯一筆餐廳的詳細資訊
- 使用者可以刪除一筆餐廳資料
- 使用者可以註冊帳號 或 透過 Facebook 帳號登入使用網站服務
- 使用者可以登入系統建立自己的餐廳清單

## **Prerequisites 環境設置**

- [VScode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [mongoDB](https://www.mongodb.com/)

## **Installation 開始使用**

```
# 開啟終端機 並 Clone 此專案至本機
$ git clone https://github.com/evaaaaawu/restaurant-list_express-mongodb.git

# 於終端機進入存放本專案的資料夾
$ cd xxxxx

# 安裝 npm 套件
$ npm install

# 新增.env檔案，並請根據.env.example檔案內資訊設置環境變數

# 啟動專案前，請先建立種子資料，如在終端機中看到 "seeder is finished!"，即表示種子資料建立成功
$ npm run seed

# 啟動伺服器，執行 app.js 檔案
$ npm run dev 
or
$ npm run start

# 若在終端機看到下方訊息代表順利運行，於瀏覽器中輸入該網址(http://localhost:3000)即可開始使用本網站
"Express is listening on localhost:3000"
"mongodb connected!"
```

## **Tech/framework used 開發工具**

- Express 4.16.4
- Express-handlebars 3.0.0
- Express-session: 1.17.1
- bootstrap 5.1.3
- bcryptjs 2.4.3
- connect-flash 0.1.1
- method-override 3.0.0
- mongoose: 5.9.7
- passport 0.4.1
- passport-facebook 3.0.0
- passport-local 1.0.0
- dotenv 8.2.0