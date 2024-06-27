# No Outbound Traffic Security Group Construct

The `NoOutboundTrafficSecurityGroup` construct is a custom construct for the AWS Cloud Development Kit (CDK) that simplifies the creation of security groups with no outbound traffic allowed by default. This construct enhances security by restricting outbound traffic from your AWS resources.

## Overview

This construct provides an easy way to create security groups with outbound traffic disabled by default. It extends the standard AWS CDK `SecurityGroup` construct and overrides the default behavior to disallow all outbound traffic.

## Example

Here's an example of how to use the `NoOutboundTrafficSecurityGroup` construct in a CDK stack. For full example code, please refer to the [main.ts](./src/main.ts) file.

## Construct Implementation

The `NoOutboundTrafficSecurityGroup` construct is implemented to create security groups with no outbound traffic allowed by default. The implementation extends the `SecurityGroup` construct and sets the `allowAllOutbound` property to `false`. You can find the implementation in the [default-security-group.ts](./src/utils/default-security-group.ts) file.

## Usage

1. **Import the Construct**: Ensure you have imported the `NoOutboundTrafficSecurityGroup` construct in your CDK application.
2. **Instantiate the Construct**: Use the construct within your stack to create security groups with no outbound traffic.
3. **Assign Security Groups**: Assign the security groups to your AWS resources as needed.

## References

- [AWS Security Groups](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
