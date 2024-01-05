import AWS from "aws-sdk";
import config from "../config"
export class FileUploadServices {
  private s3: AWS.S3;
  private awsAccessUrl = config.AWS_CLOUD_FRONT_URL
  private bucketName = config.AWS_BUCKET_NAME
  private config = config.AWS_CONFIG;
  constructor() {
    AWS.config.update(this.config);
    this.s3 = new AWS.S3();
  }
  private async readFileAsBinary(filePath: string):Promise<Blob> {
    try {
      const binaryData = await fetch(`${filePath}`);
      return binaryData.blob();
    } catch (error) {
      console.error('Error reading the video file:', error);
      throw error;
    }
  }
  private async uploadToS3(params: AWS.S3.PutObjectRequest, objectType: string) {
    try {
      await this.s3.upload(params).promise();
    } catch (error) {
      console.error(`Error uploading ${objectType} to S3:`, error);
      throw error;
    }
  }
  async uploadFile(uri: string, fileType: string) {
    if(this.bucketName){
    const fileData = await this.readFileAsBinary(uri)
    const fileName = `${Date.now()}_bet_${fileType}`;
    const params: AWS.S3.PutObjectRequest = {
      Bucket: this.bucketName,
      Key: fileName,
      Body: fileData,
      ContentType: fileData.type,
    }
    await this.uploadToS3(params, fileType);
    return `${this.awsAccessUrl}/${fileName}`;
  }
};
}
export const fileUploadServices = new FileUploadServices();







