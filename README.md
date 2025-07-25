<<<<<<< HEAD
# relke-qa-respuesta
=======
# 🧪 QA Playwright Challenge – Relke

¡Bienvenido/a! Este es el desafío técnico para el proceso de selección de **QA Engineer Junior** en Relke 🚀

---

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

## 📤 ¿Cómo entregar tu prueba?

1. Haz un **fork** de este repositorio
2. Crea una rama con tu nombre:
   ```bash
   git checkout -b qa/tu-nombre-completo
   ```
3. Agrega tus pruebas automatizadas dentro de la carpeta `tests/`
4. Crea un `README` dentro de tu rama explicando:
   - Cómo ejecutar tu test
   - Qué validaciones hiciste
   - Qué desafíos tuviste o decisiones tomaste
5. Haz commit y push a tu rama
6. Abre un **Pull Request** a este repositorio (`main`) con tu nombre completo en el título

---

## 📤 Alternativa privada

Si prefieres mantenerlo en privado, puedes subirlo a un repositorio propio y enviarnos acceso a:

📬 **desarrollo@relke.cl**

---

## ⚙️ Revisión automática

> Este repositorio ejecuta automáticamente tus pruebas usando GitHub Actions cuando haces un Pull Request. Si las pruebas fallan, se sube un reporte para revisión.

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
