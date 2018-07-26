FROM v2ray/official

VOLUME [ "/var/log/v2ray" ]

COPY v2ray-start /v2ray-start
RUN chmod +x /v2ray-start/main

EXPOSE 3001-3003

CMD [ "/v2ray-start/main" ]
