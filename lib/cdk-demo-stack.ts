import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as s3 from 'aws-cdk-lib/aws-s3';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // We have created the VPC object from the VPC class
    const v=new ec2.Vpc(this, 'mainVPC', {
      ipAddresses: ec2.IpAddresses.cidr("172.16.0.0/16"),
      

      // This is where you can define how many AZs you want to use
      availabilityZones: ['ap-southeast-1a','ap-southeast-1c'],
      // This is where you can define the subnet configuration per AZ
      subnetConfiguration : [
         {
           cidrMask: 24,
           name: 'private-subnet-1',
           subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
           
         }
        ]
      
    });
    

    /*
    new s3.Bucket(this, "myBucket",{
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      versioned: true

    });*/


  }
}
