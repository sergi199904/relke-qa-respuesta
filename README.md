<<<<<<< HEAD
# relke-qa-respuesta
=======
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

<<<<<<< HEAD
## 🤔 ¿Qué buscamos?

En Relke creemos en el crecimiento desde el aprendizaje. Este desafío no busca medir cuántos años de experiencia tienes, sino **cómo aplicas tus conocimientos actuales, tu motivación por aprender y tu capacidad para enfrentar un flujo real de automatización**.

> 🧩 **No es excluyente si tienes menos de 1 año de experiencia.** Si estás recién egresado/a o en tus primeras experiencias laborales, ¡también puedes participar!

Lo importante es que, con tu formación académica y dedicación, **puedas resolver este reto en un tiempo realista (48 horas)** y mostrar cómo piensas como QA.

---

## 🎯 Desafío

Tu misión es automatizar con Playwright el flujo de **creación de una Nota de Venta** en nuestro sistema demo:

- 🌐 URL: [https://demo.relbase.cl](https://demo.relbase.cl)
- 👤 Usuario: `qa_junior@relke.cl`
- 🔐 Contraseña: `Demo123456!`

### Pasos mínimos esperados

1. Iniciar sesión
2. Ir a **Ventas > Notas de Venta**
3. Hacer clic en **Crear nueva nota**
4. Completar los datos mínimos:
   - Seleccionar sucursal (Casa matriz)
   - Seleccionar bodega (Principal)
   - Seleccionar un cliente (⚠️ puede variar el nombre)
   - Seleccionar moneda (Pesos)
   - Agregar al menos un producto
   - Validar que se calcula un total
5. Guardar y verificar que aparece en el listado con el total correcto

---

## 💡 Reglas y condiciones especiales

- El total debe ser **mayor a $0** y reflejar el precio del producto agregado.
- Evita usar esperas estáticas (`waitForTimeout`). Usa selectores confiables y `await expect(...)`.
- Puedes usar Page Object Model si lo prefieres, pero no es obligatorio.

---

## 📤 ¿Cómo entregar tu prueba en GitHub?

Como el repositorio original de Relke en Bitbucket es público pero de solo lectura, te pedimos que:

1. Clones este repo:
   ```bash
   git clone https://bitbucket.org/relke/relke-qa-challenge.git
   cd relke-qa-challenge
   ```

2. Crees un nuevo repositorio en **tu cuenta personal de GitHub** (puede ser público o privado).

3. Cambies el origen remoto en tu entorno local:
   ```bash
   git remote remove origin
   git remote add origin https://github.com/tu_usuario/relke-qa-respuesta.git
   git push -u origin main
   ```
4. Agrega tus pruebas automatizadas dentro de la carpeta `tests/`

5. Crea un `README` dentro de tu repositorio explicando:
   - Cómo ejecutar tu test
   - Qué validaciones hiciste
   - Qué desafíos tuviste o decisiones tomaste

6. Haz commit y push 

7. Comparte el link del repositorio (y acceso si es privado) por mensaje de Get on board de la postulación

> Si no tienes cuenta en GitHub, puedes crear una gratuita en https://github.com

---

## 📽️ Opcional: muestra tu forma de trabajar

Si quieres destacarte, puedes grabar un video (máx 10 min) mostrando cómo trabajaste el desafío: tus pasos, pruebas, validaciones o errores encontrados.

---

## 🧩 Bonus (opcional)

Puedes agregar validaciones extra como:

- Prueba negativa: ¿qué pasa si no agrego productos?
- Validación de error de campo requerido
- Automatización de logout o expiración de sesión

---

## ⏱️ Tiempo estimado

Tienes **48 horas** desde que recibes esta pauta.

---

## 🧠 Consejos

- Usa `npx playwright codegen` si necesitas inspiración, pero asegúrate de entender y limpiar el código generado.
- Lee los selectores con cuidado. A veces un texto cambia según el estado.
- Escribe como si tu test fuera a mantenerse en producción.
- No estamos buscando perfección, sino **compromiso, criterio y capacidad de automatizar flujos funcionales reales**.

---

¡Mucho éxito! 💥  
Relke QA Team
>>>>>>> 069aa53 (Versión base del desafío QA Relke)
=======
¡Gracias por revisar mi prueba!  
>>>>>>> 82257de (Respuesta a Desafio QA)
