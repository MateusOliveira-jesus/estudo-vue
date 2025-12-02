const AutoEnvPlugin = {
  install(Vue) {
    const envVars = {};

    Object.keys(process.env).forEach((key) => {
      if (key.startsWith("VUE_APP_")) {
        const propName = key
          .replace("VUE_APP_", "")
          .toLowerCase()
          .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

        envVars[propName] = process.env[key];
      }
    });

    Vue.prototype.$env = {
      ...envVars,

      get(key) {
        
        const snakeKey = key
          .replace(/([A-Z])/g, "_$1") 
          .toUpperCase(); 

        
        const prefixedKey = `VUE_APP_${snakeKey}`;

        
        return process.env[prefixedKey] || process.env[key] || null;
      },

      getAll() {
        return envVars;
      },

      isDev: process.env.NODE_ENV === "development",
      isProd: process.env.NODE_ENV === "production",
      mode: process.env.NODE_ENV,
    };
    Vue.prototype.$envVars = envVars;
  },
};

export default AutoEnvPlugin;
