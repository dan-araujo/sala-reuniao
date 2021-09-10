package br.com.santander.fullstack.developer.sala.reuniao.model;

import javax.persistence.*;

@Entity
@Table(name = "salareuniao")
public class Sala {

    private long id;
    private String nome;
    private String date;
    private String horaInicio;
    private String horaTermino;

    public Sala() {
    }

    public Sala(long id, String nome, String date, String horaInicio, String horaTermino) {
        this.id = id;
        this.nome = nome;
        this.date = date;
        this.horaInicio = horaInicio;
        this.horaTermino = horaTermino;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "nome", nullable = false)
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Column(name = "data", nullable = false)
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Column(name = "horaInicio", nullable = false)
    public String getHoraInicio() {
        return horaInicio;
    }

    public void setHoraInicio(String horaInicio) {
        this.horaInicio = horaInicio;
    }

    @Column(name = "horaTermino", nullable = false)
    public String getHoraTermino() {
        return horaTermino;
    }

    public void setHoraTermino(String horaTermino) {
        this.horaTermino = horaTermino;
    }

    @Override
    public String toString() {
        return "Sala{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", horaInicio='" + horaInicio + '\'' +
                ", horaTermino='" + horaTermino + '\'' +
                '}';
    }
}
