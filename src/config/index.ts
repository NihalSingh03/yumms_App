// import { ENV } from "../resource/enums";
export default {
  APP_URL:
    // process.env.ENVIRONMENT == ENV.DEV
    process.env.ENVIRONMENT == 'dev'
      ? process.env.APP_URL
      : 'https://staging-api.getwebet.com',
  ENV: process.env.ENVIRONMENT,

  AWS_BUCKET_NAME: 'yummsappbucket',
  AWS_SOURCE_URL: process.env.AWS_SOURCE_URL,
  AWS_CLOUD_FRONT_URL: 'https://yummsappbucket.s3.ap-south-1.amazonaws.com',
  GETSTREAM_APPID: process.env.GETSTREAM_APPID,
};
