# Uliana Andreeva
_software engineer_

> Innovative, task-driven professional with __5+ years__ of experience in software development.  
> Proficient in __backend development__, testing code and troubleshooting issues.  
> Self-starter, quick-learner, problem-solver with a positive, collaborative, and __team-based attitude__.  
> Fluent in English (B2+ to C1).

[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/youlass)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ulyana-andreeva/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](88.andreeva@gmail.com)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/brainydamage)

___
## 🙋 Areas of Expertise

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=black)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)

___
## 🛠️ Work Experience

* **Software Engineer at [EPAM Systems](https://www.epam-group.ru/)**  
(_November 2017 - Present_)

  * **Fullstack Software Engineer**
    * Developed a brand new application for administrating users which increased customer satisfaction by 73%.
    * Improved development flow and implemented continuous delivery by introducing feature toggling technique.
    * Ensured data consistency by implementing bidirectional synchronization between two services. 
    * Improved service stability and usability by fixing 10+ critical bugs.

  * **Java Software Developer**
      * Minimised total cost of IT infrastructure by migrating several apps towards the cloud.
      * Increased code coverage from 30% up to 87% by creating unit tests. Increased integration test coverage
        from ad-hoc to 70% of new release requirements.

  * **DevOps and Cloud Engineer**
      * Increased development speed and quality by configuring effective CI/CD using Jenkins.
      * Improved service availability by improving AWS cloud infrastructure and introducing autoscaling. 
      * Improved fault tolerance and scalability by breaking up monolithic app into microservices.
      * Reduced operational costs by 25% by implementing event-driven serverless architecture using
        AWS Lambda.


* **Build Engineer at [PROMT LLC](https://www.promt.ru/)**  
(_May 2015 - February 2017_)
    * Development of installation packages for desktop and server systems.     
    * Automation and scripting to improve existing process.
    * Close work with Developer and QA teams to design and develop
    robust solutions to meet client requirements for required functionality.


* **Senior Technical Support Engineer at [PROMT LLC](https://www.promt.ru/)**  
(_March 2012 - May 2015_)
    * Customer Support.
    * Manual software testing.
    * Translating guides and instruction from Russian into English.

___
## 📜 Education

**📍 Design and Development of Information Systems**  
Saint-Petersburg State Polytechnical University  
_2015 - 2017_  


**📍 Applied Linguistics**  
Nevsky Institute of Language and Culture  
_2009 - 2014_  

**Master thesis:**  
_Computer methods for analyzing and machine translation of English attributive phrases._


___
## 📚 Certifications

📍 AWS Certified Solutions Architect - Associate  
📍 Google Certified Professional Cloud Architect  
📍 Oracle Database SQL Certified Expert  


___
## 🐾 Pet-project  
[Telegram bot](http://t.me/gorzdrav_checker_bot) that helps users to find the ticket to vaccination at requested health centres.  
User subscribes for one or several desired clinics and then gets a message as soon as the number of tickets in selected clinics changed.  
Social meaningful project, cloud-native serverless solution, it has been released in February 2020 by my own.  

🔎 **Facts and Figures:**
* **1000+** unique users in all the time the bot has been running.
* **112** clinics tracked every several minutes 24/7.
* **280+** users reported successful registration through the bot.

🚧 **Under the hood:**
* AWS Lambda with Node.js.
* AWS DynamoDB.
* AWS SQS + Java-consumer runs on EC2.


___
## 💻 Code examples  
```javascript
async function getClinicsWithVaxRoom(clinics) {
  let vaxClinics = [];
  let promises = [];

  for (const clinic of clinics) {
    if (clinic.id !== 0) {
      promises.push(checkClinic(clinic, vaxClinics));
    }
  }

  await Promise.all(promises);

  logger.debug(`Found ${vaxClinics.length} clinics`);
  return covidClinics;
}

async function checkClinic(clinic, vaxClinics) {
  const params = {
    FunctionName: 'vax-bot-dev-checker',
    InvocationType: 'RequestResponse',
    Payload: JSON.stringify(clinic.id),
  };

  return new Promise(function (resolve, reject) {
    lambda.invoke(params, function (error, data) {
      if (error) {
        logger.error(`Error checking clinic ${clinic.id}`);
        reject(error);
      } else if (data) {
        if (JSON.parse(data.Payload).statusCode === 200) {
          const clinicToAdd = {
            "id": clinic.id,
            "districtId": clinic.districtId,
            "districtName": clinic.districtName,
            "lpuFullName": clinic.lpuFullName,
            "lpuShortName": clinic.lpuShortName,
            "address": clinic.address,
            "phone": clinic.phone,
          }
          vaxClinics.push(clinicToAdd);
        }

        resolve();
      }
    })
  });
}
```

```java
@Override
  public IdPConnection findDefaultConnection(String customer) {
    try {
      String connectionName = settingsClient.getConnectionName(customerId);
      List<IdPConnection> connections = getConnections(customerId);
      return connections
          .stream()
          .filter(connection -> connection.getConnectionName().equals(connectionName))
          .findAny()
          .orElseThrow(() ->
              new NotFound(TransportErrorCode.fromHttp(Http.Status.NOT_FOUND),
                  new ExceptionMessage(REASON,
                      "Could not find connection " + connectionName)));
    } catch (ConfigurationException e) {
      log.info(
          "Config does not exist: customer={}; message={}",
          customerId,
          e.getMessage());
      throw new NotFound(
          TransportErrorCode.fromHttp(Http.Status.NOT_FOUND),
          new ExceptionMessage(REASON, e.getMessage()));
    }
```