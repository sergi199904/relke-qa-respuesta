# 🧪 QA Playwright Challenge – Relke

Este repositorio contiene la automatización del flujo de creación de una Nota de Venta en el sistema demo de RelBase, como parte del desafío técnico para el proceso de selección de QA Engineer Junior en Relke.

## 🚀 ¿Qué incluye el test?

- Inicio de sesión en la plataforma demo
- Navegación al módulo Ventas > Notas de Venta
- Creación de una nueva Nota de Venta
- Selección de sucursal ("Casa matriz") y bodega ("Bodega principal")
- Selección de cliente existente
- Selección de canal de venta
- Agregado de al menos un producto existente
- Completar los datos mínimos requeridos
- Envío/guardado de la Nota de Venta
- (Opcional) Validación de confirmación en el listado

## 📂 Ubicación del test

El archivo se encuentra en la carpeta `tests/` con el nombre:

```
nota_de_venta.spec.ts
```

## ▶️ ¿Cómo ejecutar el test?

1. **Instala dependencias:**

```bash
npm install
```

2. **Ejecuta el test:**

```bash
npx playwright test tests/nota_de_venta.spec.ts
```

> Puedes correrlo en modo headed para ver la UI:
>
> ```bash
> npx playwright test tests/nota_de_venta.spec.ts --headed
> ```

> O abrir el reporte interactivo:
>
> ```bash
> npx playwright show-report
> ```

## ✅ Validaciones realizadas

- El flujo de creación de Nota de Venta se ejecuta completo sin errores.
- Se seleccionan los datos mínimos requeridos según el reto.
- El test automatiza el proceso tal como lo haría un usuario real.
- (Opcional) Se puede agregar validación para el total y aparición en el listado.

## 🧩 Desafíos y decisiones

- **Selectores dinámicos:** Algunos elementos (como Select2) requieren esperar a que se desplieguen las opciones antes de interactuar. Se usaron selectores robustos y `waitForSelector` para asegurar confiabilidad.
- **Moneda:** El campo de moneda ("Pesos") viene seleccionado por defecto y no requiere intervención manual.
- **Validación del listado:** En algunos casos, la validación del listado puede requerir ajustar el selector al formato de la tabla final.
- **Sin esperas estáticas:** No se usaron esperas manuales tipo `waitForTimeout`, solo esperas de elementos visibles y estables.

## 📝 Notas

- El usuario y contraseña están definidos por el reto:  
  **Usuario:** `qa_junior@relke.cl`  
  **Contraseña:** `Demo123456!`
- El script está diseñado para funcionar en el entorno demo público de RelBase.
- Se puede adaptar el test para crear clientes o productos nuevos si el flujo lo requiere.

---

¡Gracias por revisar mi prueba!  
