# 🗣️ TraductorPro - Advanced Voice Translator

Una aplicación móvil avanzada de traducción por voz desarrollada con React Native y Expo. Traduce texto a múltiples idiomas con síntesis de voz integrada y una interfaz moderna.

## 📱 Características

- ✨ **Traducción en tiempo real** con API MyMemory
- 🎤 **Síntesis de voz** para escuchar traducciones
- 🌍 **Soporte para 20+ idiomas** incluyendo hebreo, armenio y árabe
- 🎨 **Interfaz moderna** con Material Design y gradientes azules
- 📱 **Diseño responsivo** optimizado para móviles
- 🔄 **Listas desplegables elegantes** para selección de idiomas
- 👁️ **Visualización de resultados** de traducción
- 🔊 **Botón de reproducir audio** integrado
- 📦 **Fácil instalación** con APK generado

## 🌐 Idiomas Soportados

| Idioma | Código | Idioma | Código |
|--------|--------|--------|--------|
| Español (Argentina) | es-AR | Inglés (US) | en-US |
| Español (España) | es-ES | Inglés (UK) | en-GB |
| Español (México) | es-MX | Francés | fr-FR |
| Alemán | de-DE | Portugués (Brasil) | pt-BR |
| Italiano | it-IT | Japonés | ja-JP |
| Chino (Mandarín) | zh-CN | Coreano | ko-KR |
| Ruso | ru-RU | **Hebreo** | he-IL |
| **Armenio** | hy-AM | **Árabe** | ar-SA |
| Hindi | hi-IN | Turco | tr-TR |
| Holandés | nl-NL | Sueco | sv-SE |

## 📸 Capturas de Pantalla

*Próximamente: Screenshots de la aplicación*

## 🚀 Instalación

### Opción 1: Descargar APK (Recomendado)
1. Descarga el APK desde: [Expo Build](https://expo.dev/accounts/lumarka/projects/traductorpro/builds/57469a6e-9fd2-4743-9cca-7e4c353d0f06)
2. Instala en tu dispositivo Android
3. ¡Listo para usar!

### Opción 2: Desarrollo Local
```bash
# Clona el repositorio
git clone https://github.com/LuMarka/traductor-voz-app.git
cd traductor-voz-app

# Instala dependencias
npm install

# Inicia el servidor de desarrollo
npx expo start

# Escanea el QR con Expo Go
```

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework de desarrollo móvil
- **Expo SDK 54** - Plataforma de desarrollo
- **TypeScript** - Tipado estático
- **expo-speech** - Síntesis de voz
- **expo-linear-gradient** - Gradientes
- **@react-native-picker/picker** - Selectores de idioma
- **@expo/vector-icons** - Iconos
- **MyMemory Translation API** - Servicio de traducción

## 📋 Requisitos del Sistema

- **Android**: 6.0+ (API 23+)
- **iOS**: 12.0+
- **Conexión a Internet** para traducción
- **Permisos de audio** para síntesis de voz

## 🔧 Desarrollo

### Estructura del Proyecto
```
TraductorPro/
├── App.tsx                 # Componente principal
├── app.json               # Configuración de Expo
├── eas.json              # Configuración EAS Build
├── package.json          # Dependencias
├── assets/               # Recursos (iconos, imágenes)
│   ├── icon.png
│   ├── adaptive-icon.png
│   └── splash-icon.png
└── README.md            # Documentación
```

### Scripts Disponibles

```bash
# Desarrollo
npm start                 # Inicia Expo
npm run android          # Ejecuta en Android
npm run ios             # Ejecuta en iOS
npm run web             # Ejecuta en navegador

# Build
npx eas build --platform android    # APK Android
npx eas build --platform ios       # IPA iOS
```

## 🎨 Diseño

La aplicación utiliza un esquema de colores moderno con:
- **Gradientes azules** (#3B82F6 → #1E40AF)
- **Elementos redondeados** (borderRadius: 16-18px)
- **Sombras suaves** para profundidad
- **Tipografía clara** y legible
- **Iconos intuitivos** de Ionicons

## 🔄 Flujo de Traducción

1. **Entrada de texto**: El usuario escribe en el área de texto
2. **Selección de idiomas**: Origen y destino via dropdowns
3. **Traducción**: Envío a API MyMemory
4. **Síntesis de voz**: Reproducción automática del resultado
5. **Visualización**: Muestra del texto traducido
6. **Reproducir**: Botón para volver a escuchar

## 🌟 Características Avanzadas

- **Detección automática** de plataforma (Android/iOS)
- **Manejo de errores** con mensajes informativos
- **Estados de carga** con indicadores visuales
- **Interfaz adaptable** a diferentes tamaños de pantalla
- **Optimización de rendimiento** para dispositivos móviles

## 📖 Uso

1. **Abre la aplicación**
2. **Escribe tu texto** en el área de entrada
3. **Selecciona idioma de origen** (dropdown superior)
4. **Selecciona idioma de destino** (dropdown inferior)
5. **Presiona "Traducir y Escuchar"**
6. **Escucha la traducción** automáticamente
7. **Ve el texto traducido** en pantalla
8. **Presiona ▶️** para reproducir de nuevo

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Desarrollado por

**Aurea DevWeb**

- 💼 LinkedIn: [Luisa Markarian - IT Developer](https://www.linkedin.com/in/luisa-markarian-itdeveloper/)
- 📧 Email: [luisamarkarian@gmail.com]


## 🔗 Enlaces Útiles

- [Expo Build Dashboard](https://expo.dev/accounts/lumarka/projects/traductorpro)
- [APK Download](https://expo.dev/artifacts/eas/3VPD22oHaNyzLD4dkHkdkP.apk)
- [MyMemory API](https://mymemory.translated.net/)
- [Expo Documentation](https://docs.expo.dev/)

## 📊 Estado del Proyecto

- ✅ **Desarrollo completado**
- ✅ **APK generado**
- ✅ **Probado en dispositivos**
- 🔄 **Preparando para stores**

---

### 🎯 Próximas Funcionalidades

- [ ] Historial de traducciones
- [ ] Favoritos
- [ ] Modo offline básico
- [ ] Temas personalizables
- [ ] Reconocimiento de voz
- [ ] Compartir traducciones

---

**¿Te gustó el proyecto? ⭐ Dale una estrella en GitHub!**