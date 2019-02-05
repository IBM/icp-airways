import smtplib
gmail_user = 'icpairways@gmail.com'  
gmail_password = '.icpairways'
sent_from = gmail_user  
to = ['icpairways@gmail.com','s4saif.121@gmail.com']  
subject = 'Your Flight'  
body = 'Hey there!, Your Flight Booking Deatil!'
email_text = 'yo will be going from '
server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
server.ehlo()
server.login(gmail_user, gmail_password)
server.sendmail(sent_from, to, email_text)
server.close()
print 'Email sent!'