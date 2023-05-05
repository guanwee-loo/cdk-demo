import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';



const app = new cdk.App();


const stack = new cdk.Stack(app, 'Comp-ABC', {


  //common tags:
  tags: {
    environment: 'Production',
    securityclass: 'Sensitive',
    agency: "Agency-x"
  },

});


const vpc = new ec2.Vpc(stack, 'intranet', {
  vpcName: "RealName",
  ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
  subnetConfiguration: [],
  availabilityZones: ['ap-southeast-1a','ap-southeast-1c'],
});

const s1=new ec2.PrivateSubnet(stack, 'Subnet1', {
  vpcId: vpc.vpcId,
  cidrBlock: '10.0.1.0/24',
  availabilityZone: 'ap-southeast-1a',
  
  
});

const s2=new ec2.PrivateSubnet(stack, 'Subnet2', {
  vpcId: vpc.vpcId,
  cidrBlock: '10.0.2.0/24',
  availabilityZone: 'ap-southeast-1c',
  

});

cdk.Tags.of(s1).add("Name","subnetOne");
cdk.Tags.of(s1).add("agency","Agency-Y");
cdk.Tags.of(s2).add("Name","subnetTwo");
