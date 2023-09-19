export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
};

export type HomeStackParamList = {
    Home: undefined;
    WorkoutPlan: undefined;
    ExerciseDescription: { exerciseId: string };
    BluetoothConnection: undefined;
    Training: undefined;
    Result: { exerciseId: string };
    Setting: undefined;
};

export type MainTabParamList = {
    Home: undefined;
    Progress: undefined;
    Profile: undefined;
};
