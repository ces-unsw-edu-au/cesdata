---
title: "CliMond"
description: "Global climatologies for bioclimatic modelling"
tags: [wget, curl]
---

## Description

versions	v1.2
released	2014

## Citation

> Kriticos D.J., Webber B.L., Leriche A., Ota N., Macadam I., Bathols J. & Scott J.K. (2012) *CliMond: global high resolution historical and future scenario climate surfaces for bioclimatic modelling*. **Methods in Ecology and Evolution**, 3: 53-64. DOI: [10.1111/j.2041-210X.2011.00134.x](http://doi.org/10.1111/j.2041-210X.2011.00134.x)

> Kriticos D.J., Jarošik V. and Ota N. (2014) *Extending the suite of Bioclim variables: a proposed registry system and case study using principal components analysis.* **Methods in Ecology and Evolution**, Online Early, DOI: [10.1111/2041-210X.12244]

## Links 

- https://www.climond.org

## Data access and download

```bash
source proyectos/UNSW/cesdata/env/project-env.sh
mkdir -p $GISDATA/climate/global/CliMond
cd $GISDATA/climate/global/CliMond
```

Go to the webpage, login open developer tools -> network, then copy link as cURL, then we pipe the result to get a list of links to the zipfiles...
```sh
mkdir -p $GISDATA/climate/global/CliMond/Bioclim
cd $GISDATA/climate/global/CliMond/Bioclim

curl 'https://www.climond.org/Core/Authenticated/Bioclim.aspx' \
  -H 'Connection: keep-alive' \
  -H 'Cache-Control: max-age=0' \
  -H 'sec-ch-ua: "Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Upgrade-Insecure-Requests: 1' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: navigate' \
  -H 'Sec-Fetch-User: ?1' \
  -H 'Sec-Fetch-Dest: document' \
  -H 'Referer: https://www.climond.org/BioclimData.aspx' \
  -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,de;q=0.6,ca;q=0.5' \
  -H 'Cookie: ASP.NET_SessionId=rieowh1bkfmjzulwnime3tn5; __utmc=96693453; __utmz=96693453.1659574627.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); warnedIE=true; __utma=96693453.810068548.1659574627.1659574627.1659578286.2; .ASPXAUTH=9C1EBE2E9C8CF2282ADCAC00E485AABD3CEC7A6910BBB131625E6A2C2F439E7CD6D025651A84A8D3641BDF44B2E6407285DBF7C77D695F6017A6BD6BB58128E02A60EAE3C05A630C36E608518BE95864B8C8D6208E62B5947B87035191EE41BB39DD4073F060D3BF601FB4F5FE94DA8B015D1A48769253BCC6365B77796EEC99BAB291529B87A478F8FBDFC9E391D890; .ASPXROLES=ZGK7zMXZPBtFYi7Q1SSOiGZTVBZZcBw5yRU0GIxkuQm_PdK3anr6NgJGw1aU9o2zsxlKihFzxYKErHUxC_tVdCstG5vGzIDa2JFNg1cT88jlBNBjG76rOPRLKxzo2yGwQmBUbA-yH6bS_cMgYkDp0Z92cTGaxkZxg0z03ALuuMONxIcmp0CHHQ-WH9SH34r5ZZr--Pk-pR9Oog9R39DegVIjnPpGLBVLaibA_jgoFvy4va5zoZjqEVxTuNypktnRhbRKZI2m1dW_Wk4oFsSa_rjbuy8DzT0g555uoV6nX3DOINHU1CURhw_J_aFYbXofR3knh_GhPnWRn-caU7Cst-D3tX_4QNOZHEp0dpz9a8LLa9VGIQAlNcQzpIDnfSYWr7NzT-V61qbVOAX0gMmlgeXpxm7V-rQZasZ-G1UhMUNxiraevAXlMYwgN30wEihWMD-QEL3jfoMecBvATWk1RuVktsNuD-8dK3XsE-fci27qFBTghE-rS0ByU4QJdNq85HQ7Y8Rg9Q1DNGfH8kIW8M3UvI8l5ncyzbKIElc00rpRrEuQnxkwG4pD2RxdMhZd0; __utmb=96693453.7.9.1659578653981' \
  --compressed | grep href | grep zip > links

```

Then we use wget to go through the list of links

```sh

wget --force-html --input-file=links --base=https://www.climond.org/Core/Authenticated/ \
  --header='Connection: keep-alive' \
  --header='Cache-Control: max-age=0' \
  --header='sec-ch-ua: "Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"' \
  --header='sec-ch-ua-mobile: ?0' \
  --header='Upgrade-Insecure-Requests: 1' \
  --header='User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36' \
  --header='Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
  --header='Sec-Fetch-Site: same-origin' \
  --header='Sec-Fetch-Mode: navigate' \
  --header='Sec-Fetch-User: ?1' \
  --header='Sec-Fetch-Dest: document' \
  --header='Referer: https://www.climond.org/BioclimData.aspx' \
  --header='Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,de;q=0.6,ca;q=0.5' \
  --header='Cookie: ASP.NET_SessionId=rieowh1bkfmjzulwnime3tn5; __utmc=96693453; __utmz=96693453.1659574627.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); warnedIE=true; __utma=96693453.810068548.1659574627.1659574627.1659578286.2; .ASPXAUTH=9C1EBE2E9C8CF2282ADCAC00E485AABD3CEC7A6910BBB131625E6A2C2F439E7CD6D025651A84A8D3641BDF44B2E6407285DBF7C77D695F6017A6BD6BB58128E02A60EAE3C05A630C36E608518BE95864B8C8D6208E62B5947B87035191EE41BB39DD4073F060D3BF601FB4F5FE94DA8B015D1A48769253BCC6365B77796EEC99BAB291529B87A478F8FBDFC9E391D890; .ASPXROLES=ZGK7zMXZPBtFYi7Q1SSOiGZTVBZZcBw5yRU0GIxkuQm_PdK3anr6NgJGw1aU9o2zsxlKihFzxYKErHUxC_tVdCstG5vGzIDa2JFNg1cT88jlBNBjG76rOPRLKxzo2yGwQmBUbA-yH6bS_cMgYkDp0Z92cTGaxkZxg0z03ALuuMONxIcmp0CHHQ-WH9SH34r5ZZr--Pk-pR9Oog9R39DegVIjnPpGLBVLaibA_jgoFvy4va5zoZjqEVxTuNypktnRhbRKZI2m1dW_Wk4oFsSa_rjbuy8DzT0g555uoV6nX3DOINHU1CURhw_J_aFYbXofR3knh_GhPnWRn-caU7Cst-D3tX_4QNOZHEp0dpz9a8LLa9VGIQAlNcQzpIDnfSYWr7NzT-V61qbVOAX0gMmlgeXpxm7V-rQZasZ-G1UhMUNxiraevAXlMYwgN30wEihWMD-QEL3jfoMecBvATWk1RuVktsNuD-8dK3XsE-fci27qFBTghE-rS0ByU4QJdNq85HQ7Y8Rg9Q1DNGfH8kIW8M3UvI8l5ncyzbKIElc00rpRrEuQnxkwG4pD2RxdMhZd0; __utmb=96693453.7.9.1659578653981'
```

```sh
mkdir -p $GISDATA/climate/global/CliMond/RawClimate
cd $GISDATA/climate/global/CliMond/RawClimate

curl 'https://www.climond.org/Core/Authenticated/RawClimate.aspx' \
  -H 'Connection: keep-alive' \
  -H 'Cache-Control: max-age=0' \
  -H 'sec-ch-ua: "Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'Upgrade-Insecure-Requests: 1' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: navigate' \
  -H 'Sec-Fetch-User: ?1' \
  -H 'Sec-Fetch-Dest: document' \
  -H 'Referer: https://www.climond.org/RawClimateData.aspx' \
  -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,de;q=0.6,ca;q=0.5' \
  -H 'Cookie: ASP.NET_SessionId=rieowh1bkfmjzulwnime3tn5; __utmc=96693453; __utmz=96693453.1659574627.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); warnedIE=true; .ASPXAUTH=9C1EBE2E9C8CF2282ADCAC00E485AABD3CEC7A6910BBB131625E6A2C2F439E7CD6D025651A84A8D3641BDF44B2E6407285DBF7C77D695F6017A6BD6BB58128E02A60EAE3C05A630C36E608518BE95864B8C8D6208E62B5947B87035191EE41BB39DD4073F060D3BF601FB4F5FE94DA8B015D1A48769253BCC6365B77796EEC99BAB291529B87A478F8FBDFC9E391D890; __utma=96693453.810068548.1659574627.1659578286.1659582642.3; .ASPXROLES=i2fL3QoXsDgQp10QzMOP7M3-_P-4Tyc5R29msFiaPzWRTeJo-LVblELrMdUJB569_6NXcihDMXhKHg5CF2yleM6hHJhqH4KjEtgXYzWhhLSzZe8yxWthyIEujJqjQskOGO0AfxiN4kZ2H80axWbIsP1CHLeTp3kquDDPFvhySyRJxta93s0ueVrRU51RLdOAqwov4v0B0KPl1tMPOgp1-T2upjwSKQak9nzn8hIfP9pFYP-ce9c02uvRARe6_is4fkoSRvbWM864qi1QQFYnjxMtFKBjLhalM9Kb3W-vAYGqZTUHWFqE_PbOFZDZ_aLCSI9l1_PTL0DjSNXn4Zu0c63hQrXCg-fQ_w5sM6ueGchCQBy6ZXb6VfoKFohjiyy8ap4aXCO6x1XZ6ioxpjdzqHz_D55PkIxtwtkMZ8z642jnjbtxCCLsvc9tqN4weBu-zkqs8yvieP0ZmqQPhPkTBahGXtsKbhoqS9kNibelNR-hkQjISSARwMKX3nXm_x2axaoI7aE3xTDd-1i_VIrh4Su_XjonkF8WwUulWbBg77SLYeVGITFbmItwGtat1m7Q0; __utmb=96693453.2.10.1659582642' \
  --compressed | grep href | grep zip > links

```

Then we use wget to go through the list of links

```sh

wget --force-html --input-file=links --base=https://www.climond.org/Core/Authenticated/ \
  --header='Connection: keep-alive' \
  --header='Cache-Control: max-age=0' \
  --header='sec-ch-ua: "Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"' \
  --header='sec-ch-ua-mobile: ?0' \
  --header='Upgrade-Insecure-Requests: 1' \
  --header='User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36' \
  --header='Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
  --header='Sec-Fetch-Site: same-origin' \
  --header='Sec-Fetch-Mode: navigate' \
  --header='Sec-Fetch-User: ?1' \
  --header='Sec-Fetch-Dest: document' \
  --header='Referer: https://www.climond.org/RawClimateData.aspx' \
  --header='Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,de;q=0.6,ca;q=0.5' \
  --header='Cookie: ASP.NET_SessionId=rieowh1bkfmjzulwnime3tn5; __utmc=96693453; __utmz=96693453.1659574627.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); warnedIE=true; .ASPXAUTH=9C1EBE2E9C8CF2282ADCAC00E485AABD3CEC7A6910BBB131625E6A2C2F439E7CD6D025651A84A8D3641BDF44B2E6407285DBF7C77D695F6017A6BD6BB58128E02A60EAE3C05A630C36E608518BE95864B8C8D6208E62B5947B87035191EE41BB39DD4073F060D3BF601FB4F5FE94DA8B015D1A48769253BCC6365B77796EEC99BAB291529B87A478F8FBDFC9E391D890; __utma=96693453.810068548.1659574627.1659578286.1659582642.3; .ASPXROLES=i2fL3QoXsDgQp10QzMOP7M3-_P-4Tyc5R29msFiaPzWRTeJo-LVblELrMdUJB569_6NXcihDMXhKHg5CF2yleM6hHJhqH4KjEtgXYzWhhLSzZe8yxWthyIEujJqjQskOGO0AfxiN4kZ2H80axWbIsP1CHLeTp3kquDDPFvhySyRJxta93s0ueVrRU51RLdOAqwov4v0B0KPl1tMPOgp1-T2upjwSKQak9nzn8hIfP9pFYP-ce9c02uvRARe6_is4fkoSRvbWM864qi1QQFYnjxMtFKBjLhalM9Kb3W-vAYGqZTUHWFqE_PbOFZDZ_aLCSI9l1_PTL0DjSNXn4Zu0c63hQrXCg-fQ_w5sM6ueGchCQBy6ZXb6VfoKFohjiyy8ap4aXCO6x1XZ6ioxpjdzqHz_D55PkIxtwtkMZ8z642jnjbtxCCLsvc9tqN4weBu-zkqs8yvieP0ZmqQPhPkTBahGXtsKbhoqS9kNibelNR-hkQjISSARwMKX3nXm_x2axaoI7aE3xTDd-1i_VIrh4Su_XjonkF8WwUulWbBg77SLYeVGITFbmItwGtat1m7Q0; __utmb=96693453.2.10.1659582642'
```
