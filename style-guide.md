# About This Guide

This style guide covers some general text-formatting conventions that should be applied when writing documentation for the SAP Cloud SDK.

## Formatting

### Code Format for Inline Code

Use code font to mark up code, such as class names, method names, HTTP status codes/verbs/content-types, env variables, console output, etc.

✅ instance of the `BusinessPartner` entity class

For a complete list, see [here](https://developers.google.com/style/code-in-text#some-specific-items-to-put-in-code-font)

### Placeholder Text Syntax

Use all caps with underscore delimiters.
[Explain your placeholders](https://developers.google.com/style/placeholders#explain-placeholders).

✅ PLACEHOLDER_NAME

❌ PLACEHOLDER-Name

❌ Placeholder-Name

<!-- vale off -->

❌ placeholderName

<!-- vale on -->

### User-Replaced Placeholders in Inline Text

When placeholders occur in a sentence use code format in italics.

✅ where _`YOUR_APPLICATION_NAME`_ is replaced by the name you specified.

❌ where `<YOUR-APPLICATION-NAME>` is replaced by the name you specified.

Sometimes, italics can be skipped (URL, inline code sample).

✅ as in a JWT issued from the XSUAA, e.g., `https://YOUR_SUBDOMAIN.localhost:8080/uaa/oauth/token`.

❌ as in a JWT issued from the XSUAA, e.g., `https://yourSubdomain.localhost:8080/uaa/oauth/token`.

### User-Replaced Placeholders in Code Block

Use the normal placeholder syntax.

✅

```YAML
applications:
  - name: YOUR_APPLICATION_NAME
    path: .
```

❌

```YAML
applications:
  - name: <YOUR-APPLICATION-NAME>
    path: .
```

### Software Product and their Command Line Utility

Use code font for the command and ordinary font for the name of the project or product.

✅ You will need the Cloud Foundry CLI (`cf`)

❌ You will need the **Cloud Foundry CLI** (cf)

### URL and Domains in Text

Use code font.

✅ against a destination with URL `https://my.s4-system.com`

### Filenames and FilePaths in Text

Use code font.
Include the word file after the filename.

✅ Add your own `package.json` file.

### File Type in Text

✅ metadata specification in the EDMX format

❌ metadata specification in the `EDMX` format

Try to use the formal file type name, not the filename extension.

### Error Messages in Text

Sentence-style capitalization.
Enclose error messages in quotation marks when referring to them in text.

✅ If you see the error "Module not found: Error: Can't resolve 'https' in"

❌ If you see the error `Module not found: Error: Can't resolve 'https' in`

### Example Domains

For generic domain names in examples, use `example.com`, `example.org`, or `example.net`.

### Graphical User Interface Elements

Bold all graphical user interface element names, including, menus, button, dialog box, list items, and window.
Do not use italics or quotes.

✅ On the **Settings** page, click **Show API Key**

❌ On the settings page, click _Show API Key_.

✅ In the dropdown, choose **BasicAuthentication** as the authentication type

❌ In the dropdown, choose `BasicAuthentication` as the authentication type

Don't include the type of UI element, such as button or checkbox, unless it adds needed clarity.
Use sentence-style capitalization unless you need to match the UI.
If a label ends with a colon/an ellipsis, don't include that end punctuation.

✅ To start your application, click **Launch**.

❌ You can start your application via the "launch.." button.

❌ You can start your application via the "LAUNCH" button.

### User Entered Text

Use code format for text that should be entered by user

✅ In the **Name** field, enter `my-destination`

❌ In the **Name** field, enter my-destination

## Avoid Using We

✅ More than 100 deprecated methods have been removed.

❌ We removed a bit more than 100 deprecated methods.

✅ The SAP Cloud SDK does not guarantee any API compatibility for future updates

❌ We do not guarantee any API compatibility for future updates

## Version

Unless a text relates to a specific version, do not use formats x.y or x.y.z

✅ This mapping applies to the move to open source version 1.

<!-- vale off -->

❌ This mapping applies to the move to open source version 1.X.Y..

<!-- vale on -->

Avoid words like "currently" and "new".

✅ In version 2, we allow to specify the origin of the header

❌ In the new version we allow to specify the origin of the header

## Punctuation

- Use serial (Oxford) commas before the final **and**/**or** in a list of three or more items
- Avoid exclamation point and ellipses
- When using Hyphens, refer to the rules described [here](https://developers.google.com/style/hyphens)
- For lists, end punctuation should follow [these rules](https://developers.google.com/style/lists#numbered-lettered-bulleted-lists)
