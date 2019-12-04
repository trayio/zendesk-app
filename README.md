# Tray.io

This is a marketing-only Zendesk app, to be shown in the Zendesk apps directory.

### Building

To upload the app, you'll need to compile & package this app as a ZIP file. To do this, you must first install [ZAT](https://help.zendesk.com/hc/en-us/articles/229489288) (zendesk_app_tools). To do so run the following in your terminal: 

```
gem install rake
gem install zendesk_apps_tools
```

Or if zat is already installed:

```
gem update zendesk_apps_tools
```
Now you can run the npm script to package the app.

```
npm run build
```

This will generate a .zip file in the app/tmp/ directory. You can now upload this to the [zendesk marketplace](https://apps.zendesk.com/apps). The credentials are in the 1password vault under `Zendesk App Management`.

Once submitted, there is an approval process via Zendesk. Once they approve the app will be published.

### Images

The images must be as follows:

*logo-small.png* - 128x128px image
*logo.png* - 320x320px image
*logo.svg* - svg image