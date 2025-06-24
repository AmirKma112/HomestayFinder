FROM tomcat:9.0-jdk11

COPY HomestayFinder.war /usr/local/tomcat/webapps/

EXPOSE 8080
