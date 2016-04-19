# AWS Pop-up Loft Workshop
# Designing and managing scalable APIs with AWS and 3scale

This workshop is jointly delivered between Amazon Web Services (AWS) and the AWS Advanced Technology partner 3scale API Management Platform. Together we provide a full complement API program management solution that integrates 3scale with the Amazon API Gateway and Lambda.

The workshop is held at the AWS Pop-up Loft London on April 25th, 9:00AM - 1:00PM. The workshop description can be found [here](https://awsloft.london/session/2016/fd3f2e85-b292-44cd-867d-2c0528cbd741).

This part of the tutorial focuses on how the [integration](https://www.3scale.net/amazon-gateway-integration/) between 3scale, Amazon API Gateway and Lambda can be achieved practically.

For this integration we will use:

* API Gateway (core of the API)
* AWS Lamda (for the logic of the "proxy")
* Elasticache (to cache api keys)
* AWS SNS (to call Lambda functions async)
* VPC (to connect AWS Lambda and Elasticache)
* Serverless framework (to deploy easily to Lambda)

Here is a graph describing the integration.

And another one more specific to 3scale plugin
showcase connection to elastic search, emphasize VPC

##Prerequisites for this tutorial
* 3scale account – sign up at [3scale.net](https://www.3scale.net/) `TODO: add specific signup URL landing page`
* AWS account – sign up at http://aws.amazon.com
* AWS command line interface (CLI) installed locally -- ([Instructions](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html))
* Node.js environment installed locally -- ([Instructions](https://docs.npmjs.com/getting-started/installing-node))
* Serverless framework installed locally -- ([Instructions](https://github.com/serverless/serverless))

##Intro to the Amazon API Gateway custom authorizer principles
`TODO`


##Create and deploy the 3scale-specific custom authorizer
`TODO`

##Setting up the Amazon Virtual Private Cloud (VPC)
To reduce latency and have a system that will handle the load of thousands requests, we will use elasticache. There we will store API keys that were authorized to make request to the API. This will help to reduce the calls to the main 3scale platform.

Elasticache is only available through VPC. To be able to call Elasticache into Lambda, the Lambda function has to be on the same VPC.

Our Lambda will make calls to 3scale service, which is outside of the VPC. We will now configure the VPC to make sure it can connect to the internet, outside of VPC.

If don't have a VPC, let's create one. You can also use the default one.

You should create a NAT gateway and an Internet gateway.
Then create a new route tables.
Once the route table is created let's edit the routes.
You should make `0.0.0.0/0` point to the NAT gateway you created.

We will now attach this rule to a subnet in your VPC. Select an existing subnet. On the route tables tab, select the route table you just created.

And that's it for the VPC part. You know have a VPC, that's know connected to the Internet. We will see later how to put Elasticache and Lambda on this VPC.

##Setting up Elasticache
Elasticache is a service offered by AWS to simply cache stuff and access it quickly. It supports both Memcached and Redis. In our example we will use Redis.

Go on Elasticache section in your AWS console and create a Redis cluster under the VPC you defined before. You don't specially need replication for this tutorial.
There is no more setup to do on the Elasticache cluster.
Once the cluster is ready, go on the node created, and get the Endpoint URL. We will need it later on in the tutorial.

##Creating the Lambda code
We will now work on the Lambda side of the integration. This is where the logic of the custom authorizer will be defined.
This Lambda function will call 3scale to authorize access to the API.

We will be using Serverless framework to deploy Lambda functions easily. If you are not familiar with it, check their [site](http://serverless.com).
It's basically a tool that helps you manage Lambda functions easily.

Clone [this repo](https://github.com/picsoung/awsThreeScale_Authorizer) locally

```
git clone https://github.com/picsoung/awsThreeScale_Authorizer
cd awsThreeScale_Authorizer
```

In `awsThreeScale_Authorizer` folder you will see two different folders, they represent the two Lambda function we are going to use.
`authorizer` is the function that will be called by the API Gateway to authorize incoming API calls.
`authrepAsync` will be called by `authorizer` function to sync cache with 3scale servers.

Before deploying this to AWS we need to do few more steps.

At the root `awsThreeScale_Authorizer` and on each function folders run `npm install` command. This will install all the NPM plugins needed.

The logic of each Lambda is happening on `handler.js` file but we should have to touch it. If you look at the code in this file you may see that we are using environemment variables.
Let's setup them.

In `authorizer` and `authrepAsync` folders:

Open `s-function_example.js` file and rename it `s-function.js`
Then under `environment` property change the placeholder values for THREESCALE and ELASTICACHE

```
"environment": {
  "SERVERLESS_PROJECT": "${project}",
  "SERVERLESS_STAGE": "${stage}",
  "SERVERLESS_REGION": "${region}",
  "THREESCALE_PROVIDER_KEY":"YOUR_3SCALE_PROVIDER_KEY",
  "THREESCALE_SERVICE_ID":"YOUR_3SCALE_SERVICE_ID",
  "ELASTICACHE_ENDPOINT":"YOUR_ELASTICACHE_ENDPOINT",
  "ELASTICACHE_PORT":6379
},
```

You can find your 3scale provider key, under `Accounts` in your 3scale account.

[Screenshot]

Service ID could be found under `APIs`
[screenshot]

To find the Elastic Enpoingt, go on your AWS console and click on the cluster you have created before. You should see the endpoint URL.

[screenshot]

In the `s-function.json` file for `authorizer function` you may see a `SNS_TOPIC_ARN` property. Leave it like it it for now, we will come back to it later.
