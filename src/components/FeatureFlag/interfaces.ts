import React from "react";

export interface IFeatureFlags {
  [key: string]: boolean;
}

export interface IContext {
  loading: boolean;
  enabledFlags: IFeatureFlags;
  errorMsg: string | null;
}
