FROM centos
WORKDIR /etc/yum.repos.d/
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
RUN yum install java-17-openjdk -y

WORKDIR /root
VOLUME /tmp
ADD /target/spring-boot-ecommerce-1.3.2.jar ecommerce.jar
RUN sh -c 'touch ecommerce.jar'
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom","-jar","ecommerce.jar"]
