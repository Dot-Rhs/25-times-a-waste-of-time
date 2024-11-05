import { createContext, useEffect, useState } from "react";
import featureFlagsServiceCall from "../data";
import { IContext, IFeatureFlags } from "../interfaces";

export const FeatureFlagsContext = createContext<IContext>({
  loading: false,
  enabledFlags: {},
  errorMsg: null
});

const FeatureFlagsGlobalState = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [enabledFlags, setEnabledFlags] = useState<IFeatureFlags>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchFeatureFlags = async () => {
    setLoading(() => true);
    try {
      // Swap out dummy response for an actual API
      const res = (await featureFlagsServiceCall()) as IFeatureFlags;
      console.log(res);
      //   const data = await res.json();

      setEnabledFlags(() => res);
    } catch (error: unknown) {
      if (error instanceof Error) setErrorMsg(() => error?.message);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags, errorMsg }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagsGlobalState;
