FROM tomcat:9.0-jdk1.8

COPY HomestayFinder.war /usr/local/tomcat/webapps/

EXPOSE 8080
