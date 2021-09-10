package br.com.santander.fullstack.developer.sala.reuniao.exception;

import java.util.Date;

public class DetalhesErro {
    private Date timestamp;
    private String mensagem;
    private String detalhes;

    public DetalhesErro(Date timestamp, String mensagem, String detalhes) {
        super();
        this.timestamp = timestamp;
        this.mensagem = mensagem;
        this.detalhes = detalhes;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public String getMensagem() {
        return mensagem;
    }

    public String getDetalhes() {
        return detalhes;
    }
}
