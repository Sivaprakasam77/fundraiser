# Fundraiser

    Fundraiser is a project of Sharing funds to needed people.

### Frontend 6 layers from the xd.adobe.com

    1. [Web view]    -  https://xd.adobe.com/view/0d6d0dea-897f-4918-885f-fe2cec9107c7-583e
    2. [Mobile View] -  https://xd.adobe.com/view/af673817-bb05-4e8d-85ff-e4c63708071a-fa34
    3. [Extra needs] -  1. Add Bank Account
                        2. Fund need's registration
                        3. Fund Donation

### API needs to be enabled

    1. [Dashboard] GET(/dashboard)
        {
            "FundID": "",
            "Image": "",
            "Title": "",
            "Location": "",
            "Date": "",
            "Need": "",
            "RaisedPercentage": "",
            "Profile": "",
            "Name": "",
        }, -> Goto Card view

    2. [Register] POST(/signup)
        {
            "UserID": "",
            "Profile": "",
            "FirstName": "",
            "LastName": "",
            "Email": "",
            "Password": "",
        } -> Goto Dashboard

    3. [Account add] POST(/baccount)
        {
            "UserID": "",
            "Bank AccNo": "",
            "Bank Name": "",
            "IFSC Code": "",
            "UPI ID": "",
        }

    4. [Login] POST(/signin)
        {
            "Email": "",
            "Password": "",
        } -> Goto Dashboard

    5. [Logout] GET(/signout)

    6. [Forgot Password] POST(/forgot)
        {
            "Email": "",
        } -> Dialog box show

    7. [Reset Password] POST(/reset)
        {
            "Password": "",
            "Token": "",
        } -> Goto SignIn

    8. [Fund collector] POST(/create)
        {
            "FundID": "",
            "Image": "",
            "Title": "",
            "Location": "",
            "Date": "",
            "Need": "",
            "Overview": [""],
            "Updates": [""],
        }, -> Goto Card view
        Features : {
            "FundID": "",
            "Available": "",
            "Supporters": [{
                "UserID": "",
                "TransactionID": "",
                "Amount": "",
            }],
            "Shares": "",
            "Comments": [{
                "Name": "",
                "Comment": "",
            }],
            "RaisedPercentage": "",
            "TopSupporters": [{
                "UserID": "",
            }],
            "daysLeft": "",
            methods: [RaisedPercentage,TopSupporters,daysLeft,Available,SupporterCount]
        }, -> Auto add to Fund collector

    9. [Fundraiser] POST(/raise)
        {
            "Donated": [{
                "FundID": "",
                "FromID": "",
                "ToID": "",
                "Amount": "",
                "Message": "",
                "TransactionID": "",
                methods:[TransactionID]
            }],
        }, -> Receive Thankyou email, Goto Dashboard

    10. [Search] POST(/search)
        {
            "Title": "",
        } -> Goto List cards

    11. [Get All titles for Search] GET(/init_search)
        {
            "Title": "",
        } -> Goto List cards

    12. [Comment] POST(/comment)
        {
            "FundID": "",
            "Name": "",
            "Comment": "",
        } -> Comment update

    13. [detail] GET(/detail/:id)
    {
        "FundID": "",
        "Image": "",
        "Title": "",
        "Location": "",
        "Date": "",
        "Need": "",
        "Overview": [""],
        "Updates": [""],
    }, -> Goto Card view
    Features : {
        "FundID": "",
        "Available": "",
        "Supporters": [{
            "UserID": "",
            "TransactionID": "",
            "Amount": "",
        }],
        "Shares": "",
        "Comments": [{
            "Name": "",
            "Comment": "",
        }],
        "RaisedPercentage": "",
        "TopSupporters": [{
            "UserID": "",
        }],
        "daysLeft": "",
        methods: [RaisedPercentage,TopSupporters,daysLeft,Available,SupporterCount]
    },
