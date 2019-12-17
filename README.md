# api

## Installation
Download and install Java Development Kit (JDK), version 13.0 or later

Switch to your working branch, for instance ‘develop’ branch.

To install all dependencies and start the server, run the command:

`./gradlew bootRun`

The tasks command lists Gradle tasks that you can also invoke, including those added by the base plugin, and custom tasks you just added as well

`./gradlew tasks`

### Connecting with MySql Database
Inside the application.yml file of your resources folder, configure the following configurations to set-up a MySQL server:

``` 
Spring DATASOURCE (DataSourceAutoConfiguration & DataSourceProperties)
spring.datasource.url = jdbc:mysql://localhost:3306/nextravel_spring
spring.datasource.username = root //normally put your MySQL username 
spring.datasource.password = YOUR_MYSQL_PASSWORD

## Hibernate Properties
# The SQL dialect makes Hibernate generate better SQL for the chosen database
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5InnoDBDialect
# Hibernate ddl auto (create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto = update
```

## Documentation
http://localhost:8080/swagger-ui.html

## Health, Info, Metrics
http://localhost:8081/actuator
http://localhost:8081/actuator/health
http://localhost:8081/actuator/info
