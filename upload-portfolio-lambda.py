# importing some modules
import boto3
# from botocore.client import Config
# import StringIO
# try:
#     from StringIO import StringIO
# except ImportError:
#     from io import StringIO
import io
from botocore.client import Config
import zipfile
import mimetypes

#In case this command doesn't work
s3 = boto3.resource('s3')

#creating a name for s3 resource
s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

#creating names for both buckets we created using s3
portfolio_bucket = s3.Bucket('portfolio.sowmyadinavahi.me')
build_bucket = s3.Bucket('portfoliobuild.sowmyadinavahi.me')

#creating string IO file in memory for portfolio_zip and downloading it
# portfolio_zip = StringIO.StringIO()
# portfolio_zip = io.StringIO()
portfolio_zip = io.BytesIO()
build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)


# with the zipfile to extract, upload and set the ACL
with zipfile.ZipFile(portfolio_zip) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        portfolio_bucket.upload_fileobj(obj, nm,
            ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
