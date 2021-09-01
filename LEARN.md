THIS IS NOTE ABOUT WHAT I LARN/ RE-LEARN FROM THE COURSE :

This note may not be readle for you, cuz this is just my point reminder

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

- membuat theme di styled components, kemudian digunakan di project menggunakan theme provider dari styled-component native, personal note: masih bingung sih, kenapa untuk spacing nggak pake object xl,lg,md,etc kok malah menggunakan array? karena jika menggunakan array, indexnya nggak merepresentasikan size secara eksplisit seperti lg,xl.etc.

- install & menggunakan expo-google-fonts "expo install ..." @expo-gppgle-fonts/oswald & lato, import custom fonts nya di App.js (current), please baca dokumentasi https://docs.expo.dev/guides/using-custom-fonts/

- bermain dengan SVG, install react-native-svg agar bisa render svg di rn, https://github.com/react-native-svg/react-native-svg#installation
  tapi case nya disini pakai SvgXML
- untuk rating, kita menggunakan Array.from(), coba pelajari lebih dalam, membuat rating dengan status closed ada di sebelah kanan menggunakan flex end.

# 1 Sep 2021

- Learn to use spacing, kadang gak abis pikir kenapa harus membuat komponent baru untuk spacing sampe numpuk" komponen? kenapa gak pake margin aja? bukannya jauh lebih rapih?
