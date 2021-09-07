THIS IS NOTE ABOUT WHAT I LARN/ RE-LEARN FROM THE COURSE :

This note may not be readable for you, cuz this is just my point reminder

- Android Status bar height
- setup eslint and integrate it eslint-config-react-native-community
  https://www.npmjs.com/package/@react-native-community/eslint-config

didalam package.json -> didalam scripts:{} tambahkan "lint":"esslint . --ext .js" agar eslint ngecek semua js,
(manual) untuk menjalankan tinggal run command "$yarn lint" untuk cek eslint, kalo untuk memperbaiki error eslint bisa langsung di format, bisa juga pake command $yarn lint --fix

- setting prettier supaya format onsave => VSCODE => Preferences, settings, search "format ot save" dan nyalakan "fomat on save"

- as always,install react native paper :D my beloved ui kit,
- nyobain Searchbar dari paper

# 30 Aug 2021

Creating rnpaper Cards, Learning about consistency, and using styled components, styling menggunakan styled component dalam react native tetap menggunakan plain css, use background-color instead backgroundColor.
-belajar mereferensikan variable didalam styled components for ex. StatusBar.currentHeight menggunakan ${StatusBar.currentHeight}.

- membuat theme di styled components, kemudian digunakan di project menggunakan theme provider dari styled-component native,theme providernya digunakan di App.js personal note: masih bingung sih, kenapa untuk spacing nggak pake object xl,lg,md,etc kok malah menggunakan array? karena jika menggunakan array, indexnya nggak merepresentasikan size secara eksplisit seperti lg,xl.etc.

- install & menggunakan expo-google-fonts "expo install ..." @expo-gppgle-fonts/oswald & lato, import custom fonts nya di App.js (current), please baca dokumentasi https://docs.expo.dev/guides/using-custom-fonts/

- bermain dengan SVG, install react-native-svg agar bisa render svg di rn, https://github.com/react-native-svg/react-native-svg#installation
  tapi case nya disini pakai SvgXML
- untuk rating, kita menggunakan Array.from(), coba pelajari lebih dalam, membuat rating dengan status closed ada di sebelah kanan menggunakan flex end.

# 1 Sep 2021

- Learn to use spacing, kadang gak abis pikir kenapa harus membuat komponent baru untuk spacing sampe numpuk" komponen? kenapa gak pake margin aja? bukannya jauh lebih rapih?
- ternyata spacer diubah jadi wrapper yang memiliki margin, namun lebih reuse karena sudah ada size komponen yang telah dideklarasikan sebelumnya.
  kata si mo', spacer dipake buat consistency, dan kalo ini gw juga setuju wkwkw

- membuat text component, note: "flex-wrap: wrap, digunakan untuk mendefinisikan bahwa elemen item di dalam container flexbox tidak harus disejajarkan dalam satu baris. Artinya, elemen item tersebut digulung (dipindahkan) ke baris baru bila sudah memenuhi lebar container-nya."
  selebihnya baca lagi code nya di text.components.js

- memisahkan styling didalam komponen kedalam file terpisah, konteks: restaurant-info-card.component.js ke restaurant-info-card.styles.js

- Re Learn Flatlist, relearn tentang keenapa harus menggunakan key untuk list, keys membantu react untuk mengidentidikasi item yang mengalami perubahan, bertambah atau dihapus.
  flat list memiliki keunggulan memmory optimisation. contohnya scrollview scrollview merender semua child secara bersamaan namun, namun memiliki kekurangan dari segi performa karena langsung dirender bersamaan. sedangkan Flatist renders items lazily, saat items muncul dan menghapus item list saat tidak ditampilkan di screen untuk menghemat memory dan waktu proses.
- contentcontainerstyle, will apply style to every flatlist child components
- menggunakan attrs di styled components untuk FlatList agar bisa custom default props nya flat list, coba buka di restaurants.screen
- baca lebih dalam mengenai key extractor

# 2 Sep 2021

