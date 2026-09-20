# AWS EC2 Windows IIS Infrastructure Deployment

## Project Overview

Hands-on cloud infrastructure project demonstrating the provisioning, configuration, security, deployment, and troubleshooting of a Windows Server environment on AWS EC2.

The project uses AWS EC2 to host a static portfolio website through Microsoft IIS.

## Architecture

```text
GitHub Repository
       |
       | Git Clone
       v
AWS EC2
Windows Server 2022
       |
       +-- Security Group
       |     +-- HTTP : 80
       |     +-- RDP  : 3389 (restricted)
       |
       +-- IIS Web Server
                |
                v
        Portfolio Website
