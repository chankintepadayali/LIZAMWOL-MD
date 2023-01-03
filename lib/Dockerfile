FROM quay.io/chankintepadayali/LIZAMWOL-MD

RUN git clone https://github.com/chankintepadayali/LIZAMWOL-MD /root/chankintepadayali
WORKDIR /root/chankintepadayali/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
