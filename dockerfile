FROM golang:1.25.4-alpine3.22

WORKDIR /server/golang

ADD go.mod go.sum /server/golang/

RUN go mod download && go install github.com/air-verse/air && go install github.com/swaggo/swag/cmd/swag@latest

ADD . /server/golang/

EXPOSE 8088

ENV PATH="/go/bin:${PATH}"

CMD [ "air" ]