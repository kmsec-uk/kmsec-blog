---
layout: $/layouts/post.astro
title: Tracking Crimson Kingsnake
description: Using VirusTotal to track Crimson Kingsnake
tags:
  - virustotal
  - phishing
  - fraud
  - intel
  - iocs
  - "crimson kingsnake"
author: kmsec
date: 2023-01-06T01:00:00.000Z
---
Back in November 2022, I was looking into the Crimson Kingsnake actor, who were profiled by Abnormal Security in [their write-up](https://abnormalsecurity.com/blog/crimson-kingsnake-bec-group-attacks). In summary, Crimson Kingsnake use well-conceived and highly-targeted lures to facilitate invoice fraud.

I used VirusTotal to pivot off metadata in email and invoice samples, profile victim organisations, and ultimately got some great indicators and patterns to track this actor.

## Campaign playbook

The fraudster sends a single lure, and follows it up with a thread of replies. The first lure:

![1st-lure.png](/images/uploads/crimsonkingsnake/1st-lure.png)

The initial lure comes comes from what I presume to be a compromised Office365 environment, as ed3p[.]com appears to be a legitimate company and the header is valid.

The English is good, the context is believable, and it was targeted to a well-positioned employee in finance.

The story gets interesting with the second email. The fraudster spins up a fake thread to the CEO mail@work-desk02[.]space with the victim CC'd:

![follow-up-1-ceo.png](/images/uploads/crimsonkingsnake/follow-up-1-ceo.png)

With further pressure, the fraudster then sends a PDF formatted invoice.
#### Invoice first page
![invoice-1st-page.png](/images/uploads/crimsonkingsnake/invoice-1st-page.png) 
#### Invoice second page
![invoice-2nd-page.png](/images/uploads/crimsonkingsnake/invoice-2nd-page.png)

## Analysis and Threat Actor profile
They had a flurry of activity in Autumn 2022, and since roughly December 2022, they've gone underground or changed tactics. I believe a lot of their infrastructure and financial operations have been disrupted by various parties.
* They are reasonably competent and decently-resourced. Since their initial lures often come from compromised Office365 environments, they either have the skills in-house or are well-networked with other Threat Actor groups.
* During this campaign, they were impersonating legal firms (Clifford Chance and Simmons & Simmons), and used pretty phishy subject lines:
  ```bash
  f40816615b7b38c517b47cdf6d4ff33a2f08e873b988d58af8f12ec080aa001c:Subject: Outstanding Invoice
  cf634f48daaea6741e9faa88c469bec475bf209be1c9af5d38718079cf08e2a2:Subject: Overdue Bill
  8c2e3a44ffaa0e05a15952b4b457071e7dbdbd971d75e950f9cb50b5d298b93e:Subject: Unpaid Bill
  d3e74bcff81007b0bfa96a03c4dc0ed96ab2fceca6a900046b389371f9b674ff:Subject: Outstanding Invoice
  6341740a72abd8de5a3fcd06a4b1908ae3d8260af3a02f0d8782967bce11cc21:Subject: Outstanding Reminder
  ```
* In-advance of their campaign, they purchased several typo-squatting domains of the legal company they impersonated. Here are several I identified typosquatting Simmons and Simmons:
  ```
  mail-simmonslegal[.]com
  simmonsimlegal[.]com
  simmonsslslegal[.]com
  simmonssslegal[.]com
  slsssimmonslegal[.]com
  sslsimmonslegal[.]com
  sssimmonsandsimms[.]com
  sssimmonslegal[.]com
  ssslsimslegal[.]com
  ```
* The English used in the lures and their PDF was good but not perfect. They also used the same phrases and personas which were very high-fidelity for fingerprinting:
  ```bash
   #virustotal search 
   type:email content:"Not to bother"
   type:email content:"claire.freeman"
   ```
   ![phrase-fingerprint.png](/images/uploads/crimsonkingsnake/phrase-fingerprint.png)
* I was only able to find a few samples of invoices, but they weren't very good at hiding their tracks. The metadata of the PDFs were all the same user: `hpins`
   ```bash
    File Name                       : 38a3ef908d9764f26c2f75e7ed490f6e1c4802d3e3fd3944ec31fd199ddae823.pdf
    Author                          : hpins
    File Name                       : 6c0c4b781e487ce3313ba4e16d1bcd8a195bc3cdc23d77d85aad1f1307c87694.pdf
    Author                          : hpins
    File Name                       : c273b25f79ef736e25a983dfc5d7642d331c71e6ee5a2d3a07047d821f01bfc5.pdf
    Author                          : hpins
    File Name                       : d46a3d8e09f62caafad79260c4e115aee6681602236ccbfe472f8afe4baafe78.pdf
    Author                          : hpins
    File Name                       : ed08ec8ba73351d675855e7c07838000c92109ff4bf602b6070324b352ed84bc.pdf
    Author                          : hpins
   ```
   
   VirusTotal Search:
   ```bash
   #virustotal search 
   type:pdf metadata:hpins
   ```
* Based on the upload date and victim org from samples, Crimson Kingsnake seemed to be going alphabetically through a list of organisations, their targets would look like:
  - **L**ocal Bank
  - **M**etro Corp
  - **N**ice Legal Firm

    (all made up names for demo)
* The victim organisations were usually large enterprises where an unpaid invoice would be a conceivable mistake. No specific sector was targeted, but target organisations were all western/from countries where English is a first language.

In summary, they appear to be a reasonably-resourced group, but aren't particularly covert in their operations.
## VirusTotal LiveHunt Yara
```
import "vt"
rule CrimsonKingsnake
{  
  strings:
      $emailphrase1 = "claire freeman" ascii wide nocase
      $emailphrase2 = "whitney chatterjee" ascii wide nocase
      $emailphrase3 = "kirsty barnes" ascii wide nocase
      $emailphrase4 = "Not to bother" ascii wide
      
      $invoicemarker1 = { 41 75 74 68 6F 72 20 28 68 70 69 6E 73 29 }
  
  condition:
      vt.metadata.new_file and
     ((vt.metadata.file_type == vt.FileType.EMAIL or
      vt.metadata.file_type == vt.FileType.OUTLOOK) and any of ($emailphrase*))
      or (vt.metadata.file_type == vt.FileType.PDF and any of ($invoicemarker*))
}
```
## Indicators:
You can also view the [VirusTotal collection](https://www.virustotal.com/gui/collection/8a2fdce716ab6a4ecba621cad1a167572783b4e6e317bc95da12582a0decc8e1). Hashes are of email samples and invoice PDFs:
<div class="not-prose">
<pre class="indicators text-xs font-mono font-medium language-txt no-line-numbers" data-prismjs-copy="Copy indicators">
<code>
mail-simmonslegal[.]com
simmonsimlegal[.]com
simmonsslslegal[.]com
simmonssslegal[.]com
slsssimmonslegal[.]com
sslsimmonslegal[.]com
sssimmonsandsimms[.]com
sssimmonslegal[.]com
ssslsimslegal[.]com
work-desk02[.]space

2dedde4721b194671eded509dbeb8a65ebc3d3e80a800d9a96f09a0a86e299a9
2e29a32c2b53d2750ca7b2a865f66b84b68f79a9208bea2cb5c3f8423f66f160
38a3ef908d9764f26c2f75e7ed490f6e1c4802d3e3fd3944ec31fd199ddae823
40e1b183301320ab32752fa7e8ffe6843a3ee02e61d62dea644974b033d963e3
6341740a72abd8de5a3fcd06a4b1908ae3d8260af3a02f0d8782967bce11cc21
6c0c4b781e487ce3313ba4e16d1bcd8a195bc3cdc23d77d85aad1f1307c87694
6d05039db3af11f2dd7be7965719956a42a3e0a7344d90af88b0737dda48b9bd
88c3683258b2bac5dac5a52c0b84b24a1485e256efdf027e2c65f0398f98fb4a
8c2e3a44ffaa0e05a15952b4b457071e7dbdbd971d75e950f9cb50b5d298b93e
937bf2a08f5511be7120449a4c641f935b5a84c7caff35d64911f7a2511ea7aa
c023d3548ee3a7188a526730687311ed1d0fe702aad667875fd288a31307390f
c273b25f79ef736e25a983dfc5d7642d331c71e6ee5a2d3a07047d821f01bfc5
cb62118602287e0e8d7db69edcb56b4a877fdace6a7519a53bc712229f2ca21f
cf634f48daaea6741e9faa88c469bec475bf209be1c9af5d38718079cf08e2a2
d3e74bcff81007b0bfa96a03c4dc0ed96ab2fceca6a900046b389371f9b674ff
d46a3d8e09f62caafad79260c4e115aee6681602236ccbfe472f8afe4baafe78
ed08ec8ba73351d675855e7c07838000c92109ff4bf602b6070324b352ed84bc
f40816615b7b38c517b47cdf6d4ff33a2f08e873b988d58af8f12ec080aa001c
f76c3939f784af1740be04752c1f0929b9b6ec32ce9f20e41d6971edc684cd8d
</code>
</pre>
</div>