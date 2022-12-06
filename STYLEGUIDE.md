# Style Guide

This guide is based on [Google's style guide](https://developers.google.com/style).

## Table of Contents

- [Formatting](#formatting)
  - [Inline Code](#inline-code)
    - [Use Code Font](#use-code-font)
      - [Include a Descriptive Noun Before or After Code](#include-a-descriptive-noun-before-or-after-code)
      - [Use Code Format for Method Names](#use-code-format-for-method-names)
      - [Use `Function` vs `Method` Accordingly](#use-function-vs-method-accordingly)
    - [Exceptions](#exceptions)
  - [Placeholders](#placeholders)
    - [Use Code Format in Italics in Inline Text](#use-code-format-in-italics-in-inline-text)
    - [Use Normal Placeholder Syntax in URL or Inline Code Sample](#use-normal-placeholder-syntax-in-url-or-inline-code-sample)
    - [Use Normal Placeholder Syntax Inside a Code Block](#use-normal-placeholder-syntax-inside-a-code-block)
  - [Use Ordinary Font for Software Products](#use-ordinary-font-for-software-products)
  - [URL and Domains](#url-and-domains)
    - [Use Code Font for URLs in Commands and Code](#use-code-font-for-urls-in-commands-and-code)
    - [Use Ordinary Font for URLs that Reader Should Follow in a Browser](#use-ordinary-font-for-urls-that-reader-should-follow-in-a-browser)
  - [Use `example.com` for Example Domain](#use-examplecom-for-example-domain)
  - [Filenames and File Paths](#filenames-and-file-paths)
    - [Use Code Font](#use-code-font)
    - [Include the Word File After the Filename](#include-the-word-file-after-the-filename)
    - [Prefer Hyphens, Not Underscores, To Separate Words in File Paths](#prefer-hyphens-not-underscores-to-separate-words-in-file-paths)
    - [Use Linux File Paths and Separators by Default](#use-linux-file-paths-and-separators-by-default)
  - [File Type](#file-type)
    - [Use Formal File Type Name in Ordinary Font](#use-formal-file-type-name-in-ordinary-font)
    - [Exception: Use Extension in Code Format To Mention File Ending](#exception-use-extension-in-code-format-to-mention-file-ending)
  - [Use Quotation Marks for Inline Error Messages in Text](#use-quotation-marks-for-inline-error-messages-in-text)
  - [Use Block Quotes for Separated Error Messages](#use-block-quotes-for-separated-error-messages)
  - [Graphical User Interface Elements](#graphical-user-interface-elements)
    - [Use Bold Format for Names](#use-bold-format-for-names)
    - [Focus on the Feature and Its Functionality, Not the UI Element and Gestures](#focus-on-the-feature-and-its-functionality-not-the-ui-element-and-gestures)
    - [Follow the Capitalization as It Appears on the Page](#follow-the-capitalization-as-it-appears-on-the-page)
    - [Don’t Include the Type of UI Element](#dont-include-the-type-of-ui-element)
  - [User Entered Text](#user-entered-text)
  - [Version](#version)
    <!-- vale off -->
    - [Do Not Use Formats X.Y or X.Y.Z](#do-not-use-formats-xy-or-xyz)
    <!-- vale on -->
    - [Avoid Using `Currently` and `New`](#avoid-using-currently-and-new)
  - [Paragraphs](#paragraphs)
    - [Use One Sentence per Line](#use-one-sentence-per-line)
- [Language and Style](#language-and-style)
  - [Use Active Voice Over Passive](#use-active-voice-over-passive)
  - [Exceptions: Use Passive Voice](#exceptions-use-passive-voice)
  - [First Person](#first-person)
    - [Avoid Using `We`, `Our`, and `Us`](#avoid-using-we-our-and-us)
    - [Exception: The Questions in FAQs](#exception-the-questions-in-faqs)
  - [Second Person](#second-person)
    - [Use the Imperative Form in Instructions](#use-the-imperative-form-in-instructions)
    - [Don't Overuse `Your`](#dont-overuse-your)
    - [Don't Use `We` or `Our` When Addressing the Reader (You)](#dont-use-we-or-our-when-addressing-the-reader-you)
  - [Politeness](#politeness)
    - [Don’t Use `Please` in Instructions](#dont-use-please-in-instructions)
    - [Don't Use the Phrase `Please Note`](#dont-use-the-phrase-please-note)
    - [Use `Please` Only for Permission or Forgiveness](#use-please-only-for-permission-or-forgiveness)
  - [Words](#words)
    - [Words To Avoid](#words-to-avoid)
    - [Usage Guidance for Commonly Used Terms](#usage-guidance-for-commonly-used-terms)
- [Punctuation](#punctuation)
  - [Use Oxford Comma in a Series of Three or More Items](#use-oxford-comma-in-a-series-of-three-or-more-items)
  - [Avoid Exclamation Point and Ellipses](#avoid-exclamation-point-and-ellipses)
  - [Lists](#lists)
    - [Introduce List by Using a Complete Sentence](#introduce-list-by-using-a-complete-sentence)
    - [Start Each List Item With Capital Letter and End With Period](#start-each-list-item-with-capital-letter-and-end-with-period)
      - [Exceptions: End Punctuation](#exceptions-end-punctuation)
    - [Use Numbered List for Steps To Be Performed in Order](#use-numbered-list-for-steps-to-be-performed-in-order)
    - [Use Description List With Headings for Describing Terms](#use-description-list-with-headings-for-describing-terms)
      - [Exception: Capital Letter](#exception-capital-letter)
- [SEO](#search-engine-optimization)
  - [Slugs](#Slugs)
- [Common Mistakes](#common-mistakes)

# Formatting

## Inline Code

### Use Code Font

Use code font to mark up code, such as:

- Class, method, attribute and enum names
- Data types (`Edm.String`)
- HTTP status codes/verbs/content-types
- env variables
- Command line utility names (`cf`)
- Console output (excluding [error messages](#use-quotation-marks-for-inline-error-messages-in-text))
- Query parameter names and values

✅ instance of the `BusinessPartner` entity class

✅ The function returns a `boolean` or `string`.

✅ The `data` property contains the content of the response to your `GET` request.

#### Include a Descriptive Noun Before or After Code

Don't use code as English verbs or nouns.
Don't pluralize code, instead pluralize the following noun.

❌ Return a list of `WriteResponse`s

✅ Return a list of objects with type `WriteResponse`

❌ Call `generate()` to get a `NewClass`

✅ Call the `generate()` function to get a `NewClass` instance

#### Use Code Format for Method Names

When referring to a method name in text:

- omit the class name except where including it would prevent ambiguity
- put an empty pair of parentheses after a method name to indicate that it's a method

❌ This can be done by using the `.asChildOf` method

✅ This can be done by using the `asChildOf()` method

#### Use `Function` vs `Method` Accordingly

If a function is part of an instance of a class then it is a method, else it is a function.

❌ Methods such as `execute()` and `executeHttpRequest()` call `getDestination()` internally

✅ Functions such as `execute()` and `executeHttpRequest()` call `getDestination()` internally

### Exceptions

Items that should NOT be put in code format are listed below:

- Email addresses
- [Names of products, services, and organizations](#software-products)
- URLs that the reader is supposed to follow in a browser

## Placeholders

Use all caps with underscore delimiters.
[Explain your placeholders](https://developers.google.com/style/placeholders#explain-placeholders).
It should have a descriptive name as a default value.

❌ PLACEHOLDER-Name

❌ Placeholder-Name

<!-- vale off -->

❌ placeholderName

<!-- vale on -->

✅ PLACEHOLDER_NAME

### Use Code Format in Italics in Inline Text

Verify that this is rendered correctly.
This does not apply if the placeholder is part of a longer string in code format (see next rule).

❌ where `<YOUR-APPLICATION-NAME>` is replaced by the name you specified.

✅ Replace _`YOUR_APPLICATION_NAME`_ with the application name.

### Use Normal Placeholder Syntax in URL or Inline Code Sample

❌ as in a JWT issued from the XSUAA, e.g., `https://yourSubdomain.localhost:8080/uaa/oauth/token`.

✅ as in a JWT issued from the XSUAA, e.g., `https://YOUR_SUBDOMAIN.localhost:8080/uaa/oauth/token`.

### Use Normal Placeholder Syntax Inside a Code Block

❌

```YAML
applications:
  - name: <YOUR-APPLICATION-NAME>
    path: .
```

✅

```YAML
applications:
  - name: YOUR_APPLICATION_NAME
    path: .
```

## Use Ordinary Font for Software Products

Use ordinary font for the name of a project or product.

❌ You will need the **Cloud Foundry CLI**

❌ You will need the `Cloud Foundry CLI`

✅ You will need the Cloud Foundry CLI

## URL and Domains

### Use Code Font for URLs in Commands and Code

❌ create a business partner against https://example.com as a destination.

✅ create a business partner against `https://example.com` as a destination.

### Use Ordinary Font for URLs that Reader Should Follow in a Browser

❌ find the ID of a business partner via the endpoint `http://localhost:8080/business-partner`.

✅ find the ID of a business partner via the endpoint http://localhost:8080/business-partner.

❌ execute `GET http://localhost:8080/business-partner/1003764`

✅ execute `GET` request for URL http://localhost:8080/business-partner/1003764

## Use `example.com` for Example Domain

For generic domain name in examples, use `example.com`.

✅ create a business partner against `https://example.com` as a destination.

## Filenames and File Paths

### Use Code Font

❌ Replace the default tsconfig.json

✅ Replace the default `tsconfig.json` file

### Include the Word File After the Filename

✅ Add your own `package.json` file.

Unless the filename ends with a noun

❌ Use a `Dockerfile` file

✅ Use a `Dockerfile`

### Prefer Hyphens, Not Underscores, To Separate Words in File Paths

✅ This creates a basic class inside the `src/business-partners` folder.

### Use Linux File Paths and Separators by Default

❌ The code is located in the `YOUR_PROJECT\src\my-file.js` file

✅ The code is located in `YOUR_PROJECT/src/my-file.js` file

❌ Save the configuration in the `C:\cloudsdk\config.json` file

✅ Save the configuration in the `/cloudsdk/config.json` file

Exception: If you describe a Windows-specific situation, you should use the appropriate file paths.

## File Type

### Use Formal File Type Name in Ordinary Font

When discussing a file type generically, use the formal file type name in ordinary format.

❌ Download the `EDMX` file for the business partner service

✅ Download the EDMX file for the business partner service

### Exception: Use Extension in Code Format To Mention File Ending

Use only when you need to specifically mention a file ending.
If the ending is case-insensitive, you should write it in lowercase.

✅ base64 ASCII (e.g. `.pem`) and binary (e.g. `.der`).

## Use Quotation Marks for Inline Error Messages in Text

Enclose error messages in quotation marks when referring to them in text.
Follow sentence-style capitalization.

❌ If you see the error `Module not found: Error: Can't resolve 'https' in`

✅ If you see the error "Module not found: "Error: Can't resolve 'https' in""

## Use Block Quotes for Separated Error Messages

Put error messages in block quotes when displaying them outside of a sentence.
Follow sentence-style capitalization.

❌

An error like this can occur: `Module not found: Error: Can't resolve 'https' in`

✅

An error like this can occur:

> Module not found: "Error: Can't resolve 'https' in"

## Graphical User Interface Elements

### Use Bold Format for Names

Bold all graphical user interface element names, including:

- menu
- button
- dialog box
- list item
- window, etc.

Do not use italics or quotes.

❌ On the settings page, click _Show API Key_

✅ On the **Settings** page, click **Show API Key**

<!-- vale off -->

### Focus on the Feature and Its Functionality, Not the UI Element and Gestures

<!-- vale on -->

❌ In the drop-down, choose `BasicAuthentication` as the authentication type

✅ In the **Authentication** drop-down, select **BasicAuthentication**

### Follow the Capitalization as It Appears on the Page

❌ press the **Get new access token** button to retrieve a token

✅ Click **Get New Access Token** to retrieve a token

<!-- vale off -->

### Don’t Include the Type of UI Element

<!-- vale on -->

Don't include the type of UI element, such as button or checkbox, unless it adds needed clarity.

❌ You can start your application via the **Launch** button.

✅ To start the application, click **Launch**.

## User Entered Text

Use code format for text that should be entered by user.

❌ In the **Name** field, enter my-destination

✅ In the **Name** field, enter `my-destination`

## Version

<!-- vale off -->

### Do Not Use Formats X.Y or X.Y.Z

Unless a text relates to a specific version, do not use formats x.y or x.y.z

❌ This mapping applies to the move to open source version 1.X.Y..

✅ This mapping applies to the move to open source version 1.

<!-- vale on -->

### Avoid Using `Currently` and `New`

❌ In the new version we allow to specify the origin of the header.

✅ In version 2, you can specify the origin of the header.

## Paragraphs

In markdown, an empty line denotes the start of a new paragraph.
Use paragraphs to structure your text into individual units.

### Use One Sentence per Line

A line break inside a paragraph is not visible in the rendered text.
Using newlines after each sentence make it easier to restructure text and to view diffs of prose.
[AsciiDoc Recommended Practices](https://asciidoctor.org/docs/asciidoc-recommended-practices/#one-sentence-per-line) gives an elaborate reasoning of the advantages of this practice.

```
❌ The SAP Cloud SDK enables an exception logger once you create a logger instance somewhere in your project. The exception logger logs unhandled exceptions as if you would log the error manually.
```

```
✅ The SAP Cloud SDK enables an exception logger once you create a logger instance somewhere in your project.
The exception logger logs unhandled exceptions as if you would log the error manually.
```

# Language and Style

## Use Active Voice Over Passive

In general, use active voice instead of passive voice.

## Exceptions: Use Passive Voice

In certain cases, it's okay to use passive voice:

- To emphasize an object over an action
- To de-emphasize a subject or actor
- When the reader does not need to know who's responsible for the action

❌ We removed a bit more than 100 deprecated methods.

✅ More than 100 deprecated methods have been removed.

## First Person

In general, use second person rather than first person — you instead of we.

### Avoid Using `We`, `Our`, and `Us`

❌ We do not guarantee any API compatibility for future updates

✅ The SAP Cloud SDK does not guarantee any API compatibility for future updates

❌ We need to add resilience to our application to protect us.

✅ You need to add resilience to your application to protect yourself.

### Exception: The Questions in FAQs

✅ We are happy to review and incorporate contributions.

## Second Person

### Use the Imperative Form in Instructions

When telling the reader to do something, use the imperative (implicit you).

❌ You will need to create a simple application that uses the approuter

✅ Create a simple application that uses the approuter

### Don't Overuse `Your`

Often you can replace `your` with `the` or skip it.

❌ Deploy your application as usual by running the command:

✅ Deploy the application as usual by running the command:

### Don't Use `We` or `Our` When Addressing the Reader (You)

Either try to change to second person or use the imperative form.

❌ Now that we have defined our destinations, we need to make sure that they are available in our process.

✅ Now that the destinations are defined, make sure that they are available in the process.

## Politeness

### Don’t Use `Please` in Instructions

Be polite, but using please in a set of instructions is overdoing the politeness.
Don't use please when explaining a procedure, even when explaining a difficult task.

❌ Please make sure the mail destination is configured correctly

✅ Make sure the mail destination is configured correctly

### Don't Use the Phrase `Please Note`

❌ Please note that the `CUSTOMER_NAME` and `CUSTOMER_ACCOUNT_GROUP` are properties of the entity

✅ Note that the `CUSTOMER_NAME` and `CUSTOMER_ACCOUNT_GROUP` are properties of the entity

### Use `Please` Only for Permission or Forgiveness

Use 'please' only when what you're asking for:

- benefits us
- inconveniences a reader
- or suggests a potential issue with a product

✅ Please create a support issue

## Words

### Words To Avoid

- **currently**: For features, as this is implied
- **soon, new, future**: Avoid in timeless documentation because such words can become outdated
- **so on**: Instead use etc.
- **first-class**: Socially-charged terms for technical concepts where appropriate
- **just**: Filler word
- **per**: Avoid per in contexts other than rate units.

  ❌ Per the specification

- **utilize**: Don't use utilize when you mean 'use'.

  ❌ we utilize the passport library.

- **typically**: Use to describe what is usual or expected under normal circumstances.
  Don't use as the first word in a sentence, as doing so can leave the meaning open to misinterpretation.

### Usage Guidance for Commonly Used Terms

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
| dialog/menu                                | pop-up                       |
| read-only                                  | read only                    |
| real time (noun), real-time (adjective)    | ❌ in real-time              |
| repository                                 | repo                         |
| runtime (env), run time (during execution) | run-time                     |

<!-- vale on -->

# Punctuation

## Use Oxford Comma in a Series of Three or More Items

Use serial (Oxford) comma before the final **and**/**or** in a series of three or more items

❌ define the `get`, `set` and `clear` methods.

✅ define the `get`, `set`, and `clear` methods.

## Avoid Exclamation Point and Ellipses

Avoid exclamation point and ellipses (except in rare exciting moments)

❌ Enjoy the hands-on experience delivered by SAP Cloud SDK developers!

## Lists

### Introduce List by Using a Complete Sentence

Introduce a list with a complete sentence, **not a partial one that's completed by the list items**.

❌

```
You should include a circuit-breaker if:

- The resource is essential in your infrastructure and should be protected.
- The resource reacts poorly to heavy load.
```

✅

```
You should include a circuit-breaker in the following scenarios:

- The resource is essential in your infrastructure and should be protected.
- The resource reacts poorly to heavy load.
```

### Start Each List Item With Capital Letter and End With Period

✅

```
The introduction of a cache is most effective in the following cases:

- The execution of a method consumes a lot of resources.
- The method is a pure function, meaning the function arguments contain all the information and no hidden state affects the result of the function.
- The function is invoked multiple times for the same arguments or context.
```

#### Exceptions: End Punctuation

Don't add end punctuation if the item satisfies any of the below conditions:

- Consists of a single word
- Doesn't include a verb
- Is entirely in code font
- Is a link text
- Is a document title

### Use Numbered List for Steps To Be Performed in Order

Numbered lists follow the same rules that apply to general lists.

❌

```
You can obtain the JWT using Postman:

- create a new request
- go to the "Authorization tab of the request
- select "OAuth 2.0" as a type
```

✅

```
To obtain the JWT using Postman, follow these steps:

1. Create a new request.
2. Go to the **Authorization** tab of the request.
3. In the **Type** drop-down, select **OAuth 2.0**.
```

### Use Description List With Headings for Describing Terms

- Start the term with capital letter and text that follows colons with a lowercase letter.
- Use bold formatting for the term and punctuation.
- If term is an attribute, use code font.
- Use colon and **not dash** to set off a description.

❌

```
Typical parameters to configure a circuit-breaker are:

- "failure threshold"- Failure rate above which the circuit-breaker will open.
- "reset timeout"- The time after which the circuit-breaker will close.
- Fallback- Some alternative actions you want to perform when the breaker is open.
```

✅

```
Typical parameters to configure a circuit-breaker are:

- **Failure threshold**: failure rate above which the circuit-breaker will open.
- **Reset timeout**: the time after which the circuit-breaker will close.
- **Fallback**: some alternative actions you want to perform when the breaker is open.
```

#### Exception: Capital Letter

If the case is an important part of the information conveyed by the list - such as in a list of glossary terms.

✅

```
- `minTimeout`: initial waiting time for the first retry.
```

<!-- vale off -->

# Search Engine Optimization

## Slugs

The slug is the the end part of a URL after the backslash:

```
my-website.com/this-is-my-slug
```

Writing a good slug positively affects our SEO.

By default, the slug is based on the filename of your MDX document.
You should overwrite it by setting the `id` in the front matter to avoid unintended changes to the slug,
which would occur if the filename is changed.

### Do not include base path in the slug

Since our path is already `cloud-sdk/docs/js/*`, you should not include the words:
`sap`, `cloud`, `sdk`, `js`

❌

```
id: release-notes-sap-cloud-sdk-for-javascript-and-typescript'
```

✅

```
id: release-notes
```

### Include Keywords

A keyword is the search term we want a page to rank for most.

For example, the following would be a slug for the debug page:

❌

```
id: find-problems-in-the-sap-cloud-sdk
```

✅

```
id: debugging
```

### Use Function Words

Function words are words like “a”, “the”, and “and”.
Avoid function words in slugs and only include them if they are needed to clarify the slug.

For example, the following would be a slug for a migration page:

❌

```
id: migrating-from-sap-btp-cloud-foundry-to-a-kubernetes-environment-with-the-sap-cloud-sdk
```

✅

```
id: migrate-from-cf-to-kubernetes
```

### Keep It Short

The URL of our page is sometimes shown in Google search results and influences whether our audience decides to click on our page.
Therefore remove not only function words but also other unnecessary words.

For example, the following would be a slug for a troubleshooting guide page:

❌

```
id: how-to-improve-error-messages-in-the-cloud-sdk
```

✅

```
id: improve-logging
```

### Use Lowercase Letters

Use lowercase letters in slugs.

For example, the following would be a slug for our an FAQ page:

❌

```
id: Frequently-Asked-Questions
```

✅

```
id: frequently-asked-questions
```

### Reference Files By Their Path, Not Their Slug

If you reference files by their path, e.g., `../my-file.mdx`, changes to the `id`, and therefore the slug, will automitcally carry over.
Otherwise you would have to adjust the reference in all files that reference a specific slug.

Therefore you should always reference other files by their (relative) path.

❌

```
... see our [JWT documentation](../retrieve-jwt)
```

✅

```
... see our [JWT documentation](../how-to-retrieve-jwt.mdx)
```

<!-- vale on -->
