## Inspiration 

On October 17, 2018 the government of Canada legalized marijuana at the federal level. While this has its benefits, it has one big drawback; increasing the risk of accidents caused by intoxicated/high driving. According to MADD Canada, an estimated 55.4% of road crash deaths were as a result of alcohol and/or drugs with cannabis being the most common drug.  While breathalyzers exist to detect drunk drivers, there are currently no accurate roadside tests for detection of cannabis use in drivers. That is why we wanted to develop an application that uses state of the art technology to accurately determine whether an individual is intoxicated or not from cannabis use. 

  

## What it does 

Using 3 roadside tests, law enforcement will be able to accurately test for cannabis use in a driver. The three tests include one for common facial expressions associated with cannabis use, such as red eyes and relaxed face muscles, eye pupil dilation changes to light, and a balance test.  After the three assessments, D.U.High will give a percentage confidence for whether or not the individual is high or not. 

  

## How we built it 

Our team created an Android and iOS mobile application using react-native, which communicates with a NodeJs and Flask API, to get data from custom Azure machine learning models including computer vision and video analytics. 

  

## Challenges we ran into 

Training the model to accurately predict the three different tests took quite a while, as the data we used was personally gathered from the internet to insure its quality. Also, hosting the flask REST API proved to be a challenge, as nobody in our team had worked with deployable REST APIs before. For our mobile engineer, it was a challenge to learn all that was needed, as she had attended a hackathon before. This was an incredible learning opportunity for the both of us. 

  

## Accomplishments that we're proud of 

We're proud of having created an MVP, from concept to production, in just 24 hours! Both of us set out to create a robust and difficult to make application, so that we could use it as a learning opportunity while solving a critical issue in society. In particular, we're proud of: 
  

* Building a fully functional dual platform mobile application developed using React-Native 

* Using several custom Microsoft Azure APIs and Machine Learning Models for facial, video and emotion detection. 

* Developing a custom machine learning recommendation engine using custom picked data for categorization . 

  

## What we learned 

We learned how to connect mobile applications to custom built REST APIs, to host said REST APIs online, how to get past CORS, and how to train custom vision AI models. 

  

## What's next for D.U.High 

We wish to integrated D.U.High in real law enforcement sobriety tests, in order to both improve the machine learning model, and to make sure that the roads are safer from intoxicated drivers. We would also like to develop more tests, including speech analytics and dexterity tests. With more data in our model, we hope to one day make D.U.High an accurate testing tool for law enforcement. 

 
