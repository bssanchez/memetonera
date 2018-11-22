# Memetonera Autista

| Home        | Cargando           | Buscar  |
| ------------- |:-------------:| -----:|
| ![Screenshot 1](https://raw.githubusercontent.com/bssanchez/memetonera/master/resources/screenshots/screenshot-1.png "Logo Title Text 1")      | ![Screenshot 1](https://raw.githubusercontent.com/bssanchez/memetonera/master/resources/screenshots/screenshot-2.png "Logo Title Text 1") | ![Screenshot 1](https://raw.githubusercontent.com/bssanchez/memetonera/master/resources/screenshots/screenshot-3.png "Logo Title Text 1") |

Aplicación al estilo botonera con sonidos random para cada ocasión. Realizada en [Ionic 3](https://ionicframework.com/docs/) (bien sencillita para que cualquiera pueda apoyar)

  - Diseño de mierda que esperamos mejore con ayuda de algún diseñador
  - Sonidos random que esperamos aumenten con ayuda de toda la comunidad
  - Sin íconos porque no sé como hacer íconos jeje

## Carga de audios

Los Aufios se agregan a través del archivo _audios.json_ que se encuentra en el directorio src/_assets/_, de igual forma se deben agregar en el directorio _src/assets/audios/[SHA1SUM].ogg_

## Versiones

**0.0.1**

* DEBUG - [Descargar versión debug 0.0.1](https://github.com/bssanchez/memetonera/blob/master/apk/memetonera-debug-v0.0.1.apk?raw=true)
* RELEASE - [Descargar versión release/prod 0.0.1](https://github.com/bssanchez/memetonera/blob/master/apk/memetonera-prod-v0.0.1.apk?raw=true)

## Instalación

La Memetonera requiere [Ionic Framework](https://ionicframework.com/getting-started#cli) v3+ para desarrollo y compilado.

Para empezar a desarrollar

```sh
$ cd memetonera
$ npm install
$ ionic serve
```

Para generar APK DEBUG

```sh
$ cd memetonera
$ ionic cordova build android --debug
```
el APK se generará en: `platforms/android/app/build/outputs/apk/debug`

Para generar APK RELEASE

```sh
$ cd memetonera
$ ionic cordova build android --release --prod
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore apk/memetonera-release-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk memetonera
$ zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk apk/memetonera-prod-v[VERSION_APP].apk
```
1. En el momento de firmar la clave es: `Memetonera`
2. La versión puede ser vista en el archivo `config.xml`


License
----

MIT

## Colaboradores
    [bssanchez]: <https://github.com/bssanchez>

