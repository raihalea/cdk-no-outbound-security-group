import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'no-outbound-sg',
  projenrcTs: true,

  deps: [
    'typescript@^5.3.3',
  ],
  devDeps: [
    'eslint@"^8.56.0',
  ],
});
project.synth();