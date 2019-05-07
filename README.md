# Getting Started

You can now develop all of your AppSync API's locally using Serverless + Serverless-AppSync-Plugin! With support for AWS DynamoDB, AWS Lambda, and AWS Elasticsearch; you have everything you need to get started developing your AppSync API's locally.


## 🛠 Minimum requirements

Node.js v8 or higher
Serverless v1.30.0 or higher

Once installed the Serverless CLI can be called with serverless or the shorthand sls command.

`$ sls`
or
`$ serverless`

Commands
* You can run commands with "serverless" or the shortcut "sls"
* Pass "--verbose" to this command to get in-depth plugin info
* Pass "--no-color" to disable CLI colors
* Pass "--help" after any <command> for contextual help


## 💾 Installation

To get quickly started, run

`$ yarn`

then

`$ sls offline`

For manual- setup:

Install the plugin via Yarn (recommended)

```
yarn add serverless-appsync-plugin
```

or via NPM

```
npm install serverless-appsync-plugin
```


## 📝Offline support

The serverless-offline plugin emulates AWS λ and API Gateway on your local machine to speed up your development cycles. To do so, it starts an HTTP server that handles the request's lifecycle like APIG does and invokes your handlers.

Features:

Node.js, Python and Ruby λ runtimes.
Velocity templates support.
Lazy loading of your files with require cache invalidation: no need for a reloading tool like Nodemon.
And more: integrations, authorizers, proxies, timeouts, responseParameters, HTTPS, CORS, etc...

Install plugins and dependendencies

```
npm install --save serverless-offline
```

To start the local enviroment (/graphql path, in this case), in your project root run:

`$ serverless offline` or `$ sls offline`.

to list all the options for the plugin, run:

`$ sls offline --help`

And test it out at `http://localhost:3000/graphql`.

## 🚀 Serverless deploy

This command will deploy all AppSync resources in the same CloudFormation template used by the other serverless resources.

`$ sls deploy`


## ✏️ Invoke deployed function

Invoke deployed function with command invoke and --function or shorthand -f.

`$ sls invoke -f graphql`

In your terminal window you should see the response from AWS Lambda.

```
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless v1.0! Your function executed successfully!\",\"input\":{}}"
}
```

## ❌ Cleanup service

If at any point, you no longer need the service, you can run the following command to remove the Functions, Events and Resources that were created, and ensure that you don't incur any unexpected charges.

`$ serverless remove`
