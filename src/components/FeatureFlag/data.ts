import { IFeatureFlags } from "./interfaces";

const dummyAPIRes: IFeatureFlags = {
  showLightAndDark: true,
  showTicTacToe: false,
  showTreeView: true,
  showAccordion: false
};

const featureFlagsServiceCall = (): Promise<IFeatureFlags | string> => {
  return new Promise((resolve, reject) => {
    if (dummyAPIRes) setTimeout(() => resolve(dummyAPIRes), 500);
    else reject("You got an error bruv");
  });
};

export default featureFlagsServiceCall;
