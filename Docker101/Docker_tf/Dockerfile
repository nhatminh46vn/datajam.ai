FROM ubuntu:bionic
RUN sudo apt-get update && sudo apt-get install python3
RUN sudo apt-get install python3-pip
RUN sudo pip3 install pandas jupyter tensorflow
ENTRYPOINT ["/entrypoint.sh"]