- navigation, installation ++ libraries lainnya, install tab navigator,
- membuat komponen safe area di src/components/utility/ , kenapa gak safeareaview biasa? soalnya didalemnya ada juga buat handle appbar android, gitu bro~
- membuat icons untuk tab navigator, menggunakan expo vector icons, expo vector icons sudah include dialam expo jadi tidak perlu install, tinggal di import aja, baca: https://reactnavigation.org/docs/tab-based-navigation

important note: ()=>({}) curly braces didalam function body adalah shorthand untuk mereturn object

- Simpilify tab icon logic, but not suitable for me
  ---- not yet finished bottom margin untuk safeareaview, flatlist & stled components

- membuat services, context dan mock, belajar lagi promise, disini konteksnya membuat mockup promise

- install camelize (yarn add camelize) untuk mengubah object keys menjadi camelcase, biar javascript bingit, ex: ha_ha jadi haHa

# 3 Sep 2021

- transform data mock, untuk restaurant service
- membuat context untuk restaurant, restaurant service, mengimports function dari service kedalam context, kemudian menggunakan useState, createContext, useEffect, useMemo, kemudian restaurantscontext di import sebelum navigation container. kemudian consume context di children menggunakan useContext,
  context digunakan di restaurants.screen.
- melakukan object mutation, dengan membuat function
- membuat activity indicator

# 4 Sep 2021

- Performa flatlist buruk bett, makanya harus belajar recyclerlistview dari Flipkart
- intergrasi function search, belajar tentang geocoding,
- membuat mock location, membuat location service menggunakan camelize dan promise, belajar destructuring object berdimensi (buka restaurants.service.js)
- pattern context, si mo ini patternya gini data > service (function untuk ngolah datanya terutama "promise") > context, setelah membuat location mock, location service dan location context, kemudian kita masukan context providernya di app, pastinya setelah di import, mari kita consume di komponen child nya

# 6 Sep 2021

- membuat component baru bernama search component, memindahkan searchbar kedalam searchcomponent, kemudian
- dialam search.component mengimport usecontext dan menggunakan LocationContext sebagai context nya.
- consume locationcontext didalam restaurant context untuk bisa dapat data
- mengubah nama variabel dari server kedalam nama yang berbeda, buka restaurants.service.js
- intinya di part ini belajar tenang context, dan menghubungkan konteks satu dengan konteks lainnnya

---

- optimisasi navigation (react native navigation) untuk navigasi yang lebih kompleks
- memindahkan navigasi utama didalam app.js ke file tersendiri infra../navigation/app.navigator.js,
  membuat index.js didalam navigation dir, kemudian mengimport AppNavigator kedalamnya, membuat components navigation kemudian me return AppNavigator.
- install react navigation stack https://reactnavigation.org/docs/stack-navigator/
- membuat navigation (stack navigation) untuk restaurants screen (spesifik), sestaurant navigator tidak perlu dibungkus navigationcontainer karena merupakan sub dari stack parents, setiap child dari navigation akan memiliki props navigate
- membuat navigasi untuk screen restaurantdetail, import \*_transisitonpresets_, NOTE PENTING: hati" menggunakan shortcut "xxx?.map()" sebelum map, karena di android jadi force close,
- mengirim params melalui navigate("Screens", {propsdisini})

# 7 Sep 2021

- membuat list accordion, lihat di restaurant-detail.screen.js
  -- membuat botton close custom, soalnya biar desainnya sesuai selera wkwkwk
- installasi react-native maps "expo install react-native-maps"
- membuat "features" baru untuk map.screen
- membuat searchbar menggunakan search yang lama (duplikat) namun khusus halaman map
- setting map region, import location context dan restaurants context kedalam map.screen, membuat mapview.marker.

-- PENTING -- buka map.screen.js untuk melihat rumus menentukan latdelta!

- membuat marker untuk map, please buka map screen,
- membuat resuable component bernama CompactRestaurantInfo
