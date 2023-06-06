# Procesamiento De Datos Secuenciales

En el siguiente reporsitorio se encuentran los archivos de cada una de las entregas del curso

# ENTREGA #1
Para la entrega #1 se encuentran cada uno de los puntos (3 puntos)
## Punto #1
Seleccione una serie temporal de algún repositorio de datos y realice la predicción
de uno y varios pasos usando un modelo auto-regresivo.
* Entrene a lo menos tres modelos basados en redes neuronales profundas
(Uno basado en una red multicapa profunda, otro en convolución 1D y el otro
en redes recurrentes) en la plataforma TensorFlow-Keras.
* Presente los diagramas de los diferentes modelos y el cálculo de parámetros
de los mismos en cada una de sus capas.
* Realice una comparación de los diferentes modelos usando métricas
adecuadas para cada caso.

## Punto #2
Genere un data set propio de al menos cinco categorías enfocadas a una aplicación
de clasificación de movimiento y realice lo siguiente:
* Entrene a lo menos tres modelos basados en redes neuronales profundas
(Uno basado en una red multicapa profunda, otro en convolución 1D y el otro
en redes recurrentes) en la plataforma TensorFlow-Keras.
* Presente los diagramas de los diferentes modelos y el cálculo de parámetros
de los mismos en cada una de sus capas
* Replique el entrenamiento de uno de los modelos en Edge Impulse y realice
el despliegue en un dispositivo portable (Nano 33, ESP 32 o celular). 

## Punto #3
Genere un data set propio de al menos cinco categorías enfocadas a una aplicación
de clasificación de audio y realice lo siguiente:
* Entrene a lo menos dos modelos basados en redes neuronales profundas
(Uno basado en convolución 2D usando como entrada el espectrograma y
otro basado en los MFCC) en la plataforma TensorFlow-Keras.
* Presente los diagramas de los diferentes modelos y el cálculo de parámetros
de los mismos en cada una de sus capas.
* Replique el entrenamiento de uno de los modelos en Edge Impulse y realice
el despliegue en un dispositivo portable (Nano 33, ESP 32 o celular). 

![](https://i.imgur.com/XBDrYar.png)

# ENTREGA #2
## Punto #1
Seleccione un data-set para una aplicación de clasificación de textos (diferente
a la realizada en clase) proveniente de algún repositorio de datos, o de otra
fuente y realice lo siguiente:
* Explique el problema o la aplicación que se va a resolver.
* Entrene modelos basados en redes recurrentes y en la arquitectura
transformer.
* Valide el funcionamiento de los modelos obtenidos.
* Presente los diagramas de los diferentes modelos y el cálculo de
parámetros de los mismos en cada una de sus capas

## Punto #2
Realice un prototipo de aplicación de PLN donde use un modelo que transcriba
el texto de un audio o de un video y que el texto resultante sea usado por un
modelo de lenguaje y realice lo siguiente:
* Explique el problema o la aplicación que se va a resolver.
* Para el modelo de lenguaje puede ser entrenado desde cero o usando
un modelo pre-entrenado haciendo uso de transfer learning o fine tuning
(puede usar la librería Hugging Face o la API de Open AI a GPT-3).
* Valide el funcionamiento del modelo obtenido con un prototipo de
despliegue de la aplicación realizada. 
