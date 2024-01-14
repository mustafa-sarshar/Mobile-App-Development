import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.musto.mobile.app",
  appName: "using-angular",
  webDir: "www",
  server: {
    androidScheme: "https",
  },
};

export default config;
