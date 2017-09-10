import boto3

import io
from botocore.client import Config
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-west-2:064452207999:deployPortfolioTopic')

    try:
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
        portfolio_bucket = s3.Bucket('portfolio.sowmyadinavahi.me')
        build_bucket = s3.Bucket('portfoliobuild.sowmyadinavahi.me')

        portfolio_zip = io.BytesIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm)
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print "Job Done!"
        topic.publish(Subject="portfolio deployed", Message="Portfolio deployed Successfully.")
    except:
        topic.publish(Subject="portfolio deploy failed", Message="Portfolio was not deployed successfully!")
        raise
    
