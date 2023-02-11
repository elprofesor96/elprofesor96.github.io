---
layout: post
title: Stored Cross-Site Scripting via Name field (Authenticated) Grafana
description: cve
summary: cve
tags: cve
---
# Stored Cross-Site Scripting via Name field (Authenticated) Grafana
---
## Product Version

Vulnerability is present on all versions from 8.1.3 till 8.2.7 (Grafana)
A patch was issued for versions 8.3.0 and above (Grafana)

Install Grafana version 8.2.7
The installation steps can be found on official grafana website
<a href="https://grafana.com/grafana/download/8.2.7">https://grafana.com/grafana/download/8.2.7</a>
![[/images/Pasted image 20220411204945.png]]

![[/images/Pasted image 20220411202506.png]]

## Proof of Concept

As an admin, you can list all users from grafana. In our case, we have 2 users, first user  is admin who is also Server Admin and the second one is elprofesor who is a regular user.

![alt text](/images/Pasted image 20220411204623.png)

Also, an admin user can change settings for each user such as Name, Email, Username and Password. 

The following image will show an admin changing Name field (display name) for a regular user called elprofesor.
The XSS payload used for this proof of concept:
```html
{{constructor.constructor("alert(1)")()}}
```
Please note that the vulnerability (XSS) is present on both Name and Username fields but if changing the Username field, the specific user can no longer authenticate to grafana app.
A more accurate scenario is changing only Name field which is also the display name of that user.
![alt text](/images/Pasted image 20220411204753.png)

## Trigger

After elprofesor (regular user) will login to grafana app, the XSS will trigger on his account.
![alt text](/images/Pasted image 20220411205003.png)

![alt text](/images/Pasted image 20220411205019.png)
![alt text](/images/Pasted image 20220411205044.png)

Also, this simple XSS payload will crash the web app interface for that user.
![alt text](/images/Pasted image 20220411205143.png)

As a real world scenario, this XSS can not be used to hijack user sessions because the compromised account is also a Server Admin and the attacker can simply change passwords for those victim accounts in order to get access to them.
A more intelligent way to abuse this vulnerability is to make unauthorized actions in the name of the victims or to phish the victims into downloading malicious software on their systems.
For example, if the compromised admin account develops a XSS payload that will make an action, after the victim logs in, the unauthorized activity (action) will be made in the name of the victim without noticing anything.
As a second example, the compromised admin can make a XSS payload that will download some malicious program. After the victim logs in, the whole scenario will look legit because grafana app just downloaded some king of software. If the phishing is good, the victim will install the software and the attacker will have full access to victim's system.
