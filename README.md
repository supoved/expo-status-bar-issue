# Android status bar lib conflict repro

## 🚀 How to use

```sh
cd my-app
npm run prebuild
npm run start
```

- build android app
- and start it

## 📝 Issue

StatusBar from `expo-status-bar` no longer reliably set colours and keep reverting back.

Removing `react-native-keyboard-controller` fixes the issue
