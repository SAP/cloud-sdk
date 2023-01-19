---
name: SAP Cloud SDK for Java issues
about: Report issues with the SAP Cloud SDK for Java
title: ''
labels: Java
assignees: ''
---

<!--
Thank you for reporting an issue with the SAP Cloud SDK for Java. We prepared this issue template for you to help you with collecting and providing the necessary information.

Before you begin make sure you have checked out our list of [Frequently Debugged Problems](https://sap.github.io/cloud-sdk/docs/java/troubleshooting-frequent-problems) as well as having searched our tag on [Stack Overflow](https://stackoverflow.com/questions/tagged/sap-cloud-sdk).

_Please_ take the time to fill out the information in this template. In _almost all cases it is vital_ to get a quick understanding of the problem and find out what is going wrong. It really enables us to come back to you with meaningful help as fast as possible.

Be sure to remove **any confidential** information (examples: credentials or internal URLs) before publishing the issue on the internet.
-->

**[OPTIONAL] Survey**
Please, help us making the SAP Cloud SDK better by taking our [survey](https://sapinsights.eu.qualtrics.com/jfe/form/SV_0P69X6kJ0Pdxqbc).
It takes less than 3 minutes :)

## Issue Description

<!--
Please provide a detailed description of your issue here. Use the points below as a guideline on what information might help us in answering your questions.
-->

Important information:

- Your code
- Expected outcome
- Actual outcome
- Steps attempted to resolve the issue
- In case of issues with any of our VDMs:
  - What happens when a request is performed directly via an HTTP client tool such as Postman?
  - In case that succeeds please provide details on the request such as URL, query parameters, header parameters, prerequisite requests (e.g. CSRF token), etc.
- Potentially missing information (open questions you might have)

### Impact / Priority

<!--
 Please briefly state how this issue impacts your project and what your timeline is.
 -->

Affected development phase: e.g. Getting Started, Development, Release, Production

Impact: e.g. No Impact, Inconvenience, Impaired, Blocked

Timeline: e.g. Go-Live is in 12 weeks.

## Error Message

```
Please paste your stack trace here within the backticks (replacing this comment)
```

<!-- Application Logs
Please make sure you [set your log level to debug](https://sap.github.io/cloud-sdk/docs/java/guides/logging-overview#configuring-logback) and attach the resulting log output as .txt or .log file to this issue. This is _very important_ as it usually gives a lot of information that is necessary to get to the root cause of an issue. Be sure to redact confidential information before posting.
-->

<!-- Maven Dependency Tree
Please attach the Maven dependency tree of your project. You can obtain that by running `mvn dependency:tree` on the command line. Kindly note that you could have several pom.xml files in your project. If so, please provide the dependency tree for the pom.xml of the root module and the module named `application` or `srv` that contains the application logic.
-->

## Project Details

<!--
Please provide as much information about your project as possible.
If you cannot share your project for confidentiality reasons, please consider providing a minimal working example https://en.wikipedia.org/w/index.php?title=Minimal_working_example&oldid=893866607
-->

- SAP Cloud SDK Version: <your SAP Cloud SDK version here>
<!-- The group id of the modules of the SAP Cloud SDK start with "com.sap.cloud.sdk" -->
- Link to GitHub repository: <your link here>
- Project type, for example:
  - [ ] CAP Project
  - [ ] SAP Cloud SDK Maven Archetype
  - [ ] None of the above:
- Platform:
  - [ ] Cloud Foundry
  - [ ] Neo
  - [ ] None of the above:

---

### Checklist

- [ ] Checked out the [documentation](https://sap.github.io/cloud-sdk/docs/java/troubleshooting-frequent-problems) and [Stack Overflow](https://stackoverflow.com/questions/tagged/sap-cloud-sdk)
- [ ] Description provided with all relevant information
- [ ] Attached debug logs
- [ ] Attached dependency tree
- [ ] Provided the SAP Cloud SDK version & link to relevant source code
