export type ComingSoonFeature = 'benefits' | 'movements' | 'profile';

export type MainTabParamList = {
  Benefits: {feature: 'benefits'};
  Home: undefined;
  Movements: {feature: 'movements'};
  Profile: {feature: 'profile'};
};

export type ComingSoonRouteName = Exclude<keyof MainTabParamList, 'Home'>;
