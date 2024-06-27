import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Instance, InstanceType, InstanceClass, InstanceSize, MachineImage, Vpc, Port } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { NoOutboundTrafficSecurityGroup } from './utils/default-security-group';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'Vpc', {
      natGateways: 0,
    });

    const sgA = new NoOutboundTrafficSecurityGroup(this, 'SecurityGroupA', {
      vpc: vpc,
    });


    const instance = new Instance(this, 'Instance', {
      vpc: vpc,
      instanceType: InstanceType.of( InstanceClass.T3, InstanceSize.MICRO ),
      machineImage: MachineImage.latestAmazonLinux2023(),
      securityGroup: sgA,
    });

    const sgB = new NoOutboundTrafficSecurityGroup(this, 'SecurityGroupB', {
      vpc: vpc,
    });
    instance.connections.allowTo(sgB, Port.allIcmp());
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'no-outbound-sg-dev', { env: devEnv });
// new MyStack(app, 'no-outbound-sg-prod', { env: prodEnv });

app.synth();