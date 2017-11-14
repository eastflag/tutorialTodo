// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  HOST: 'http://www.javabrain.kr:8080',
  firebase: {
    apiKey: "AIzaSyDv_fbYR_4OV_xYREjE0FTMLBI5pKGBeq8",
    authDomain: "javabrain-d5728.firebaseapp.com",
    databaseURL: "https://javabrain-d5728.firebaseio.com",
    projectId: "javabrain-d5728",
    storageBucket: "javabrain-d5728.appspot.com",
    messagingSenderId: "864477969681"
  }
};
