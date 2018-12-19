## Problema
Unitec lo contrato para hacer el sistema de asistencia, tome en cuenta los siguientes **requisitos:**   
    * Los estudiantes puden marcar sus asistencia por dia y clase. 
    * Los Maestros pueden marcar asistencia de cada clase. 
    * Los Maestros pueden ver los alumnos que pertenecen a una clase en particular. 

**Defina:**
    * Esquema relacional
    * Disene el API
    * Use Node Js
---
## || Esquema Relacional ||
**Tablas**
**Estudiante**
> IdEstudiante
> nameEstudiante

**Maestros**
```
 IdDocente
 nombreDocente
 Profesion
```


**Asistencia**
```
 idAsistencia
 IdClase
 fecha
 Marca
```


**Clases**
```
 idClase
 idDocente
 nombreClase
```


**Matrcula**
```
idClase
idEstudiate
```
## || Convensión de Nombres ||

**GET**
* /app/view/student  *(Ver alumnos que pertenecen a una clase en particular)
Necesitamos: clase

**POST**
* /app/student/class  *( Los estudiantes puden marcar sus asistencia por dia y clase. )

**POST**
* /app/teacher/class *(Los Maestros pueden marcar asistencia de cada clase.)

