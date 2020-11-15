FROM ubuntu:bionic

RUN apt-get update && apt-get install python3 -y
RUN apt-get install sudo -y
RUN sudo apt-get install python3-pip -y
RUN sudo pip3 install pandas jupyter tensorflow
ENTRYPOINT ["./Docker101/Docker_tf/entrypoint.sh"]