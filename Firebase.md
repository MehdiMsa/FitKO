## Integrating Firebase with FitKO

Firebase offers a myriad of cloud-based services, including authentication, cloud storage, and a real-time database. Follow the steps below to integrate Firebase with our React Native project:

### Prerequisites

1. **Firebase Account**: If you don't have an account with Firebase, sign up at [Firebase Console](https://console.firebase.google.com/).
2. **Firebase Project**: After logging in, create a new project.

### Setting up Firebase for the App

1. **Add App to Firebase Project**: 
    - Click on `Add App` in your Firebase project dashboard.
    - Choose the platform (iOS or Android).
    - Register the app by providing the package name. For Android, it's typically in the format of `com.companyname.appname`.

2. **Download Config File**: 
    - For Android, you'll download a `google-services.json`.
    - For iOS, you'll get a `GoogleService-Info.plist`.
    - Place these files in the respective platform directories (`android/app/` for Android and `[YourApp]/[YourApp]` for iOS).

3. **Install Firebase SDK**: 
    - We'll be using `@react-native-firebase/app` for the base integration.
    ```bash
    npm install @react-native-firebase/app
    ```

4. **Linking (iOS only)**:
    - For iOS, you also need to use Cocoapods to complete the linking.
    ```bash
    cd ios/ && pod install
    ```

5. **Initialize Firebase in App**:
    - Import firebase in your `index.js` or `App.js`.
    ```javascript
    import { AppRegistry } from 'react-native';
    import App from './App';
    import { name as appName } from './app.json';
    import { firebase } from '@react-native-firebase/app';
    ```

6. **Additional Firebase Modules**:
    - Depending on the Firebase services you want to use (Firestore, Authentication, Storage, etc.), you'd need to install additional modules. For instance, for authentication:
    ```bash
    npm install @react-native-firebase/auth
    ```