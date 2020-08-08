const {
  JsiiProject,
  Semver
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.57.0';
const CONSTRUCTS_VERSION = '3.0.4'
const PROJECT_NAME = 'cdk-fargate-fastautlscaler';
const PROJECT_DESCRIPTION = 'A JSII construct lib to build AWS Fargate Fast Autoscaler';

const project = new JsiiProject({
  name: PROJECT_NAME,
  jsiiVersion: Semver.caret('1.5.0'),
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/aws-samples/aws-fargate-fast-autoscaler.git',
  authorName: 'Pahud Hsieh',
  authorEmail: 'hunhsieh@amazon.com',
  stability: 'experimental',
  devDependencies: {
    '@aws-cdk/assert': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@types/jest': Semver.caret('25.2.3'),
    '@types/node': Semver.caret('14.0.11'),
    'ts-jest': Semver.caret('25.3.1'),
    'jest': Semver.caret('25.5.0'),
    'dot-prop': Semver.caret('5.1.1'),
  },
  peerDependencies: {
    constructs: Semver.caret(CONSTRUCTS_VERSION),
    '@aws-cdk/core': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ec2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ecs': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-elasticloadbalancingv2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-iam': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-sns': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-stepfunctions': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-stepfunctions-tasks': Semver.caret(AWS_CDK_LATEST_RELEASE),
  },
  dependencies: {
    constructs: Semver.caret(CONSTRUCTS_VERSION),
    '@aws-cdk/core': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ec2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ecs': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-elasticloadbalancingv2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-iam': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-sns': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-stepfunctions': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-stepfunctions-tasks': Semver.caret(AWS_CDK_LATEST_RELEASE),
  },
  python: {
    distName: 'cdk-fargate-fastautlscaler',
    module: 'cdk_fargate_fastautlscaler'
  }
});

project.addFields({
  'keywords': [
    'aws',
    'fargate',
    'autoscaler',
  ]
});

project.addFields({
  'awscdkio': {
    'twitter': '@pahudnet',
    'announce': false,
  }
});


const common_exclude = ['cdk.out', 'cdk.context.json', 'docker-compose.yml', 'images', 'yarn-error.log']
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();