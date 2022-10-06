## Table of Contents

- [Formatting](#formatting)
  - [Inline Code](#inline-code)
    - [Method Names](#method-names)
      - [Function and Method](#function-and-method)
  - [Placeholders](#placeholders)
    - [Inline Text](#inline-text)
    - [Code Block](#code-block)
  - [Software Products](#software-products)
  - [URL and Domains](#url-and-domains)
  - [Example Domains](#example-domains)
  - [Filenames and FilePaths](#filenames-and-filePaths)
  - [File Type](#file-type)
  - [Error Messages in Text](#error-messages-in-text)
  - [Graphical User Interface Elements](#graphical-user-interface-elements)
    - [Format](#format)
    - [Type of Element](#type-of-element)
  - [User Entered Text](#user-entered-text)
  - [Version](#version)
- [Language and Style](#language-and-style)
  - [Active and Passive Voice](#active-and-passive-voice)
    - [Exceptions](#exceptions)
  - [Pronouns](#pronouns)
    - [First Person](#first-person)
    - [Second Person](#second-person)
  - [Politeness](#politeness)
  - [Words](#words)
- [Punctuation](#punctuation)

# Formatting

## Inline Code

Use code font to mark up code, such as:

- Class, method, attribute and enum names
- Data types (`Edm.String`)
- HTTP status codes/verbs/content-types
- env variables
- Command line utility names (`cf`)
- Console output
- Query parameter names and values

✅ instance of the `BusinessPartner` entity class

Items that should NOT be put in code format are listed below:

- Email addresses
- [Names of products, services, and organizations](#software-products)
- URLs that the reader is supposed to follow in a browser

### Method Names

When referring to a method name in text:

- omit the class name except where including it would prevent ambiguity
- put an empty pair of parentheses after a method name to indicate that it's a method

✅ This can be done by using the `asChildOf()` method

❌ This can be done by using the `.asChildOf` method

#### Function and Method

If a function is part of an instance of a class then it is a method, else it is a function.
Use those terms accordingly.

✅ Functions such as `execute()` and `executeHttpRequest()` call `getDestination()` internally

❌ Methods such as `execute()` and `executeHttpRequest()` call `getDestination()` internally

## Placeholders

Use all caps with underscore delimiters.
[Explain your placeholders](https://developers.google.com/style/placeholders#explain-placeholders).
It should have a descriptive name as a default value.

✅ PLACEHOLDER_NAME

❌ PLACEHOLDER-Name

❌ Placeholder-Name

<!-- vale off -->

❌ placeholderName

<!-- vale on -->

### Inline Text

When placeholders occur in a sentence use code format in italics.

✅ Replace _`YOUR_APPLICATION_NAME`_ with the application name.

❌ where `<YOUR-APPLICATION-NAME>` is replaced by the name you specified.

Sometimes, italics can be skipped (URL, inline code sample).

✅ as in a JWT issued from the XSUAA, e.g., `https://YOUR_SUBDOMAIN.localhost:8080/uaa/oauth/token`.

❌ as in a JWT issued from the XSUAA, e.g., `https://yourSubdomain.localhost:8080/uaa/oauth/token`.

### Code Block

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

## Software Products

Use ordinary font for the name of a project or product.

✅ You will need the Cloud Foundry CLI

❌ You will need the **Cloud Foundry CLI**

❌ You will need the `Cloud Foundry CLI`

## URL and Domains

URLs used in commands and code should be in code font.
URLs that the reader is supposed to follow in a browser should be in ordinary font.

✅ against a destination with URL `https://my.s4-system.com`

## Example Domains

For generic domain name in examples, use `example.com`.

## Filenames and FilePaths

Use code font.
Use hyphens, not underscores, to separate words.
Include the word file after the filename.

✅ Add your own `package.json` file.

✅ This creates a basic class inside the `src/business-partners` folder.

## File Type

When discussing a file type generically, use the formal file type name (not filename extension) in ordinary format.
When a specific file ending needs to be mentioned, use code format.

✅ EDMX metadata specification (files ending in `.edmx` or `.xml`).

❌ `EDMX` metadata specification (files ending in `.edmx` or `.xml`).

## Error Messages in Text

Sentence-style capitalization.
Enclose error messages in quotation marks when referring to them in text.

✅ If you see the error "Module not found: "Error: Can't resolve 'https' in""

❌ If you see the error `Module not found: Error: Can't resolve 'https' in`

## Graphical User Interface Elements

### Format

Bold all graphical user interface element names, including:

- menu
- button
- dialog box
- list item
- window, etc.

Do not use italics or quotes.

✅ On the **Settings** page, click **Show API Key**

❌ On the settings page, click _Show API Key_.

Focus on the feature and its functionality, not the UI element and gestures.

✅ In the **Authentication** drop-down, select **BasicAuthentication**

❌ In the dropdown, choose `BasicAuthentication` as the authentication type

Follow the capitalization as it appears on the page.

✅ Click `Get New Access Token` to retrieve a token

❌ press the `Get new access token` button to retrieve a token

### Type of Element

Don't include the type of UI element, such as button or checkbox, unless it adds needed clarity.

✅ To start your application, click **Launch**.

❌ You can start your application via the "launch" button.

## User Entered Text

Use code format for text that should be entered by user

✅ In the **Name** field, enter `my-destination`

❌ In the **Name** field, enter my-destination

## Version

Unless a text relates to a specific version, do not use formats x.y or x.y.z

✅ This mapping applies to the move to open source version 1.

<!-- vale off -->

❌ This mapping applies to the move to open source version 1.X.Y..

<!-- vale on -->

Avoid words like "currently" and "new".

✅ In version 2, you can specify the origin of the header

❌ In the new version we allow to specify the origin of the header

# Language and Style

## Active and Passive Voice

In general, use active voice instead of passive voice.

### Exceptions

In certain cases, it's okay to use passive voice

- To emphasize an object over an action.
- To de-emphasize a subject or actor.
- If the reader does not need to know who's responsible for the action.

✅ More than 100 deprecated methods have been removed.

❌ We removed a bit more than 100 deprecated methods.

## Pronouns

### First Person

Avoid using we, us, our, ours and I.

✅ The SAP Cloud SDK does not guarantee any API compatibility for future updates

❌ We do not guarantee any API compatibility for future updates

### Second Person

Use you instead of we.
When telling the reader to do something, use the imperative (implicit you).
Avoid your.

✅ Create an Ingress to make the application available from outside the cluster.

❌ To make your application available from outside the cluster we will create an Ingress.

✅ Create a simple application that uses the approuter

❌ You will need to create a simple application that uses the approuter

## Politeness

Be polite, but using please in a set of instructions is overdoing the politeness.

- Don't use please when explaining a procedure, even when explaining a difficult task.
- Don't use the phrase **Please note**

❌ Please note that the `CUSTOMER_NAME` and `CUSTOMER_ACCOUNT_GROUP` are properties of the entity

Use 'please' only when asking for permission or forgiveness.
For example, when what you're asking for:

- benefits us
- inconveniences a reader
- or suggests a potential issue with a product

✅ Please create a support issue

## Words

Avoid certain words:

- currently - For features, as this is implied
- soon, new, future - Avoid in timeless documentation because such words can become outdated
- so on - Instead use etc.
- first-class - Socially-charged terms for technical concepts where appropriate
- just - Filler word
- per - Avoid per in contexts other than rate units.

  ❌ Per the specification

- utilize - Don't use utilize when you mean 'use'.

  ❌ we utilize the passport library.

- typically - Use to describe what is usual or expected under normal circumstances.
  Don't use as the first word in a sentence, as doing so can leave the meaning open to misinterpretation.

<!-- vale off -->

| Use                                        | Don't Use                    |
| ------------------------------------------ | ---------------------------- |
| backend                                    | back-end or back end         |
| built-in                                   | built in                     |
| click (✅ Click **OK**)                    | click on (❌Click on **OK**) |
| codebase                                   | code base                    |
| data type                                  | datatype                     |
| drop-down                                  | dropdown                     |
| hardcode (verb), hardcoded (adjective)     | hard-coded                   |
| login (noun or adjective), log in (verb)   | ❌ login to CF               |
| multi-tenant                               | multi tenant                 |
| pop-up                                     | dialog/menu                  |
| read-only                                  | read only                    |
| real time (noun), real-time (adjective)    | ❌ in real-time              |
| repository                                 | repo                         |
| runtime (env), run time (during execution) | run-time                     |

<!-- vale on -->

# Punctuation

- Use serial (Oxford) commas before the final **and**/**or** in a list of three or more items
- Avoid exclamation point and ellipses
- When using Hyphens, refer to the rules described [here](https://developers.google.com/style/hyphens)
- For lists, end punctuation should follow [these rules](https://developers.google.com/style/lists#numbered-lettered-bulleted-lists)
