#   Ionic Cordova Plugin


### Plugins

[Calculator](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/)

[Bluetooth](https://github.com/don/cordova-plugin-ble-central)


In **bluetooth.page.ts**
```js
declare let ble: any;
```


In **plugin.xml**
```xml
<js-module src="www/ble.js" name="ble">
        <clobbers target="ble" />
</js-module>
```

