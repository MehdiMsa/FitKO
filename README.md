# FitKO: Boxing Exercise App

FitKO is a React Native application aimed at enhancing boxing exercises through the use of sensor belts. The app communicates with a sensor belt via Bluetooth and logs hits against the sensor, providing users with feedback and progress tracking.

## Table of Contents

1. [Features](#features)
2. [Setup & Installation](#setup--installation)
3. [Project Structure](#project-structure)
4. [Contribution Guidelines](#contribution-guidelines)
5. [License](#license)

## Features

- **User Authentication**: Users can sign up/login using Google, Apple, or by creating an account.
- **Workout Plans & Exercises**: After logging in, users can browse different workout plans and access individual exercises.
- **Bluetooth Integration**: Connect to an Arduino device via Bluetooth to receive feedback from the sensor belt.
- **Progress & Profile**: Track your progress and maintain a user profile.

## Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/YourGitHubUsername/FitKO.git
```

2. Navigate to the project directory and install dependencies:
```bash
cd FitKO
npm install
```

3. To run the app:
```bash
npx react-native run-android
```
or
```bash
npx react-native run-ios
```

## Project Structure

```
FitKO/
|-- src/
|   |-- navigation/
|   |   |-- AuthNavigator.tsx
|   |   |-- HomeNavigator.tsx
|   |   |-- MainNavigator.tsx
|   |   |-- RootNavigator.tsx
|   |   |-- navigationTypes.ts
|   |-- screens/
|   |   |-- Auth/
|   |   |   |-- LoginScreen.tsx
|   |   |   |-- RegisterScreen.tsx
|   |   |   |-- ForgotPasswordScreen.tsx
|   |   |-- Home/
|   |   |   |-- HomeScreen.tsx
|   |   |   |-- WorkoutPlanScreen.tsx
|   |   |   |-- ExerciseDescriptionScreen.tsx
|   |   |   |-- BluetoothConnectionScreen.tsx
|   |   |   |-- TrainingScreen.tsx
|   |   |   |-- ResultScreen.tsx
|   |   |   |-- SettingScreen.tsx
|   |-- components/
|   |-- redux/
|   |   |-- actions/
|   |   |-- reducers/
|   |   |-- store.ts
|   |-- assets/
|   |   |-- images/
|   |   |-- fonts/
|   |   |-- icons/
|
|-- App.tsx
|-- index.js
|-- package.json
```

## Documentation
For further details and information, you can access the **Docummentation** directory.

## Contribution Guidelines

1. **Issue Creation**: Always create an issue before making a PR. Wait for the issue to be assigned to you before you start working on it.
2. **Branching**: Always create a new branch from `main` for every issue.
3. **Commit Messages**: Write meaningful commit messages.
4. **PR Creation**: Keep PR titles concise. In the description, mention the issue number your PR resolves.
5. **Code Review**: Wait for the code review and address the requested changes.

## License

This project is licensed under [MIT] & the code source contributor `MehdiMsa`.