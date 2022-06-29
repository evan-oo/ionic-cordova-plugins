/********* Calculator.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface Calculator : CDVPlugin {
  // Member variables go here.
}

- (void)addition:(CDVInvokedUrlCommand*)command;
- (void)coolMethod:(CDVInvokedUrlCommand*)command;
@end

@implementation Calculator

- (void)coolMethod:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];

    if (echo != nil && [echo length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
- (void)addition:(CDVInvokedUrlCommand*)command
{
    NSLog(@"Calculator.addition");
    CDVPluginResult* pluginResult = nil;
    
    NSArray *arg = [command.arguments objectAtIndex:0];
    NSLog(@"%@", arg);
    NSString *num1 = [arg objectAtIndex:0];
    NSString *num2 = [arg objectAtIndex:1];
    //NSString* arg2 = [command.arguments objectAtIndex:1];
    NSLog(@"arg1 : %d", num1);
    NSLog(@"arg2 : %d", num2);
    
    if(num1 != nil && num2 != nil ){
        //int num1 = [arg1 intValue];
        //int num2 = [arg2 intValue];
        int r = [num1 intValue] + [num2 intValue];
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:(r)];
    }else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }


    NSLog(@"%@", pluginResult);
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
@end
