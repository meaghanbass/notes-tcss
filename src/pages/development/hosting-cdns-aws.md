---
title: "Hosting CDNs on AWS"
date: "2019-10-24"
tag: "dev"
---

1. Create an S3 Bucket
    * Enter bucket name
    * Default region
    * <kbd>Create Bucket</kbd>

2. Upload your files to the bucket

3. Make the bucket public - allow all access (research about this later)
    * Make all of the files public

4. Create a CloudFront Distribution
    * Navigate to CloudFront
    * <kbd>Create Distribution</kbd>
    * Select Web Distribution method
    * Origin Domain Name
        * Select the bucket you just created
    * Restrict Bucket Access: Yes
    * Select Create a New Identity
    * <kbd>Create Distribution</kbd>

5. Connect Origin Access Identity
    * Select the Origin Access Identity link on the side navigation
    * Copy the Amazon S3 Canonical User ID for the new bucket
    * Navigate back to S3, and click on the new bucket
    * Permissions
    * Access Control List
    * <kbd>+ Add Account</kbd>
    * Paste the ID into the ID field
    * Select *at least* Read permissions
    * <kbd>Save</kbd>

6. Referencing
    * Navigate back to CloudFront
    * Copy the Domain Name of the new bucket distribution
    * https://<span></span>s3-us-west-1.amazonaws.com/  <pre class="pre-sm">bucketname</pre> / <pre class="pre-sm">path</pre>