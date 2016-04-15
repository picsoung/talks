# AWS API Gateway and 3scale integration

## TOC

* what is 3scale
* presenting the solution we will implement
* setuping VPC
* setuping Elasticache
* Authorizer principles
* deploy 3scale authorizer

## What is 3scale
Blablablabla
General graph

## Solution
We've seen the importance of API management solution when you are developping APIs. We will now add an API management layer to our existing API. This existing API has been deployed using the AWS API Gateway.

For this integration we will use:

* API Gateway (core of the API)
* AWS Lamda (for the logic of the "proxy")
* Elasticache (to cache api keys)
* VPC (to connect AWS Lambda and Elasticache)
* Serverless framework (to deploy easily to Lambda)

Here is a graph describing the integration.

And another one more specific to 3scale plugin
showcase connection to elastic search, emphasize VPC

##Setting up VPC
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

##Elasticache
Elasticache is a service offered by AWS to simply cache stuff and access it quickly. It supports both Memcached and Redis. In our example we will use Redis.

Go on Elasticache section in your AWS console and create a Redis cluster under the VPC you defined before. You don't specially need replication for this tutorial.
There is no more setup to do on the Elasticache cluster. 
Once the cluster is ready, go on the node created, and get the Endpoint URL. We will need it later on in the tutorial.

##Lambda
We will now work on the Lambda side of the integration. This is where the logic of the custom authorizer will be defined. 
This Lambda function will call 3scale to authorize access to the API.

We will be using Serverless framework to deploy Lambda functions easily.
