FROM v2ray/official

COPY v2ray-start /v2ray-start
RUN chmod +x /v2ray-start/main

VOLUME [ "/var/log/v2ray" ]
EXPOSE 3002-3003

CMD [ "/v2ray-start/main" ]
