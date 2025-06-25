# Billetera Digital - Sistema de Pago Electrónico

Este proyecto es un sistema de pago electrónico distribuido diseñado para gestionar transacciones de manera eficiente y segura. La solución utiliza una arquitectura de nodos locales y un nodo central para mejorar la resiliencia, reducir la latencia y aumentar la escalabilidad.

## Análisis del Problema

Los sistemas de pago electrónico centralizados tradicionales enfrentan desafíos como:

* **Latencia y disponibilidad**: La dependencia de una conexión constante al servidor principal puede causar retrasos, especialmente en áreas con conectividad limitada. 
* **Seguridad en las transacciones**: La falta de mecanismos robustos de validación y auditoría puede generar vulnerabilidades. 
* **Sincronización y consistencia de datos**: Mantener la información consistente entre los nodos locales y el central es un desafío significativo.
* **Escalabilidad**: Los sistemas centralizados pueden experimentar cuellos de botella a medida que aumenta el número de usuarios y transacciones. 
* **Experiencia del usuario**: La necesidad de interacciones rápidas y confiables es fundamental para la satisfacción del usuario. 

## Arquitectura de la Solución

Para abordar estos problemas, el sistema implementa una arquitectura distribuida:

* **Nodos Locales**: Operan de forma semiautónoma con un backend en **FastAPI** y una base de datos **SQLite** para gestionar productos y transacciones locales. Esto permite que los pagos y recargas se procesen de manera inmediata. 
* **Nodo Central**: Utiliza **PostgreSQL** para centralizar las transacciones y la información del usuario, asegurando la consistencia de los datos. Cada orden creada en un nodo local se replica en el nodo central. 
* **Aplicación Web Progresiva (PWA)**: Desarrollada con **Ionic** y **React**, proporciona la interfaz para que los usuarios interactúen con el sistema, escaneen códigos QR y gestionen sus pagos y recargas. 

## Características Principales

* **Gestión de Productos**: Permite agregar y administrar productos con detalles como precio, stock y descuentos.
* **Creación de Órdenes**: Facilita la creación de órdenes de compra.
* **Generación de Códigos QR**: Crea códigos QR únicos para cada transacción de venta o recarga para automatizar y dar seguimiento a los pagos. 
* **Recargas de Saldo**: Permite a los usuarios recargar el saldo de su billetera digital.
* **Dashboard Interactivo**: Ofrece una visión general de las métricas clave, como las ventas diarias y el total de órdenes.
* **Historial de Transacciones**: Muestra un registro de todas las transacciones realizadas.
* **Configuración del Negocio**: Permite configurar los datos del comercio.

## Tecnologías Utilizadas

### Backend

* **Python**: Lenguaje de programación.
* **FastAPI**: Framework web para la API.
* **SQLAlchemy**: ORM para la interacción con la base de datos.
* **PostgreSQL**: Base de datos para el nodo central. 
* **SQLite**: Base de datos para los nodos locales. 
* **psycopg2**: Adaptador de PostgreSQL para Python.
* **qrcode**: Librería para generar códigos QR.
* **cryptography**: Para la encriptación de datos.

### Frontend

* **React (con TypeScript)**: Biblioteca para construir la interfaz de usuario.
* **Ionic**: Framework para construir la PWA. 
* **Vite**: Herramienta de construcción y desarrollo.
* **Tailwind CSS**: Framework de CSS para el diseño.
* **Axios**: Cliente HTTP para las peticiones al backend.
* **React Router**: Para la gestión de rutas.
* **Lucide React**: Biblioteca de íconos.

## Modelos de Base de Datos

### Nodo Central

El nodo central gestiona la información de los clientes, sus billeteras (monedero), las órdenes y un historial de ventas.

* **Clientes**: Almacena los datos del cliente (ID, nombre, cédula, correo, teléfono). 
* **Monedero**: Guarda el saldo del cliente. 
* **Orden**: Registra las órdenes con el ID del nodo, el ID del cliente, el total y si ha sido procesada. 
* **Histórico ventas**: Mantiene un registro de las ventas por cliente. 

### Nodos Locales

Los nodos locales manejan la información de los productos y las ventas.

* **Productos**: Contiene la información de los productos (ID, nombre, precio, cantidad). 
* **Promociones productos**: Almacena las promociones aplicables a los productos. 
* **Venta**: Registra los detalles de cada venta. 
* **Venta productos**: Tabla de unión entre ventas y productos. 

## Instalación y Ejecución

### Requisitos Previos

* Python 3
* Node.js y npm
* Una instancia de PostgreSQL en ejecución

### Backend

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/rooseveltalej/digital_wallet.git
    cd digital_wallet
    ```

2.  **Crear un entorno virtual e instalar las dependencias**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # En Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```

3.  **Configurar las variables de entorno**:
    En el archivo `backend/app.py`, actualiza las credenciales de PostgreSQL.

4.  **Ejecutar el servidor**:
    ```bash
    python run_server.py
    ```

### Frontend

1.  **Navegar a la carpeta del frontend**:
    ```bash
    cd frontend
    ```

2.  **Instalar las dependencias**:
    ```bash
    npm install
    ```

3.  **Ejecutar la aplicación**:
    ```bash
    npm run dev
    ```

## Autores

* Anthony Jafeth Arias Robleto
* Roosevelt Alejandro Pérez González
* Luis Andrés Méndez Campos
