THIS IS NOTE ABOUT WHAT I LARN/ RE-LEARN FROM THE COURSE :

- Android Status bar height
- setup eslint and integrate it eslint-config-react-native-community
  https://www.npmjs.com/package/@react-native-community/eslint-config

didalam package.json -> didalam scripts:{} tambahkan "lint":"esslint . --ext .js" agar eslint ngecek semua js,
(manual) untuk menjalankan tinggal run command "$yarn lint" untuk cek eslint, kalo untuk memperbaiki error eslint bisa langsung di format, bisa juga pake command $yarn lint --fix

- setting prettier supaya format onsave => VSCODE => Preferences, settings, search "format ot save" dan nyalakan "fomat on save"

- as always, react native paper :D my beloved ui kit,
- nyobain Searchbar dari paper

# 30 Aug 2021

Creating rnpaper Cards, Learning about consistency, and using styled components, styling menggunakan styled component dalam react native tetap menggunakan plain css, use background-color instead backgroundColor.
-belajar mereferensikan variable didalam styled components for ex. StatusBar.currentHeight menggunakan ${StatusBar.currentHeight}.

- membuat theme di styled components
