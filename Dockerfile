FROM alpine

RUN apk add --no-cache \
    rsync \
    && rm -rf /var/cache/apk/*

ADD run /usr/local/bin/run
ADD passly_content passly_content.name
ADD public /public

VOLUME /marketing-site

CMD ["/usr/local/bin/run"]
