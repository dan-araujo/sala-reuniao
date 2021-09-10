package br.com.santander.fullstack.developer.sala.reuniao.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> resourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
        DetalhesErro detalhesErro = new DetalhesErro(new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(detalhesErro, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> globalExceptionHandler(Exception ex, WebRequest request) {
        DetalhesErro detalhesErro = new DetalhesErro(new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(detalhesErro, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
